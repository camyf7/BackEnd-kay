"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const client_1 = require("@prisma/client");
const luxon_1 = require("luxon");
const prisma_service_1 = require("../common/prisma/prisma.service");
const calendar_sync_service_1 = require("./calendar-sync.service");
const payment_webhook_service_1 = require("./payment-webhook.service");
const HOURS_48_IN_MILLISECONDS = 48 * 60 * 60 * 1000;
const PERCENTAGE_DIVISOR = 100;
let SiteService = class SiteService {
    prismaService;
    jwtService;
    calendarSyncService;
    paymentWebhookService;
    constructor(prismaService, jwtService, calendarSyncService, paymentWebhookService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.calendarSyncService = calendarSyncService;
        this.paymentWebhookService = paymentWebhookService;
    }
    async registerUser(input, role) {
        const tenant = await this.getOrCreateDefaultTenant();
        const passwordHash = await (0, bcryptjs_1.hash)(input.password, 10);
        const createdUser = await this.prismaService.user.create({
            data: {
                tenantId: tenant.id,
                email: input.email,
                fullName: input.fullName,
                passwordHash,
                role,
            },
            select: { id: true },
        });
        return createdUser;
    }
    async loginUser(input, role) {
        const user = await this.prismaService.user.findUnique({ where: { email: input.email } });
        if (!user || user.role !== role) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isValidPassword = await (0, bcryptjs_1.compare)(input.password, user.passwordHash);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const token = await this.jwtService.signAsync({ userId: user.id, role: user.role, email: user.email, tenantId: user.tenantId }, { secret: process.env.JWT_SECRET ?? 'super-secret-key', expiresIn: '1d' });
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        await this.prismaService.session.create({
            data: { userId: user.id, token, expiresAt, tenantId: user.tenantId },
        });
        await this.createHistory(user.id, 'LOGIN', `Role: ${role}`);
        return { token };
    }
    async createService(input) {
        const tenant = await this.getOrCreateDefaultTenant();
        return this.prismaService.service.create({
            data: { ...input, tenantId: tenant.id },
            select: { id: true },
        });
    }
    async listServices() {
        return this.prismaService.service.findMany({ orderBy: { name: 'asc' } });
    }
    async updateService(serviceId, input) {
        return this.prismaService.service.update({ where: { id: serviceId }, data: input, select: { id: true } });
    }
    async deleteService(serviceId) {
        return this.prismaService.service.delete({ where: { id: serviceId }, select: { id: true } });
    }
    async createAvailability(input) {
        const tenant = await this.getOrCreateDefaultTenant();
        return this.prismaService.availability.create({
            data: { ...input, tenantId: tenant.id, timezone: tenant.defaultTimezone },
            select: { id: true },
        });
    }
    async createBlockedDate(input) {
        const tenant = await this.getOrCreateDefaultTenant();
        return this.prismaService.blockedDate.create({
            data: { ...input, tenantId: tenant.id, source: client_1.AppointmentSource.INTERNAL },
            select: { id: true },
        });
    }
    async listAvailability() {
        return this.prismaService.availability.findMany({ orderBy: { weekDay: 'asc' } });
    }
    async listBlockedDates() {
        return this.prismaService.blockedDate.findMany({ orderBy: { date: 'asc' } });
    }
    async deleteBlockedDate(blockedDateId) {
        return this.prismaService.blockedDate.delete({ where: { id: blockedDateId }, select: { id: true } });
    }
    async createAppointment(userId, input) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const tenant = await this.getTenantByUser(userId);
        if (!input.acceptedTerms) {
            throw new common_1.BadRequestException('You must accept cancellation policy and terms');
        }
        const service = await this.prismaService.service.findUnique({ where: { id: input.serviceId } });
        if (!service) {
            throw new common_1.NotFoundException('Service not found');
        }
        await this.validateBookingWindow(input.appointmentStart, tenant.minimumNoticeHours, tenant.maximumAdvanceDays);
        await this.validateAppointmentAvailability(input.appointmentStart, service.durationInMinutes + service.bufferBeforeInMin + service.bufferAfterInMin, '', tenant.id, input.timezone ?? user.defaultTimezone);
        const appointmentEnd = new Date(input.appointmentStart.getTime() + service.durationInMinutes * 60 * 1000);
        const appointment = await this.prismaService.appointment.create({
            data: {
                tenantId: tenant.id,
                userId,
                serviceId: input.serviceId,
                appointmentStart: input.appointmentStart,
                appointmentEnd,
                status: client_1.AppointmentStatus.CONFIRMED,
                syncStatus: client_1.SyncStatus.PENDING_SYNC,
            },
        });
        const amountBase = input.currency === 'BRL' ? Number(service.priceBrl) : Number(service.priceEur);
        const acceptedPaymentPercentage = input.paymentPercentage || tenant.bookingSignalPercentage;
        const amountToCharge = (amountBase * acceptedPaymentPercentage) / PERCENTAGE_DIVISOR;
        const payment = await this.prismaService.payment.create({
            data: {
                tenantId: tenant.id,
                userId,
                appointmentId: appointment.id,
                amount: amountToCharge,
                currency: input.currency === 'BRL' ? client_1.CurrencyCode.BRL : client_1.CurrencyCode.EUR,
                method: input.paymentMethod,
                isTermsAccepted: input.acceptedTerms,
                status: client_1.PaymentStatus.PAID,
            },
        });
        await this.createInvoice(appointment.id, payment.id, userId, tenant.id);
        await this.calendarSyncService.enqueueAppointmentSync({
            tenantId: tenant.id,
            appointmentId: appointment.id,
            idempotencyKey: `appointment-create-${appointment.id}-v${appointment.version}`,
            action: 'create_or_update',
        });
        await this.notifyAdmins('New booking', `Appointment ${appointment.id} was created`);
        await this.createHistory(userId, 'CREATE_APPOINTMENT', `Appointment ${appointment.id}`);
        return { appointmentId: appointment.id, paymentId: payment.id };
    }
    async rescheduleAppointment(userId, appointmentId, newStart) {
        const appointment = await this.getUserAppointment(userId, appointmentId);
        const service = await this.prismaService.service.findUnique({ where: { id: appointment.serviceId } });
        if (!service) {
            throw new common_1.NotFoundException('Service not found');
        }
        await this.validateAppointmentAvailability(newStart, service.durationInMinutes + service.bufferBeforeInMin + service.bufferAfterInMin, appointmentId, appointment.tenantId, appointment.user.defaultTimezone);
        const appointmentEnd = new Date(newStart.getTime() + service.durationInMinutes * 60 * 1000);
        const updated = await this.prismaService.appointment.updateMany({
            where: { id: appointmentId, version: appointment.version },
            data: {
                appointmentStart: newStart,
                appointmentEnd,
                version: { increment: 1 },
                syncStatus: client_1.SyncStatus.PENDING_SYNC,
            },
        });
        if (updated.count === 0) {
            throw new common_1.BadRequestException('Appointment changed by another process. Please retry');
        }
        await this.calendarSyncService.enqueueAppointmentSync({
            tenantId: appointment.tenantId,
            appointmentId,
            idempotencyKey: `appointment-reschedule-${appointmentId}-v${appointment.version + 1}`,
            action: 'create_or_update',
        });
        await this.createHistory(userId, 'RESCHEDULE_APPOINTMENT', `Appointment ${appointmentId}`);
        return { id: appointmentId };
    }
    async cancelAppointment(userId, appointmentId, reason) {
        const appointment = await this.getUserAppointment(userId, appointmentId);
        const payment = await this.prismaService.payment.findFirst({
            where: { appointmentId, status: client_1.PaymentStatus.PAID },
            orderBy: { createdAt: 'desc' },
        });
        const updatedAppointment = await this.prismaService.appointment.update({
            where: { id: appointmentId },
            data: { status: client_1.AppointmentStatus.CANCELED, cancelReason: reason },
            select: { id: true, appointmentStart: true },
        });
        let refundCreated = false;
        if (payment && this.canRefundAppointment(appointment.appointmentStart)) {
            await this.prismaService.refund.create({
                data: {
                    paymentId: payment.id,
                    appointmentId,
                    amount: payment.amount,
                    reason: 'Canceled with at least 48h in advance',
                    tenantId: appointment.tenantId,
                },
            });
            await this.prismaService.payment.update({
                where: { id: payment.id },
                data: { status: client_1.PaymentStatus.REFUNDED },
            });
            await this.prismaService.appointment.update({
                where: { id: appointmentId },
                data: { status: client_1.AppointmentStatus.REFUNDED },
            });
            refundCreated = true;
        }
        await this.calendarSyncService.enqueueAppointmentSync({
            tenantId: appointment.tenantId,
            appointmentId,
            idempotencyKey: `appointment-cancel-${appointmentId}-v${appointment.version + 1}`,
            action: 'cancel',
        });
        await this.createHistory(userId, 'CANCEL_APPOINTMENT', `Appointment ${appointmentId}`);
        return { id: updatedAppointment.id, refundCreated };
    }
    canRefundAppointment(appointmentStart) {
        const difference = appointmentStart.getTime() - Date.now();
        return difference >= HOURS_48_IN_MILLISECONDS;
    }
    async listClientAppointments(userId) {
        return this.prismaService.appointment.findMany({
            where: { userId },
            include: { service: true, payments: true, invoices: true },
            orderBy: { appointmentStart: 'desc' },
        });
    }
    async listAdminAppointments() {
        return this.prismaService.appointment.findMany({
            include: { service: true, user: true, payments: true },
            orderBy: { appointmentStart: 'desc' },
        });
    }
    async listUsers() {
        return this.prismaService.user.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async listPayments() {
        return this.prismaService.payment.findMany({
            include: { user: true, appointment: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async listInvoicesByUser(userId) {
        return this.prismaService.invoice.findMany({
            where: { userId },
            include: { payment: true, appointment: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async listAllInvoices() {
        return this.prismaService.invoice.findMany({
            include: { user: true, payment: true, appointment: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getDailyFinancialReport(dateInput) {
        const tenant = await this.getOrCreateDefaultTenant();
        const dateStart = new Date(dateInput);
        dateStart.setHours(0, 0, 0, 0);
        const dateEnd = new Date(dateStart);
        dateEnd.setDate(dateEnd.getDate() + 1);
        const paidPayments = await this.prismaService.payment.findMany({
            where: {
                createdAt: { gte: dateStart, lt: dateEnd },
                status: client_1.PaymentStatus.PAID,
                tenantId: tenant.id,
            },
        });
        const pendingPaymentsCount = await this.prismaService.payment.count({
            where: {
                createdAt: { gte: dateStart, lt: dateEnd },
                status: client_1.PaymentStatus.PENDING,
                tenantId: tenant.id,
            },
        });
        const appointments = await this.prismaService.appointment.findMany({
            where: { tenantId: tenant.id, createdAt: { gte: dateStart, lt: dateEnd } },
            include: { user: true },
        });
        const canceledCount = appointments.filter((item) => item.status === client_1.AppointmentStatus.CANCELED).length;
        const noShowCount = appointments.filter((item) => item.noShow).length;
        const uniqueUserCount = new Set(appointments.map((item) => item.userId)).size;
        const totalRevenue = paidPayments.reduce((total, item) => total + Number(item.amount), 0);
        const averageTicket = paidPayments.length > 0 ? totalRevenue / paidPayments.length : 0;
        const grossBrl = paidPayments
            .filter((item) => item.currency === client_1.CurrencyCode.BRL)
            .reduce((total, item) => total + Number(item.amount), 0);
        const grossEur = paidPayments
            .filter((item) => item.currency === client_1.CurrencyCode.EUR)
            .reduce((total, item) => total + Number(item.amount), 0);
        const summary = `Gross BRL: ${grossBrl.toFixed(2)} | Gross EUR: ${grossEur.toFixed(2)} | ` +
            `Paid: ${paidPayments.length} | Pending: ${pendingPaymentsCount}`;
        const reportBrl = await this.prismaService.financialReport.upsert({
            where: { tenantId_reportDate_currency: { tenantId: tenant.id, reportDate: dateStart, currency: client_1.CurrencyCode.BRL } },
            update: {
                grossAmount: grossBrl,
                paidReservations: paidPayments.length,
                pendingPayments: pendingPaymentsCount,
                noShowRate: appointments.length > 0 ? noShowCount / appointments.length : 0,
                cancellationRate: appointments.length > 0 ? canceledCount / appointments.length : 0,
                returningClientsRate: appointments.length > 0 ? uniqueUserCount / appointments.length : 0,
                occupancyRate: appointments.length > 0 ? paidPayments.length / appointments.length : 0,
                averageTicket,
                summary,
            },
            create: {
                tenantId: tenant.id,
                reportDate: dateStart,
                currency: client_1.CurrencyCode.BRL,
                grossAmount: grossBrl,
                paidReservations: paidPayments.length,
                pendingPayments: pendingPaymentsCount,
                noShowRate: appointments.length > 0 ? noShowCount / appointments.length : 0,
                cancellationRate: appointments.length > 0 ? canceledCount / appointments.length : 0,
                returningClientsRate: appointments.length > 0 ? uniqueUserCount / appointments.length : 0,
                occupancyRate: appointments.length > 0 ? paidPayments.length / appointments.length : 0,
                averageTicket,
                summary,
            },
        });
        return { reportBrl, grossEur };
    }
    async connectGoogleCalendar(userId, input) {
        const tenant = await this.getTenantByUser(userId);
        return this.prismaService.googleCalendarConnection.create({
            data: {
                tenantId: tenant.id,
                userId,
                providerAccountId: input.providerAccountId,
                calendarId: input.calendarId,
                calendarName: input.calendarName,
                accessToken: input.accessToken,
                refreshToken: input.refreshToken,
                tokenExpiresAt: input.tokenExpiresAt,
                syncStatus: client_1.SyncStatus.SYNCED,
            },
            select: { id: true },
        });
    }
    async receiveGoogleBlock(userId, input) {
        const tenant = await this.getTenantByUser(userId);
        return this.prismaService.blockedDate.create({
            data: {
                tenantId: tenant.id,
                date: input.date,
                reason: input.reason,
                source: client_1.AppointmentSource.GOOGLE,
                externalProvider: 'google',
                externalReferenceId: input.providerEventId,
                syncStatus: client_1.SyncStatus.SYNCED,
            },
            select: { id: true },
        });
    }
    async createWaitlistEntry(userId, input) {
        const tenant = await this.getTenantByUser(userId);
        return this.prismaService.waitlistEntry.create({
            data: { ...input, userId, tenantId: tenant.id },
            select: { id: true },
        });
    }
    async promoteWaitlistEntry(waitlistId, appointmentId) {
        await this.prismaService.waitlistEntry.update({
            where: { id: waitlistId },
            data: { status: 'promoted' },
        });
        await this.prismaService.userHistory.create({
            data: { action: 'WAITLIST_PROMOTED', metadata: appointmentId, userId: (await this.prismaService.waitlistEntry.findUniqueOrThrow({ where: { id: waitlistId } })).userId },
        });
        return { id: waitlistId };
    }
    async processPaymentWebhook(input) {
        return this.paymentWebhookService.processWebhook(input);
    }
    async upsertTenantSettings(input) {
        const existingTenant = await this.prismaService.tenant.findFirst({ orderBy: { createdAt: 'asc' } });
        if (!existingTenant) {
            return this.prismaService.tenant.create({
                data: {
                    slug: 'kay-nunes',
                    name: input.name,
                    logoUrl: input.logoUrl,
                    primaryColor: input.primaryColor,
                    defaultCurrency: input.defaultCurrency === 'BRL' ? client_1.CurrencyCode.BRL : client_1.CurrencyCode.EUR,
                    defaultTimezone: input.defaultTimezone,
                    minimumNoticeHours: input.minimumNoticeHours,
                    maximumAdvanceDays: input.maximumAdvanceDays,
                    cancellationHoursLimit: input.cancellationHoursLimit,
                    bookingSignalPercentage: input.bookingSignalPercentage,
                    paymentMethods: input.paymentMethods,
                },
                select: { id: true },
            });
        }
        return this.prismaService.tenant.update({
            where: { id: existingTenant.id },
            data: {
                name: input.name,
                logoUrl: input.logoUrl,
                primaryColor: input.primaryColor,
                defaultCurrency: input.defaultCurrency === 'BRL' ? client_1.CurrencyCode.BRL : client_1.CurrencyCode.EUR,
                defaultTimezone: input.defaultTimezone,
                minimumNoticeHours: input.minimumNoticeHours,
                maximumAdvanceDays: input.maximumAdvanceDays,
                cancellationHoursLimit: input.cancellationHoursLimit,
                bookingSignalPercentage: input.bookingSignalPercentage,
                paymentMethods: input.paymentMethods,
            },
            select: { id: true },
        });
    }
    async getAvailableSlots(params) {
        const service = await this.prismaService.service.findUnique({ where: { id: params.serviceId } });
        if (!service) {
            throw new common_1.NotFoundException('Service not found');
        }
        const weekDay = luxon_1.DateTime.fromJSDate(params.date, { zone: params.timezone }).weekday % 7;
        const windows = await this.prismaService.availability.findMany({
            where: { weekDay, isActive: true, deletedAt: null },
            orderBy: { startTime: 'asc' },
        });
        const slots = [];
        for (const window of windows) {
            let current = luxon_1.DateTime.fromISO(`${luxon_1.DateTime.fromJSDate(params.date, { zone: params.timezone }).toISODate()}T${window.startTime}`, { zone: params.timezone });
            const end = luxon_1.DateTime.fromISO(`${luxon_1.DateTime.fromJSDate(params.date, { zone: params.timezone }).toISODate()}T${window.endTime}`, { zone: params.timezone });
            while (current.plus({ minutes: service.durationInMinutes }) <= end) {
                slots.push({
                    start: current.toUTC().toISO() ?? '',
                    end: current.plus({ minutes: service.durationInMinutes }).toUTC().toISO() ?? '',
                });
                current = current.plus({ minutes: service.durationInMinutes });
            }
        }
        return slots;
    }
    async validateAppointmentAvailability(appointmentStart, durationInMinutes, ignoredAppointmentId = '', tenantId = null, timezone = 'America/Sao_Paulo') {
        const appointmentEnd = new Date(appointmentStart.getTime() + durationInMinutes * 60 * 1000);
        const localStart = luxon_1.DateTime.fromJSDate(appointmentStart, { zone: timezone });
        const weekDay = localStart.weekday % 7;
        const hourText = localStart.toFormat('HH:mm');
        const hasAvailability = await this.prismaService.availability.findFirst({
            where: {
                tenantId,
                deletedAt: null,
                weekDay,
                isActive: true,
                startTime: { lte: hourText },
                endTime: { gte: hourText },
            },
        });
        if (!hasAvailability) {
            throw new common_1.BadRequestException('Time is outside availability');
        }
        const blockedDate = await this.prismaService.blockedDate.findFirst({
            where: {
                tenantId,
                deletedAt: null,
                date: {
                    gte: new Date(new Date(appointmentStart).setHours(0, 0, 0, 0)),
                    lt: new Date(new Date(appointmentStart).setHours(23, 59, 59, 999)),
                },
            },
        });
        if (blockedDate) {
            throw new common_1.BadRequestException('Date blocked by admin');
        }
        const conflict = await this.prismaService.appointment.findFirst({
            where: {
                tenantId,
                deletedAt: null,
                id: ignoredAppointmentId ? { not: ignoredAppointmentId } : undefined,
                status: { in: [client_1.AppointmentStatus.PENDING, client_1.AppointmentStatus.CONFIRMED] },
                appointmentStart: { lt: appointmentEnd },
                appointmentEnd: { gt: appointmentStart },
            },
        });
        if (conflict) {
            throw new common_1.BadRequestException('Double booking is not allowed');
        }
    }
    async createInvoice(appointmentId, paymentId, userId, tenantId) {
        const invoiceNumber = `INV-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        await this.prismaService.invoice.create({
            data: { invoiceNumber, appointmentId, paymentId, userId, tenantId },
        });
    }
    async notifyAdmins(title, body) {
        const admins = await this.prismaService.user.findMany({
            where: { role: client_1.UserRole.ADMIN },
            select: { id: true, tenantId: true },
        });
        if (admins.length === 0) {
            return;
        }
        await this.prismaService.notification.createMany({
            data: admins.map((admin) => ({ userId: admin.id, title, body, tenantId: admin.tenantId })),
        });
    }
    async createHistory(userId, action, metadata) {
        await this.prismaService.userHistory.create({
            data: { userId, action, metadata, tenantId: (await this.prismaService.user.findUnique({ where: { id: userId } }))?.tenantId },
        });
    }
    async getUserAppointment(userId, appointmentId) {
        const appointment = await this.prismaService.appointment.findFirst({
            where: { id: appointmentId, userId, deletedAt: null },
            include: { user: true },
        });
        if (!appointment) {
            throw new common_1.NotFoundException('Appointment not found');
        }
        return appointment;
    }
    validateBookingWindow(appointmentStart, minimumNoticeHours, maximumAdvanceDays) {
        const now = Date.now();
        if (appointmentStart.getTime() < now + minimumNoticeHours * 60 * 60 * 1000) {
            throw new common_1.BadRequestException(`Bookings require at least ${minimumNoticeHours}h notice`);
        }
        if (appointmentStart.getTime() > now + maximumAdvanceDays * 24 * 60 * 60 * 1000) {
            throw new common_1.BadRequestException(`Bookings cannot exceed ${maximumAdvanceDays} days in advance`);
        }
    }
    async getTenantByUser(userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user?.tenantId) {
            return this.getOrCreateDefaultTenant();
        }
        const tenant = await this.prismaService.tenant.findUnique({ where: { id: user.tenantId } });
        if (!tenant) {
            return this.getOrCreateDefaultTenant();
        }
        return tenant;
    }
    async getOrCreateDefaultTenant() {
        const existingTenant = await this.prismaService.tenant.findFirst({
            where: { deletedAt: null },
            orderBy: { createdAt: 'asc' },
        });
        if (existingTenant) {
            return existingTenant;
        }
        return this.prismaService.tenant.create({
            data: {
                slug: 'kay-nunes',
                name: 'Kay Nunes',
            },
        });
    }
};
exports.SiteService = SiteService;
exports.SiteService = SiteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        calendar_sync_service_1.CalendarSyncService,
        payment_webhook_service_1.PaymentWebhookService])
], SiteService);
//# sourceMappingURL=site.service.js.map