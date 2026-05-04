export declare class RegisterDto {
    email: string;
    fullName: string;
    password: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class CreateServiceDto {
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: number;
    priceEur: number;
}
export declare class UpdateServiceDto {
    name?: string;
    description?: string;
    durationInMinutes?: number;
    priceBrl?: number;
    priceEur?: number;
}
export declare class CreateAvailabilityDto {
    weekDay: number;
    startTime: string;
    endTime: string;
}
export declare class BlockDateDto {
    date: Date;
    reason: string;
}
export declare class CreateAppointmentDto {
    serviceId: string;
    appointmentStart: Date;
    acceptedTerms: boolean;
    paymentPercentage: 50 | 100;
    paymentMethod: string;
    currency: 'BRL' | 'EUR';
    timezone?: string;
}
export declare class RescheduleDto {
    appointmentStart: Date;
}
export declare class CancelAppointmentDto {
    reason: string;
}
export declare class GoogleCalendarConnectDto {
    providerAccountId: string;
    calendarId: string;
    calendarName: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiresAt: Date;
}
export declare class PaymentWebhookDto {
    provider: string;
    eventId: string;
    eventName: string;
    paymentId?: string;
    payload: Record<string, unknown>;
}
export declare class WaitlistDto {
    serviceId: string;
    preferredStartDate: Date;
    preferredEndDate: Date;
}
export declare class TenantSettingsDto {
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
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
