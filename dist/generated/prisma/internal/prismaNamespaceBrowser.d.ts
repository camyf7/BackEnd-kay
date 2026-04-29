import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly Service: "Service";
    readonly Availability: "Availability";
    readonly BlockedDate: "BlockedDate";
    readonly Appointment: "Appointment";
    readonly Payment: "Payment";
    readonly Refund: "Refund";
    readonly Invoice: "Invoice";
    readonly Notification: "Notification";
    readonly FinancialReport: "FinancialReport";
    readonly Session: "Session";
    readonly UserHistory: "UserHistory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly durationInMinutes: "durationInMinutes";
    readonly priceBrl: "priceBrl";
    readonly priceEur: "priceEur";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const AvailabilityScalarFieldEnum: {
    readonly id: "id";
    readonly weekDay: "weekDay";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum];
export declare const BlockedDateScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type BlockedDateScalarFieldEnum = (typeof BlockedDateScalarFieldEnum)[keyof typeof BlockedDateScalarFieldEnum];
export declare const AppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly serviceId: "serviceId";
    readonly appointmentStart: "appointmentStart";
    readonly appointmentEnd: "appointmentEnd";
    readonly status: "status";
    readonly cancelReason: "cancelReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly appointmentId: "appointmentId";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly method: "method";
    readonly isTermsAccepted: "isTermsAccepted";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const RefundScalarFieldEnum: {
    readonly id: "id";
    readonly paymentId: "paymentId";
    readonly appointmentId: "appointmentId";
    readonly amount: "amount";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly userId: "userId";
    readonly appointmentId: "appointmentId";
    readonly paymentId: "paymentId";
    readonly createdAt: "createdAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly body: "body";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const FinancialReportScalarFieldEnum: {
    readonly id: "id";
    readonly reportDate: "reportDate";
    readonly currency: "currency";
    readonly grossAmount: "grossAmount";
    readonly paidReservations: "paidReservations";
    readonly pendingPayments: "pendingPayments";
    readonly summary: "summary";
    readonly createdAt: "createdAt";
};
export type FinancialReportScalarFieldEnum = (typeof FinancialReportScalarFieldEnum)[keyof typeof FinancialReportScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const UserHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type UserHistoryScalarFieldEnum = (typeof UserHistoryScalarFieldEnum)[keyof typeof UserHistoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly passwordHash: "passwordHash";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const ServiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];
export declare const AvailabilityOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
};
export type AvailabilityOrderByRelevanceFieldEnum = (typeof AvailabilityOrderByRelevanceFieldEnum)[keyof typeof AvailabilityOrderByRelevanceFieldEnum];
export declare const BlockedDateOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly reason: "reason";
};
export type BlockedDateOrderByRelevanceFieldEnum = (typeof BlockedDateOrderByRelevanceFieldEnum)[keyof typeof BlockedDateOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const AppointmentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly serviceId: "serviceId";
    readonly cancelReason: "cancelReason";
};
export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum];
export declare const PaymentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly appointmentId: "appointmentId";
    readonly method: "method";
};
export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum];
export declare const RefundOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly paymentId: "paymentId";
    readonly appointmentId: "appointmentId";
    readonly reason: "reason";
};
export type RefundOrderByRelevanceFieldEnum = (typeof RefundOrderByRelevanceFieldEnum)[keyof typeof RefundOrderByRelevanceFieldEnum];
export declare const InvoiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly userId: "userId";
    readonly appointmentId: "appointmentId";
    readonly paymentId: "paymentId";
};
export type InvoiceOrderByRelevanceFieldEnum = (typeof InvoiceOrderByRelevanceFieldEnum)[keyof typeof InvoiceOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly body: "body";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
export declare const FinancialReportOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly summary: "summary";
};
export type FinancialReportOrderByRelevanceFieldEnum = (typeof FinancialReportOrderByRelevanceFieldEnum)[keyof typeof FinancialReportOrderByRelevanceFieldEnum];
export declare const SessionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
};
export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum];
export declare const UserHistoryOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly metadata: "metadata";
};
export type UserHistoryOrderByRelevanceFieldEnum = (typeof UserHistoryOrderByRelevanceFieldEnum)[keyof typeof UserHistoryOrderByRelevanceFieldEnum];
