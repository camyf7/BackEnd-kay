import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppointmentStatus, CurrencyCode, PaymentStatus } from '@prisma/client';
import { CalendarSyncService } from '../src/site/calendar-sync.service';
import { PaymentWebhookService } from '../src/site/payment-webhook.service';
import { SiteService } from '../src/site/site.service';

type MockPrisma = Record<string, Record<string, jest.Mock>>;

function createMockPrisma(): MockPrisma {
  return {
    user: { create: jest.fn(), findUnique: jest.fn(), findMany: jest.fn() },
    session: { create: jest.fn() },
    userHistory: { create: jest.fn() },
    service: { findUnique: jest.fn(), create: jest.fn(), findMany: jest.fn() },
    availability: { findFirst: jest.fn(), findMany: jest.fn(), create: jest.fn() },
    blockedDate: { findFirst: jest.fn(), create: jest.fn() },
    appointment: {
      create: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
      updateMany: jest.fn(),
      update: jest.fn(),
    },
    payment: {
      create: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      update: jest.fn(),
    },
    invoice: { create: jest.fn() },
    notification: { createMany: jest.fn() },
    refund: { create: jest.fn() },
    financialReport: { upsert: jest.fn() },
    tenant: { findFirst: jest.fn(), findUnique: jest.fn(), create: jest.fn(), update: jest.fn() },
    waitlistEntry: { create: jest.fn(), update: jest.fn(), findUniqueOrThrow: jest.fn() },
  };
}

