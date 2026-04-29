export declare const UserRole: {
    readonly CLIENT: "CLIENT";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const AppointmentStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELED: "CANCELED";
    readonly COMPLETED: "COMPLETED";
    readonly REFUNDED: "REFUNDED";
};
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export declare const CurrencyCode: {
    readonly BRL: "BRL";
    readonly EUR: "EUR";
};
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
