import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcryptjs';
import {
  AppointmentStatus,
  AppointmentSource,
  CurrencyCode,
  PaymentStatus,
  SyncStatus,
  UserRole,
} from '@prisma/client';
import { DateTime } from 'luxon';
import { PrismaService } from '../common/prisma/prisma.service';
import { CalendarSyncService } from './calendar-sync.service';
import { PaymentWebhookService } from './payment-webhook.service';
import { CreateAppointmentInput, LoginInput, RegisterInput } from './site.types';

const HOURS_48_IN_MILLISECONDS: number = 48 * 60 * 60 * 1000;
const PERCENTAGE_DIVISOR: number = 100;

@Injectable()
export class SiteService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly calendarSyncService: CalendarSyncService,
    private readonly paymentWebhookService: PaymentWebhookService,
  ) {}

  public async registerUser(input: RegisterInput, role: UserRole): Promise<{ id: string }> {
    const tenant = await this.getOrCreateDefaultTenant();
    const passwordHash: string = await hash(input.password, 10);
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

  public async loginUser(input: LoginInput, role: UserRole): Promise<{ token: string }> {
    const user = await this.prismaService.user.findUnique({ where: { email: input.email } });
    if (!user || user.role !== role) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isValidPassword: boolean = await compare(input.password, user.passwordHash);
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token: string = await this.jwtService.signAsync(
      { userId: user.id, role: user.role, email: user.email, tenantId: user.tenantId },
      { secret: process.env.JWT_SECRET ?? 'super-secret-key', expiresIn: '1d' },
    );
    const expiresAt: Date = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await this.prismaService.session.create({
      data: { userId: user.id, token, expiresAt, tenantId: user.tenantId },
    });
    await this.createHistory(user.id, user.tenantId, 'LOGIN', `Role: ${role}`);
    return { token };
  }

  public async createService(input: {
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: number;
    priceEur: number;
  }): Promise<{ id: string }> {
    const tenant = await this.getOrCreateDefaultTenant();
    return this.prismaService.service.create({
      data: { ...input, tenantId: tenant.id },
      select: { id: true },
    });
  }

  public async listServices(): Promise<unknown[]> {
    return this.prismaService.service.findMany({ orderBy: { name: 'asc' } });
  }

  public async updateService(
    serviceId: string,
    input: {
      name?: string;
      description?: string;
      durationInMinutes?: number;
      priceBrl?: number;
      priceEur?: number;
    },
  ): Promise<{ id: string }> {
    return this.prismaService.service.update({ where: { id: serviceId }, data: input, select: { id: true } });
  }

  public async deleteService(serviceId: string): Promise<{ id: string }> {
    return this.prismaService.service.delete({ where: { id: serviceId }, select: { id: true } });
  }

  public async createAvailability(input: {
    weekDay: number;
    startTime: string;
    endTime: string;
  }): Promise<{ id: string }> {
    const tenant = await this.getOrCreateDefaultTenant();
    return this.prismaService.availability.create({
      data: { ...input, tenantId: tenant.id, timezone: tenant.defaultTimezone },
      select: { id: true },
    });
  }

  public async createBlockedDate(input: { date: Date; reason: string }): Promise<{ id: string }> {
    const tenant = await this.getOrCreateDefaultTenant();
    return this.prismaService.blockedDate.create({
      data: { ...input, tenantId: tenant.id, source: AppointmentSource.INTERNAL },
      select: { id: true },
    });
  }

  public async listAvailability(): Promise<unknown[]> {
    return this.prismaService.availability.findMany({ orderBy: { weekDay: 'asc' } });
  }

  public async listBlockedDates(): Promise<unknown[]> {
    return this.prismaService.blockedDate.findMany({ orderBy: { date: 'asc' } });
  }

  public async deleteBlockedDate(blockedDateId: string): Promise<{ id: string }> {
    return this.prismaService.blockedDate.delete({ where: { id: blockedDateId }, select: { id: true } });
  }

  public async createAppointment(
    userId: string,
    input: CreateAppointmentInput,
  ): Promise<{ appointmentId: string; paymentId: string }> {
    const user = await this.prismaService.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const tenant = await this.getTenantByUser(userId);
    if (!input.acceptedTerms) {
      throw new BadRequestException('You must accept cancellation policy and terms');
    }
    const service = await this.prismaService.service.findUnique({ where: { id: input.serviceId } });
    if (!service) {
      throw new NotFoundException('Service not found');
    }
    await this.validateBookingWindow(input.appointmentStart, tenant.minimumNoticeHours, tenant.maximumAdvanceDays);
    await this.validateAppointmentAvailability(
      input.appointmentStart,
      service.durationInMinutes + service.bufferBeforeInMin + service.bufferAfterInMin,
      '',
      tenant.id,
      input.timezone ?? user.defaultTimezone,
    );
    const appointmentEnd: Date = new Date(
      input.appointmentStart.getTime() + service.durationInMinutes * 60 * 1000,
    );
    const appointment = await this.prismaService.appointment.create({
      data: {
        tenantId: tenant.id,
        userId,
        serviceId: input.serviceId,
        appointmentStart: input.appointmentStart,
        appointmentEnd,
        status: AppointmentStatus.CONFIRMED,
        syncStatus: SyncStatus.PENDING_SYNC,
      },
    });
    const amountBase: number = input.currency === 'BRL' ? Number(service.priceBrl) : Number(service.priceEur);
    const acceptedPaymentPercentage: number = input.paymentPercentage || tenant.bookingSignalPercentage;
    const amountToCharge: number = (amountBase * acceptedPaymentPercentage) / PERCENTAGE_DIVISOR;
    const payment = await this.prismaService.payment.create({
      data: {
        tenantId: tenant.id,
        userId,
        appointmentId: appointment.id,
        amount: amountToCharge,
        currency: input.currency === 'BRL' ? CurrencyCode.BRL : CurrencyCode.EUR,
        method: input.paymentMethod,
        isTermsAccepted: input.acceptedTerms,
        status: PaymentStatus.PAID,
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
    await this.createHistory(userId, tenant.id, 'CREATE_APPOINTMENT', `Appointment ${appointment.id}`);
    return { appointmentId: appointment.id, paymentId: payment.id };
  }

  public async rescheduleAppointment(
    userId: string,
    appointmentId: string,
    newStart: Date,
  ): Promise<{ id: string }> {
    const appointment = await this.getUserAppointment(userId, appointmentId);
    const service = await this.prismaService.service.findUnique({ where: { id: appointment.serviceId } });
    if (!service) {
      throw new NotFoundException('Service not found');
    }
    await this.validateAppointmentAvailability(
      newStart,
      service.durationInMinutes + service.bufferBeforeInMin + service.bufferAfterInMin,
      appointmentId,
      appointment.tenantId,
      appointment.user.defaultTimezone,
    );
    const appointmentEnd: Date = new Date(newStart.getTime() + service.durationInMinutes * 60 * 1000);
    const updated = await this.prismaService.appointment.updateMany({
      where: { id: appointmentId, version: appointment.version },
      data: {
        appointmentStart: newStart,
        appointmentEnd,
        version: { increment: 1 },
        syncStatus: SyncStatus.PENDING_SYNC,
      },
    });
    if (updated.count === 0) {
      throw new BadRequestException('Appointment changed by another process. Please retry');
    }
    await this.calendarSyncService.enqueueAppointmentSync({
      tenantId: appointment.tenantId,
      appointmentId,
      idempotencyKey: `appointment-reschedule-${appointmentId}-v${appointment.version + 1}`,
      action: 'create_or_update',
    });
    await this.createHistory(userId, appointment.tenantId, 'RESCHEDULE_APPOINTMENT', `Appointment ${appointmentId}`);
    return { id: appointmentId };
  }

  public async cancelAppointment(
    userId: string,
    appointmentId: string,
    reason: string,
  ): Promise<{ id: string; refundCreated: boolean }> {
    const appointment = await this.getUserAppointment(userId, appointmentId);
    const payment = await this.prismaService.payment.findFirst({
      where: { appointmentId, status: PaymentStatus.PAID },
      orderBy: { createdAt: 'desc' },
    });
    const updatedAppointment = await this.prismaService.appointment.update({
      where: { id: appointmentId },
      data: { status: AppointmentStatus.CANCELED, cancelReason: reason },
      select: { id: true, appointmentStart: true },
    });
    let refundCreated: boolean = false;
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
        data: { status: PaymentStatus.REFUNDED },
      });
      await this.prismaService.appointment.update({
        where: { id: appointmentId },
        data: { status: AppointmentStatus.REFUNDED },
      });
      refundCreated = true;
    }
    await this.calendarSyncService.enqueueAppointmentSync({
      tenantId: appointment.tenantId,
      appointmentId,
      idempotencyKey: `appointment-cancel-${appointmentId}-v${appointment.version + 1}`,
      action: 'cancel',
    });
    await this.createHistory(userId, appointment.tenantId, 'CANCEL_APPOINTMENT', `Appointment ${appointmentId}`);
    return { id: updatedAppointment.id, refundCreated };
  }

  public canRefundAppointment(appointmentStart: Date): boolean {
    const difference: number = appointmentStart.getTime() - Date.now();
    return difference >= HOURS_48_IN_MILLISECONDS;
  }

  public async listClientAppointments(userId: string): Promise<unknown[]> {
    return this.prismaService.appointment.findMany({
      where: { userId },
      include: { service: true, payments: true, invoices: true },
      orderBy: { appointmentStart: 'desc' },
    });
  }

  public async getClientProfile(userId: string): Promise<unknown> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  public async updateClientProfile(
    userId: string,
    data: { fullName?: string; email?: string },
  ): Promise<unknown> {
    if (data.email) {
      const existingUser = await this.prismaService.user.findFirst({
        where: { email: data.email, id: { not: userId } },
      });
      if (existingUser) {
        throw new BadRequestException('Email already in use');
      }
    }
    return this.prismaService.user.update({
      where: { id: userId },
      data: {
        ...(data.fullName && { fullName: data.fullName }),
        ...(data.email && { email: data.email }),
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  public async changeClientPassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    if (!currentPassword || !newPassword) {
      throw new BadRequestException('Current password and new password are required');
    }
    const user = await this.prismaService.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isValidPassword = await compare(currentPassword, user.passwordHash);
    if (!isValidPassword) {
      throw new UnauthorizedException('Current password is incorrect');
    }
    if (newPassword.length < 6) {
      throw new BadRequestException('New password must be at least 6 characters long');
    }
    const newPasswordHash = await hash(newPassword, 10);
    await this.prismaService.user.update({
      where: { id: userId },
      data: { passwordHash: newPasswordHash },
    });
    await this.createHistory(userId, user.tenantId, 'CHANGE_PASSWORD', 'Password changed successfully');
  }

  public async deleteUserAccount(userId: string): Promise<{ id: string; message: string }> {
    const user = await this.prismaService.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    if (user.deletedAt) {
      throw new BadRequestException('Conta já foi excluída anteriormente');
    }

    const tenantId = user.tenantId;

    await this.prismaService.session.updateMany({
      where: { userId },
      data: { expiresAt: new Date() },
    });

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        deletedAt: new Date(),
        email: `deleted_${Date.now()}_${user.email}`,
        fullName: '[Conta Excluída]',
      },
    });

    await this.prismaService.userHistory.create({
      data: {
        userId,
        tenantId,
        action: 'ACCOUNT_DELETED',
        metadata: `Conta excluída em ${new Date().toISOString()}`,
      },
    });

    return { id: userId, message: 'Conta excluída com sucesso' };
  }

  public async deleteUser(userId: string): Promise<{ id: string }> {
    const user = await this.prismaService.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prismaService.user.delete({ where: { id: userId } });
    return { id: userId };
  }

  public async listAdminAppointments(): Promise<unknown[]> {
    return this.prismaService.appointment.findMany({
      include: { service: true, user: true, payments: true },
      orderBy: { appointmentStart: 'desc' },
    });
  }

  public async listUsers(): Promise<unknown[]> {
    return this.prismaService.user.findMany({ orderBy: { createdAt: 'desc' } });
  }

  public async listPayments(): Promise<unknown[]> {
    return this.prismaService.payment.findMany({
      include: { user: true, appointment: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  public async listInvoicesByUser(userId: string): Promise<unknown[]> {
    return this.prismaService.invoice.findMany({
      where: { userId },
      include: { payment: true, appointment: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  public async listAllInvoices(): Promise<unknown[]> {
    return this.prismaService.invoice.findMany({
      include: { user: true, payment: true, appointment: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  public async getDailyFinancialReport(dateInput: Date): Promise<unknown> {
    const tenant = await this.getOrCreateDefaultTenant();
    const dateStart: Date = new Date(dateInput);
    dateStart.setHours(0, 0, 0, 0);
    const dateEnd: Date = new Date(dateStart);
    dateEnd.setDate(dateEnd.getDate() + 1);
    const paidPayments = await this.prismaService.payment.findMany({
      where: {
        createdAt: { gte: dateStart, lt: dateEnd },
        status: PaymentStatus.PAID,
        tenantId: tenant.id,
      },
    });
    const pendingPaymentsCount: number = await this.prismaService.payment.count({
      where: {
        createdAt: { gte: dateStart, lt: dateEnd },
        status: PaymentStatus.PENDING,
        tenantId: tenant.id,
      },
    });
    const appointments = await this.prismaService.appointment.findMany({
      where: { tenantId: tenant.id, createdAt: { gte: dateStart, lt: dateEnd } },
      include: { user: true },
    });
    const canceledCount: number = appointments.filter((item) => item.status === AppointmentStatus.CANCELED).length;
    const noShowCount: number = appointments.filter((item) => item.noShow).length;
    const uniqueUserCount: number = new Set(appointments.map((item) => item.userId)).size;
    const totalRevenue: number = paidPayments.reduce((total, item) => total + Number(item.amount), 0);
    const averageTicket: number = paidPayments.length > 0 ? totalRevenue / paidPayments.length : 0;
    const grossBrl: number = paidPayments
      .filter((item) => item.currency === CurrencyCode.BRL)
      .reduce((total, item) => total + Number(item.amount), 0);
    const grossEur: number = paidPayments
      .filter((item) => item.currency === CurrencyCode.EUR)
      .reduce((total, item) => total + Number(item.amount), 0);
    const summary: string =
      `Gross BRL: ${grossBrl.toFixed(2)} | Gross EUR: ${grossEur.toFixed(2)} | ` +
      `Paid: ${paidPayments.length} | Pending: ${pendingPaymentsCount}`;
    const reportBrl = await this.prismaService.financialReport.upsert({
      where: { tenantId_reportDate_currency: { tenantId: tenant.id, reportDate: dateStart, currency: CurrencyCode.BRL } },
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
        currency: CurrencyCode.BRL,
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

  public async connectGoogleCalendar(
    userId: string,
    input: {
      providerAccountId: string;
      calendarId: string;
      calendarName: string;
      accessToken: string;
      refreshToken: string;
      tokenExpiresAt: Date;
    },
  ): Promise<{ id: string }> {
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
        syncStatus: SyncStatus.SYNCED,
      },
      select: { id: true },
    });
  }

  public async receiveGoogleBlock(
    userId: string,
    input: { date: Date; reason: string; providerEventId: string },
  ): Promise<{ id: string }> {
    const tenant = await this.getTenantByUser(userId);
    return this.prismaService.blockedDate.create({
      data: {
        tenantId: tenant.id,
        date: input.date,
        reason: input.reason,
        source: AppointmentSource.GOOGLE,
        externalProvider: 'google',
        externalReferenceId: input.providerEventId,
        syncStatus: SyncStatus.SYNCED,
      },
      select: { id: true },
    });
  }

  public async getAvailableSlots(params: {
    serviceId: string;
    date: Date;
    timezone: string;
  }): Promise<{ start: string; end: string }[]> {
    const service = await this.prismaService.service.findUnique({ where: { id: params.serviceId } });
    if (!service) {
      throw new NotFoundException('Service not found');
    }
    const weekDay = DateTime.fromJSDate(params.date, { zone: params.timezone }).weekday % 7;
    const windows = await this.prismaService.availability.findMany({
      where: { weekDay, isActive: true, deletedAt: null },
      orderBy: { startTime: 'asc' },
    });
    const slots: { start: string; end: string }[] = [];
    for (const window of windows) {
      let current = DateTime.fromISO(
        `${DateTime.fromJSDate(params.date, { zone: params.timezone }).toISODate()}T${window.startTime}`,
        { zone: params.timezone },
      );
      const end = DateTime.fromISO(
        `${DateTime.fromJSDate(params.date, { zone: params.timezone }).toISODate()}T${window.endTime}`,
        { zone: params.timezone },
      );
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

  public async createWaitlistEntry(
    userId: string,
    input: { serviceId: string; preferredStartDate: Date; preferredEndDate: Date },
  ): Promise<{ id: string }> {
    const tenant = await this.getTenantByUser(userId);
    return this.prismaService.waitlistEntry.create({
      data: { ...input, userId, tenantId: tenant.id },
      select: { id: true },
    });
  }

  public async promoteWaitlistEntry(waitlistId: string, appointmentId: string): Promise<{ id: string }> {
    await this.prismaService.waitlistEntry.update({
      where: { id: waitlistId },
      data: { status: 'promoted' },
    });
    const waitlistEntry = await this.prismaService.waitlistEntry.findUniqueOrThrow({ where: { id: waitlistId } });
    await this.prismaService.userHistory.create({
      data: {
        action: 'WAITLIST_PROMOTED',
        metadata: appointmentId,
        userId: waitlistEntry.userId,
        tenantId: waitlistEntry.tenantId,
      },
    });
    return { id: waitlistId };
  }

  public async upsertTenantSettings(input: {
    name: string;
    logoUrl?: string;
    primaryColor?: string;
    defaultCurrency: 'BRL' | 'EUR';
    defaultTimezone: string;
    minimumNoticeHours: number;
    maximumAdvanceDays: number;
    cancellationHoursLimit: number;
    bookingSignalPercentage: number;
    paymentMethods: string;
  }): Promise<{ id: string }> {
    const existingTenant = await this.prismaService.tenant.findFirst({ orderBy: { createdAt: 'asc' } });
    if (!existingTenant) {
      return this.prismaService.tenant.create({
        data: {
          slug: 'kay-nunes',
          name: input.name,
          logoUrl: input.logoUrl,
          primaryColor: input.primaryColor,
          defaultCurrency: input.defaultCurrency === 'BRL' ? CurrencyCode.BRL : CurrencyCode.EUR,
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
        defaultCurrency: input.defaultCurrency === 'BRL' ? CurrencyCode.BRL : CurrencyCode.EUR,
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

  public async processPaymentWebhook(input: {
    tenantId: string | null;
    provider: string;
    eventId: string;
    eventName: string;
    paymentId?: string;
    payload: Record<string, unknown>;
  }): Promise<{ id: string }> {
    return this.paymentWebhookService.processWebhook(input);
  }

  private async validateAppointmentAvailability(
    appointmentStart: Date,
    durationInMinutes: number,
    ignoredAppointmentId: string = '',
    tenantId: string | null = null,
    timezone: string = 'America/Sao_Paulo',
  ): Promise<void> {
    const appointmentEnd: Date = new Date(appointmentStart.getTime() + durationInMinutes * 60 * 1000);
    const localStart = DateTime.fromJSDate(appointmentStart, { zone: timezone });
    const weekDay: number = localStart.weekday % 7;
    const hourText: string = localStart.toFormat('HH:mm');
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
      throw new BadRequestException('Time is outside availability');
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
      throw new BadRequestException('Date blocked by admin');
    }
    const conflict = await this.prismaService.appointment.findFirst({
      where: {
        tenantId,
        deletedAt: null,
        id: ignoredAppointmentId ? { not: ignoredAppointmentId } : undefined,
        status: { in: [AppointmentStatus.PENDING, AppointmentStatus.CONFIRMED] },
        appointmentStart: { lt: appointmentEnd },
        appointmentEnd: { gt: appointmentStart },
      },
    });
    if (conflict) {
      throw new BadRequestException('Double booking is not allowed');
    }
  }

  private async createInvoice(
    appointmentId: string,
    paymentId: string,
    userId: string,
    tenantId: string | null,
  ): Promise<void> {
    const invoiceNumber: string = `INV-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    await this.prismaService.invoice.create({
      data: { invoiceNumber, appointmentId, paymentId, userId, tenantId },
    });
  }

  private async notifyAdmins(title: string, body: string): Promise<void> {
    const admins = await this.prismaService.user.findMany({
      where: { role: UserRole.ADMIN },
      select: { id: true, tenantId: true },
    });
    if (admins.length === 0) {
      return;
    }
    await this.prismaService.notification.createMany({
      data: admins.map((admin) => ({ userId: admin.id, title, body, tenantId: admin.tenantId })),
    });
  }

  private async createHistory(
    userId: string,
    tenantId: string | null,
    action: string,
    metadata: string,
  ): Promise<void> {
    await this.prismaService.userHistory.create({
      data: { userId, tenantId, action, metadata },
    });
  }

  private async getUserAppointment(userId: string, appointmentId: string) {
    const appointment = await this.prismaService.appointment.findFirst({
      where: { id: appointmentId, userId, deletedAt: null },
      include: { user: true },
    });
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }
    return appointment;
  }

  private validateBookingWindow(
    appointmentStart: Date,
    minimumNoticeHours: number,
    maximumAdvanceDays: number,
  ): void {
    const now: number = Date.now();
    if (appointmentStart.getTime() < now + minimumNoticeHours * 60 * 60 * 1000) {
      throw new BadRequestException(`Bookings require at least ${minimumNoticeHours}h notice`);
    }
    if (appointmentStart.getTime() > now + maximumAdvanceDays * 24 * 60 * 60 * 1000) {
      throw new BadRequestException(`Bookings cannot exceed ${maximumAdvanceDays} days in advance`);
    }
  }

  private async getTenantByUser(userId: string) {
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

  private async getOrCreateDefaultTenant() {
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
}