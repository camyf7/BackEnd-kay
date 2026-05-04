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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const auth_guard_1 = require("./auth.guard");
const site_dto_1 = require("./site.dto");
const site_service_1 = require("./site.service");
let SiteController = class SiteController {
    siteService;
    jwtService;
    constructor(siteService, jwtService) {
        this.siteService = siteService;
        this.jwtService = jwtService;
    }
    async registerClient(body) {
        return this.siteService.registerUser(body, client_1.UserRole.CLIENT);
    }
    async registerAdmin(body) {
        return this.siteService.registerUser(body, client_1.UserRole.ADMIN);
    }
    async loginClient(body) {
        return this.siteService.loginUser(body, client_1.UserRole.CLIENT);
    }
    async loginAdmin(body) {
        return this.siteService.loginUser(body, client_1.UserRole.ADMIN);
    }
    async createService(authorization, body) {
        this.assertAdmin(authorization);
        return this.siteService.createService(body);
    }
    async listServices() {
        return this.siteService.listServices();
    }
    async updateService(authorization, serviceId, body) {
        this.assertAdmin(authorization);
        return this.siteService.updateService(serviceId, body);
    }
    async deleteService(authorization, serviceId) {
        this.assertAdmin(authorization);
        return this.siteService.deleteService(serviceId);
    }
    async createAvailability(authorization, body) {
        this.assertAdmin(authorization);
        return this.siteService.createAvailability(body);
    }
    async createBlockedDate(authorization, body) {
        this.assertAdmin(authorization);
        return this.siteService.createBlockedDate(body);
    }
    async listAvailability() {
        return this.siteService.listAvailability();
    }
    async listBlockedDates() {
        return this.siteService.listBlockedDates();
    }
    async deleteBlockedDate(authorization, blockedDateId) {
        this.assertAdmin(authorization);
        return this.siteService.deleteBlockedDate(blockedDateId);
    }
    async createAppointment(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.createAppointment(user.userId, body);
    }
    async connectGoogleCalendar(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.connectGoogleCalendar(user.userId, body);
    }
    async receiveGoogleBlockedDate(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.receiveGoogleBlock(user.userId, {
            date: body.date,
            reason: body.reason,
            providerEventId: `google-${body.date.toISOString()}`,
        });
    }
    async getAvailableSlots(serviceId, date, timezone) {
        return this.siteService.getAvailableSlots({
            serviceId,
            date,
            timezone: timezone || 'America/Sao_Paulo',
        });
    }
    async rescheduleAppointment(authorization, appointmentId, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.rescheduleAppointment(user.userId, appointmentId, body.appointmentStart);
    }
    async cancelAppointment(authorization, appointmentId, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.cancelAppointment(user.userId, appointmentId, body.reason);
    }
    async listClientAppointments(authorization) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.listClientAppointments(user.userId);
    }
    async listClientInvoices(authorization) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.listInvoicesByUser(user.userId);
    }
    async getClientProfile(authorization) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.getClientProfile(user.userId);
    }
    async updateClientProfile(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.updateClientProfile(user.userId, body);
    }
    async createWaitlistEntry(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        return this.siteService.createWaitlistEntry(user.userId, body);
    }
    async changeClientPassword(authorization, body) {
        const user = this.extractAuthPayload(authorization);
        await this.siteService.changeClientPassword(user.userId, body.currentPassword, body.newPassword);
        return { message: 'Password changed successfully' };
    }
    async deleteMyAccount(authorization) {
        const user = this.extractAuthPayload(authorization);
        const result = await this.siteService.deleteUserAccount(user.userId);
        return { message: result.message };
    }
    async listAdminAppointments(authorization) {
        this.assertAdmin(authorization);
        return this.siteService.listAdminAppointments();
    }
    async listUsers(authorization) {
        this.assertAdmin(authorization);
        return this.siteService.listUsers();
    }
    async listPayments(authorization) {
        this.assertAdmin(authorization);
        return this.siteService.listPayments();
    }
    async listInvoices(authorization) {
        this.assertAdmin(authorization);
        return this.siteService.listAllInvoices();
    }
    async promoteWaitlistEntry(authorization, waitlistId, appointmentId) {
        this.assertAdmin(authorization);
        return this.siteService.promoteWaitlistEntry(waitlistId, appointmentId);
    }
    async upsertTenantSettings(authorization, body) {
        this.assertAdmin(authorization);
        return this.siteService.upsertTenantSettings(body);
    }
    async processPaymentWebhook(body) {
        return this.siteService.processPaymentWebhook({
            tenantId: null,
            provider: body.provider,
            eventId: body.eventId,
            eventName: body.eventName,
            paymentId: body.paymentId,
            payload: body.payload,
        });
    }
    async getDailyFinancialReport(authorization, date) {
        this.assertAdmin(authorization);
        return this.siteService.getDailyFinancialReport(date);
    }
    adminSmokeTest() {
        return { status: 'admin module ok' };
    }
    assertAdmin(authorization) {
        const user = this.extractAuthPayload(authorization);
        if (user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('Only admin role can access this endpoint');
        }
    }
    extractAuthPayload(authorization) {
        const token = authorization?.replace('Bearer ', '');
        return this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET ?? 'super-secret-key',
        });
    }
};
exports.SiteController = SiteController;
__decorate([
    (0, common_1.Post)('auth/register-client'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "registerClient", null);
__decorate([
    (0, common_1.Post)('auth/register-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "registerAdmin", null);
__decorate([
    (0, common_1.Post)('auth/login-client'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "loginClient", null);
__decorate([
    (0, common_1.Post)('auth/login-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "loginAdmin", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('services'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.CreateServiceDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createService", null);
__decorate([
    (0, common_1.Get)('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listServices", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('services/:id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, site_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "updateService", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('services/:id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "deleteService", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('availability'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.CreateAvailabilityDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createAvailability", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('blocked-dates'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.BlockDateDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createBlockedDate", null);
__decorate([
    (0, common_1.Get)('availability'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listAvailability", null);
__decorate([
    (0, common_1.Get)('blocked-dates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listBlockedDates", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('blocked-dates/:id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "deleteBlockedDate", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('appointments'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('calendar/google/connect'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.GoogleCalendarConnectDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "connectGoogleCalendar", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('calendar/google/blocked-date'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.BlockDateDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "receiveGoogleBlockedDate", null);
__decorate([
    (0, common_1.Get)('appointments/slots'),
    __param(0, (0, common_1.Query)('serviceId')),
    __param(1, (0, common_1.Query)('date', new common_1.ParseDatePipe({ optional: false }))),
    __param(2, (0, common_1.Query)('timezone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "getAvailableSlots", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('appointments/:id/reschedule'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, site_dto_1.RescheduleDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "rescheduleAppointment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('appointments/:id/cancel'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, site_dto_1.CancelAppointmentDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "cancelAppointment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('client/appointments'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listClientAppointments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('client/invoices'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listClientInvoices", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('client/profile'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "getClientProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('client/profile'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "updateClientProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('client/waitlist'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.WaitlistDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createWaitlistEntry", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('client/password'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "changeClientPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('client/account'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "deleteMyAccount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('admin/appointments'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listAdminAppointments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('admin/users'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('admin/payments'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listPayments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('admin/invoices'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "listInvoices", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('admin/waitlist/:id/promote/:appointmentId'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('appointmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "promoteWaitlistEntry", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('admin/tenant-settings'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, site_dto_1.TenantSettingsDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "upsertTenantSettings", null);
__decorate([
    (0, common_1.Post)('payments/webhook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.PaymentWebhookDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "processPaymentWebhook", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('admin/financial-report/:date'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('date', new common_1.ParseDatePipe({ optional: false }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "getDailyFinancialReport", null);
__decorate([
    (0, common_1.Get)('admin/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SiteController.prototype, "adminSmokeTest", null);
exports.SiteController = SiteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [site_service_1.SiteService,
        jwt_1.JwtService])
], SiteController);
//# sourceMappingURL=site.controller.js.map