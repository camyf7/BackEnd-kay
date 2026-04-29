import { PaymentWebhookService } from '../src/site/payment-webhook.service';

type MockPrisma = Record<string, Record<string, jest.Mock>>;

function createMockPrisma(): MockPrisma {
  return {
    paymentWebhookEvent: {
      upsert: jest.fn(),
      update: jest.fn(),
    },
    payment: {
      update: jest.fn(),
    },
  };
}

describe('SaaS foundation rules', () => {
  it('handles duplicated webhook idempotently', async () => {
    const prisma = createMockPrisma();
    const service = new PaymentWebhookService(prisma as never);
    prisma.paymentWebhookEvent.upsert.mockResolvedValue({
      id: 'event-1',
      paymentId: 'payment-1',
    });
    prisma.payment.update.mockResolvedValue({ id: 'payment-1' });
    prisma.paymentWebhookEvent.update.mockResolvedValue({ id: 'event-1' });
    const input = {
      tenantId: 'tenant-1',
      provider: 'stripe',
      eventId: 'evt_123',
      eventName: 'payment_paid',
      paymentId: 'payment-1',
      payload: { id: 'evt_123' },
    };
    const first = await service.processWebhook(input);
    const second = await service.processWebhook(input);
    expect(first.id).toBe('event-1');
    expect(second.id).toBe('event-1');
    expect(prisma.paymentWebhookEvent.upsert).toHaveBeenCalledTimes(2);
  });
});
