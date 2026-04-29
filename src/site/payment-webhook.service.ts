import { Injectable } from '@nestjs/common';
import { PaymentStatus, Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

type PaymentWebhookInput = {
  readonly tenantId: string | null;
  readonly provider: string;
  readonly eventId: string;
  readonly eventName: string;
  readonly paymentId?: string;
  readonly payload: Record<string, unknown>;
};

@Injectable()
export class PaymentWebhookService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async processWebhook(input: PaymentWebhookInput): Promise<{ id: string }> {
    const event = await this.prismaService.paymentWebhookEvent.upsert({
      where: { provider_eventId: { provider: input.provider, eventId: input.eventId } },
      update: { payload: input.payload as Prisma.InputJsonValue, eventName: input.eventName },
      create: {
        tenantId: input.tenantId,
        provider: input.provider,
        eventId: input.eventId,
        eventName: input.eventName,
        paymentId: input.paymentId,
        payload: input.payload as Prisma.InputJsonValue,
      },
      select: { id: true, paymentId: true },
    });
    if (!event.paymentId) {
      return { id: event.id };
    }
    const mappedStatus: PaymentStatus = this.mapProviderStatus(input.eventName);
    await this.prismaService.payment.update({
      where: { id: event.paymentId },
      data: { status: mappedStatus, providerPayload: input.payload as Prisma.InputJsonValue },
    });
    await this.prismaService.paymentWebhookEvent.update({
      where: { id: event.id },
      data: { processedAt: new Date(), status: 'processed' },
      select: { id: true },
    });
    return { id: event.id };
  }

  private mapProviderStatus(eventName: string): PaymentStatus {
    if (eventName.includes('authorized')) {
      return PaymentStatus.AUTHORIZED;
    }
    if (eventName.includes('refunded_partial')) {
      return PaymentStatus.PARTIALLY_REFUNDED;
    }
    if (eventName.includes('refunded')) {
      return PaymentStatus.REFUNDED;
    }
    if (eventName.includes('failed')) {
      return PaymentStatus.FAILED;
    }
    if (eventName.includes('paid')) {
      return PaymentStatus.PAID;
    }
    return PaymentStatus.PENDING;
  }
}
