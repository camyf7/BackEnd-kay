import { PrismaService } from '../common/prisma/prisma.service';
type PaymentWebhookInput = {
    readonly tenantId: string | null;
    readonly provider: string;
    readonly eventId: string;
    readonly eventName: string;
    readonly paymentId?: string;
    readonly payload: Record<string, unknown>;
};
export declare class PaymentWebhookService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    processWebhook(input: PaymentWebhookInput): Promise<{
        id: string;
    }>;
    private mapProviderStatus;
}
export {};
