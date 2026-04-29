"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHistoryOrderByRelevanceFieldEnum = exports.SessionOrderByRelevanceFieldEnum = exports.FinancialReportOrderByRelevanceFieldEnum = exports.NotificationOrderByRelevanceFieldEnum = exports.InvoiceOrderByRelevanceFieldEnum = exports.RefundOrderByRelevanceFieldEnum = exports.PaymentOrderByRelevanceFieldEnum = exports.AppointmentOrderByRelevanceFieldEnum = exports.NullsOrder = exports.BlockedDateOrderByRelevanceFieldEnum = exports.AvailabilityOrderByRelevanceFieldEnum = exports.ServiceOrderByRelevanceFieldEnum = exports.UserOrderByRelevanceFieldEnum = exports.SortOrder = exports.UserHistoryScalarFieldEnum = exports.SessionScalarFieldEnum = exports.FinancialReportScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.RefundScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.AppointmentScalarFieldEnum = exports.BlockedDateScalarFieldEnum = exports.AvailabilityScalarFieldEnum = exports.ServiceScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Service: 'Service',
    Availability: 'Availability',
    BlockedDate: 'BlockedDate',
    Appointment: 'Appointment',
    Payment: 'Payment',
    Refund: 'Refund',
    Invoice: 'Invoice',
    Notification: 'Notification',
    FinancialReport: 'FinancialReport',
    Session: 'Session',
    UserHistory: 'UserHistory'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ServiceScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    durationInMinutes: 'durationInMinutes',
    priceBrl: 'priceBrl',
    priceEur: 'priceEur',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AvailabilityScalarFieldEnum = {
    id: 'id',
    weekDay: 'weekDay',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BlockedDateScalarFieldEnum = {
    id: 'id',
    date: 'date',
    reason: 'reason',
    createdAt: 'createdAt'
};
exports.AppointmentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    appointmentStart: 'appointmentStart',
    appointmentEnd: 'appointmentEnd',
    status: 'status',
    cancelReason: 'cancelReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    appointmentId: 'appointmentId',
    amount: 'amount',
    currency: 'currency',
    method: 'method',
    isTermsAccepted: 'isTermsAccepted',
    status: 'status',
    createdAt: 'createdAt'
};
exports.RefundScalarFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    appointmentId: 'appointmentId',
    amount: 'amount',
    reason: 'reason',
    createdAt: 'createdAt'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    userId: 'userId',
    appointmentId: 'appointmentId',
    paymentId: 'paymentId',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.FinancialReportScalarFieldEnum = {
    id: 'id',
    reportDate: 'reportDate',
    currency: 'currency',
    grossAmount: 'grossAmount',
    paidReservations: 'paidReservations',
    pendingPayments: 'pendingPayments',
    summary: 'summary',
    createdAt: 'createdAt'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.UserHistoryScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.UserOrderByRelevanceFieldEnum = {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    passwordHash: 'passwordHash'
};
exports.ServiceOrderByRelevanceFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
exports.AvailabilityOrderByRelevanceFieldEnum = {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime'
};
exports.BlockedDateOrderByRelevanceFieldEnum = {
    id: 'id',
    reason: 'reason'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.AppointmentOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    cancelReason: 'cancelReason'
};
exports.PaymentOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    appointmentId: 'appointmentId',
    method: 'method'
};
exports.RefundOrderByRelevanceFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    appointmentId: 'appointmentId',
    reason: 'reason'
};
exports.InvoiceOrderByRelevanceFieldEnum = {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    userId: 'userId',
    appointmentId: 'appointmentId',
    paymentId: 'paymentId'
};
exports.NotificationOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body'
};
exports.FinancialReportOrderByRelevanceFieldEnum = {
    id: 'id',
    summary: 'summary'
};
exports.SessionOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token'
};
exports.UserHistoryOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    metadata: 'metadata'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map