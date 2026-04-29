import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';
import { CalendarSyncService } from './calendar-sync.service';
import { PaymentWebhookService } from './payment-webhook.service';
import { CreateAppointmentInput, LoginInput, RegisterInput } from './site.types';
export declare class SiteService {
    private readonly prismaService;
    private readonly jwtService;
    private readonly calendarSyncService;
    private readonly paymentWebhookService;
    constructor(prismaService: PrismaService, jwtService: JwtService, calendarSyncService: CalendarSyncService, paymentWebhookService: PaymentWebhookService);
    registerUser(input: RegisterInput, role: UserRole): Promise<{
        id: string;
    }>;
    loginUser(input: LoginInput, role: UserRole): Promise<{
        token: string;
    }>;
    createService(input: {
        name: string;
        description: string;
        durationInMinutes: number;
        priceBrl: number;
        priceEur: number;
    }): Promise<{
        id: string;
    }>;
    listServices(): Promise<unknown[]>;
    updateService(serviceId: string, input: {
        name?: string;
        description?: string;
        durationInMinutes?: number;
        priceBrl?: number;
        priceEur?: number;
    }): Promise<{
        id: string;
    }>;
    deleteService(serviceId: string): Promise<{
        id: string;
    }>;
    createAvailability(input: {
        weekDay: number;
        startTime: string;
        endTime: string;
    }): Promise<{
        id: string;
    }>;
    createBlockedDate(input: {
        date: Date;
        reason: string;
    }): Promise<{
        id: string;
    }>;
    listAvailability(): Promise<unknown[]>;
    listBlockedDates(): Promise<unknown[]>;
    deleteBlockedDate(blockedDateId: string): Promise<{
        id: string;
    }>;
    createAppointment(userId: string, input: CreateAppointmentInput): Promise<{
        appointmentId: string;
        paymentId: string;
    }>;
    rescheduleAppointment(userId: string, appointmentId: string, newStart: Date): Promise<{
        id: string;
    }>;
    cancelAppointment(userId: string, appointmentId: string, reason: string): Promise<{
        id: string;
        refundCreated: boolean;
    }>;
    canRefundAppointment(appointmentStart: Date): boolean;
    listClientAppointments(userId: string): Promise<unknown[]>;
    listAdminAppointments(): Promise<unknown[]>;
    listUsers(): Promise<unknown[]>;
    listPayments(): Promise<unknown[]>;
    listInvoicesByUser(userId: string): Promise<unknown[]>;
    listAllInvoices(): Promise<unknown[]>;
    getDailyFinancialReport(dateInput: Date): Promise<unknown>;
    connectGoogleCalendar(userId: string, input: {
        providerAccountId: string;
        calendarId: string;
        calendarName: string;
        accessToken: string;
        refreshToken: string;
        tokenExpiresAt: Date;
    }): Promise<{
        id: string;
    }>;
    receiveGoogleBlock(userId: string, input: {
        date: Date;
        reason: string;
        providerEventId: string;
    }): Promise<{
        id: string;
    }>;
    createWaitlistEntry(userId: string, input: {
        serviceId: string;
        preferredStartDate: Date;
        preferredEndDate: Date;
    }): Promise<{
        id: string;
    }>;
    promoteWaitlistEntry(waitlistId: string, appointmentId: string): Promise<{
        id: string;
    }>;
    processPaymentWebhook(input: {
        tenantId: string | null;
        provider: string;
        eventId: string;
        eventName: string;
        paymentId?: string;
        payload: Record<string, unknown>;
    }): Promise<{
        id: string;
    }>;
    upsertTenantSettings(input: {
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
    }): Promise<{
        id: string;
    }>;
    getAvailableSlots(params: {
        serviceId: string;
        date: Date;
        timezone: string;
    }): Promise<{
        start: string;
        end: string;
    }[]>;
    private validateAppointmentAvailability;
    private createInvoice;
    private notifyAdmins;
    private createHistory;
    private getUserAppointment;
    private validateBookingWindow;
    private getTenantByUser;
    private getOrCreateDefaultTenant;
}
