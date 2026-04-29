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
exports.PaymentWebhookService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../common/prisma/prisma.service");
let PaymentWebhookService = class PaymentWebhookService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async processWebhook(input) {
        const event = await this.prismaService.paymentWebhookEvent.upsert({
            where: { provider_eventId: { provider: input.provider, eventId: input.eventId } },
            update: { payload: input.payload, eventName: input.eventName },
            create: {
                tenantId: input.tenantId,
                provider: input.provider,
                eventId: input.eventId,
                eventName: input.eventName,
                paymentId: input.paymentId,
                payload: input.payload,
            },
            select: { id: true, paymentId: true },
        });
        if (!event.paymentId) {
            return { id: event.id };
        }
        const mappedStatus = this.mapProviderStatus(input.eventName);
        await this.prismaService.payment.update({
            where: { id: event.paymentId },
            data: { status: mappedStatus, providerPayload: input.payload },
        });
        await this.prismaService.paymentWebhookEvent.update({
            where: { id: event.id },
            data: { processedAt: new Date(), status: 'processed' },
            select: { id: true },
        });
        return { id: event.id };
    }
    mapProviderStatus(eventName) {
        if (eventName.includes('authorized')) {
            return client_1.PaymentStatus.AUTHORIZED;
        }
        if (eventName.includes('refunded_partial')) {
            return client_1.PaymentStatus.PARTIALLY_REFUNDED;
        }
        if (eventName.includes('refunded')) {
            return client_1.PaymentStatus.REFUNDED;
        }
        if (eventName.includes('failed')) {
            return client_1.PaymentStatus.FAILED;
        }
        if (eventName.includes('paid')) {
            return client_1.PaymentStatus.PAID;
        }
        return client_1.PaymentStatus.PENDING;
    }
};
exports.PaymentWebhookService = PaymentWebhookService;
exports.PaymentWebhookService = PaymentWebhookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentWebhookService);
//# sourceMappingURL=payment-webhook.service.js.map