describe('SiteService rules', () => {
  let siteService: SiteService;
  let prisma: MockPrisma;
  let jwtService: JwtService;
  let calendarSyncService: CalendarSyncService;
  let paymentWebhookService: PaymentWebhookService;

  beforeEach(() => {
    prisma = createMockPrisma();
    jwtService = new JwtService();
    calendarSyncService = {
      enqueueAppointmentSync: jest.fn(),
    } as never;
    paymentWebhookService = {
      processWebhook: jest.fn(),
    } as never;
    siteService = new SiteService(
      prisma as never,
      jwtService,
      calendarSyncService,
      paymentWebhookService,
    );
    prisma.tenant.findFirst.mockResolvedValue({
      id: 'tenant-1',
      minimumNoticeHours: 2,
      maximumAdvanceDays: 60,
      bookingSignalPercentage: 50,
      defaultTimezone: 'America/Sao_Paulo',
    });
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      tenantId: 'tenant-1',
      defaultTimezone: 'America/Sao_Paulo',
    });
    prisma.tenant.findUnique.mockResolvedValue({
      id: 'tenant-1',
      minimumNoticeHours: 2,
      maximumAdvanceDays: 60,
      bookingSignalPercentage: 50,
      defaultTimezone: 'America/Sao_Paulo',
    });
  });

  it('validates 48h cancellation rule', () => {
    const futureDate: Date = new Date(Date.now() + 49 * 60 * 60 * 1000);
    const shortDate: Date = new Date(Date.now() + 47 * 60 * 60 * 1000);
    expect(siteService.canRefundAppointment(futureDate)).toBe(true);
    expect(siteService.canRefundAppointment(shortDate)).toBe(false);
  });

  it('blocks payment when terms are not accepted', async () => {
    await expect(
      siteService.createAppointment('user-1', {
        serviceId: 'service-1',
        appointmentStart: new Date(),
        acceptedTerms: false,
        paymentPercentage: 50,
        paymentMethod: 'pix',
        currency: 'BRL',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('blocks double booking conflicts', async () => {
    prisma.service.findUnique.mockResolvedValue({
      id: 'service-1',
      durationInMinutes: 60,
      priceBrl: 200,
      priceEur: 40,
    });
    prisma.availability.findFirst.mockResolvedValue({ id: 'avail-1' });
    prisma.blockedDate.findFirst.mockResolvedValue(null);
    prisma.appointment.findFirst.mockResolvedValue({ id: 'existing-1' });
    await expect(
      siteService.createAppointment('user-1', {
        serviceId: 'service-1',
        appointmentStart: new Date(Date.now() + 72 * 60 * 60 * 1000),
        acceptedTerms: true,
        paymentPercentage: 50,
        paymentMethod: 'pix',
        currency: 'BRL',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('supports multi currency in payment calculation', async () => {
    prisma.service.findUnique.mockResolvedValue({
      id: 'service-1',
      durationInMinutes: 60,
      priceBrl: 200,
      priceEur: 40,
    });
    prisma.availability.findFirst.mockResolvedValue({ id: 'avail-1' });
    prisma.blockedDate.findFirst.mockResolvedValue(null);
    prisma.appointment.findFirst.mockResolvedValue(null);
    prisma.appointment.create.mockResolvedValue({ id: 'appointment-1' });
    prisma.appointment.create.mockResolvedValue({ id: 'appointment-1', version: 1 });
    prisma.payment.create.mockResolvedValue({ id: 'payment-1' });
    prisma.invoice.create.mockResolvedValue({ id: 'invoice-1' });
    prisma.user.findMany.mockResolvedValue([]);
    prisma.userHistory.create.mockResolvedValue({ id: 'history-1' });
    (calendarSyncService.enqueueAppointmentSync as jest.Mock).mockResolvedValue(undefined);
    await siteService.createAppointment('user-1', {
      serviceId: 'service-1',
      appointmentStart: new Date(Date.now() + 72 * 60 * 60 * 1000),
      acceptedTerms: true,
      paymentPercentage: 100,
      paymentMethod: 'card',
      currency: 'EUR',
    });
    expect(prisma.payment.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          amount: 40,
          currency: CurrencyCode.EUR,
        }),
      }),
    );
  });

  it('generates daily financial report', async () => {
    prisma.payment.findMany.mockResolvedValue([
      { amount: 100, currency: CurrencyCode.BRL, status: PaymentStatus.PAID },
      { amount: 30, currency: CurrencyCode.EUR, status: PaymentStatus.PAID },
    ]);
    prisma.payment.count.mockResolvedValue(2);
    prisma.appointment.findMany.mockResolvedValue([]);
    prisma.financialReport.upsert.mockResolvedValue({ id: 'report-1' });
    const actualReport = await siteService.getDailyFinancialReport(new Date('2026-04-29T12:00:00Z'));
    expect(prisma.financialReport.upsert).toHaveBeenCalled();
    expect(actualReport).toEqual(expect.objectContaining({ grossEur: 30 }));
  });

  it('applies refund for cancellation with 48h in advance', async () => {
    prisma.appointment.findFirst.mockResolvedValue({
      id: 'appointment-1',
      userId: 'user-1',
      serviceId: 'service-1',
      appointmentStart: new Date(Date.now() + 72 * 60 * 60 * 1000),
      status: AppointmentStatus.CONFIRMED,
      version: 1,
      tenantId: 'tenant-1',
      user: { defaultTimezone: 'America/Sao_Paulo' },
    });
    prisma.payment.findFirst.mockResolvedValue({ id: 'payment-1', amount: 100 });
    prisma.appointment.update.mockResolvedValue({
      id: 'appointment-1',
      appointmentStart: new Date(Date.now() + 72 * 60 * 60 * 1000),
    });
    prisma.refund.create.mockResolvedValue({ id: 'refund-1' });
    prisma.payment.update.mockResolvedValue({ id: 'payment-1' });
    prisma.userHistory.create.mockResolvedValue({ id: 'history-1' });
    (calendarSyncService.enqueueAppointmentSync as jest.Mock).mockResolvedValue(undefined);
    const actualResult = await siteService.cancelAppointment('user-1', 'appointment-1', 'need to cancel');
    expect(actualResult.refundCreated).toBe(true);
  });
});
