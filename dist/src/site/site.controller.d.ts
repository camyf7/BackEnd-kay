import { JwtService } from '@nestjs/jwt';
import { BlockDateDto, CancelAppointmentDto, CreateAppointmentDto, CreateAvailabilityDto, CreateServiceDto, GoogleCalendarConnectDto, LoginDto, PaymentWebhookDto, RegisterDto, RescheduleDto, TenantSettingsDto, UpdateServiceDto, WaitlistDto } from './site.dto';
import { SiteService } from './site.service';
export declare class SiteController {
    private readonly siteService;
    private readonly jwtService;
    constructor(siteService: SiteService, jwtService: JwtService);
    registerClient(body: RegisterDto): Promise<{
        id: string;
    }>;
    registerAdmin(body: RegisterDto): Promise<{
        id: string;
    }>;
    loginClient(body: LoginDto): Promise<{
        token: string;
    }>;
    loginAdmin(body: LoginDto): Promise<{
        token: string;
    }>;
    createService(authorization: string, body: CreateServiceDto): Promise<{
        id: string;
    }>;
    listServices(): Promise<unknown[]>;
    updateService(authorization: string, serviceId: string, body: UpdateServiceDto): Promise<{
        id: string;
    }>;
    deleteService(authorization: string, serviceId: string): Promise<{
        id: string;
    }>;
    createAvailability(authorization: string, body: CreateAvailabilityDto): Promise<{
        id: string;
    }>;
    createBlockedDate(authorization: string, body: BlockDateDto): Promise<{
        id: string;
    }>;
    listAvailability(): Promise<unknown[]>;
    listBlockedDates(): Promise<unknown[]>;
    deleteBlockedDate(authorization: string, blockedDateId: string): Promise<{
        id: string;
    }>;
    createAppointment(authorization: string, body: CreateAppointmentDto): Promise<{
        appointmentId: string;
        paymentId: string;
    }>;
    connectGoogleCalendar(authorization: string, body: GoogleCalendarConnectDto): Promise<{
        id: string;
    }>;
    receiveGoogleBlockedDate(authorization: string, body: BlockDateDto): Promise<{
        id: string;
    }>;
    getAvailableSlots(serviceId: string, date: Date, timezone: string): Promise<{
        start: string;
        end: string;
    }[]>;
    rescheduleAppointment(authorization: string, appointmentId: string, body: RescheduleDto): Promise<{
        id: string;
    }>;
    cancelAppointment(authorization: string, appointmentId: string, body: CancelAppointmentDto): Promise<{
        id: string;
        refundCreated: boolean;
    }>;
    listClientAppointments(authorization: string): Promise<unknown[]>;
    listClientInvoices(authorization: string): Promise<unknown[]>;
    getClientProfile(authorization: string): Promise<unknown>;
    updateClientProfile(authorization: string, body: {
        fullName?: string;
        email?: string;
    }): Promise<unknown>;
    createWaitlistEntry(authorization: string, body: WaitlistDto): Promise<{
        id: string;
    }>;
    changeClientPassword(authorization: string, body: {
        currentPassword: string;
        newPassword: string;
    }): Promise<{
        message: string;
    }>;
    deleteMyAccount(authorization: string): Promise<{
        message: string;
    }>;
    listAdminAppointments(authorization: string): Promise<unknown[]>;
    listUsers(authorization: string): Promise<unknown[]>;
    listPayments(authorization: string): Promise<unknown[]>;
    listInvoices(authorization: string): Promise<unknown[]>;
    promoteWaitlistEntry(authorization: string, waitlistId: string, appointmentId: string): Promise<{
        id: string;
    }>;
    upsertTenantSettings(authorization: string, body: TenantSettingsDto): Promise<{
        id: string;
    }>;
    processPaymentWebhook(body: PaymentWebhookDto): Promise<{
        id: string;
    }>;
    getDailyFinancialReport(authorization: string, date: Date): Promise<unknown>;
    adminSmokeTest(): {
        status: string;
    };
    private assertAdmin;
    private extractAuthPayload;
}
