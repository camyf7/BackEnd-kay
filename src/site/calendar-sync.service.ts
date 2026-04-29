import { Injectable, Logger, Optional } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { SyncStatus } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

export type CalendarSyncJobInput = {
  readonly tenantId: string | null;
  readonly appointmentId: string;
  readonly idempotencyKey: string;
  readonly action: 'create_or_update' | 'cancel';
};

@Injectable()
export class CalendarSyncService {
  private readonly logger: Logger = new Logger(CalendarSyncService.name);

  public constructor(
    private readonly prismaService: PrismaService,
    @Optional()
    @InjectQueue('calendar-sync')
    private readonly calendarSyncQueue?: Queue<CalendarSyncJobInput>,
  ) {}

  public async enqueueAppointmentSync(input: CalendarSyncJobInput): Promise<void> {
    await this.prismaService.calendarSyncLog.create({
      data: {
        tenantId: input.tenantId,
        eventType: input.action,
        idempotencyKey: input.idempotencyKey,
        status: SyncStatus.PENDING_SYNC,
        payload: input,
      },
    });
    if (!this.calendarSyncQueue) {
      this.logger.warn('Calendar queue disabled. Sync is running in direct mode.');
      await this.processSync(input);
      return;
    }
    await this.calendarSyncQueue.add('appointment-sync', input, {
      attempts: 5,
      backoff: { type: 'exponential', delay: 2000 },
      removeOnComplete: true,
      removeOnFail: false,
      jobId: input.idempotencyKey,
    });
  }

  public async processSync(input: CalendarSyncJobInput): Promise<void> {
    const links = await this.prismaService.calendarEventLink.findMany({
      where: { appointmentId: input.appointmentId },
      include: { googleCalendarConnection: true },
    });
    if (links.length === 0) {
      this.logger.warn(`No calendar links found for appointment ${input.appointmentId}`);
    }
    await this.prismaService.calendarSyncLog.updateMany({
      where: { idempotencyKey: input.idempotencyKey },
      data: { status: SyncStatus.SYNCED },
    });
    await this.prismaService.appointment.update({
      where: { id: input.appointmentId },
      data: { syncStatus: SyncStatus.SYNCED },
    });
  }

  public async handleSyncError(input: CalendarSyncJobInput, err: unknown): Promise<void> {
    const errorMessage: string = err instanceof Error ? err.message : 'Unknown calendar sync error';
    await this.prismaService.calendarSyncLog.updateMany({
      where: { idempotencyKey: input.idempotencyKey },
      data: { status: SyncStatus.SYNC_FAILED, errorMessage, retryCount: { increment: 1 } },
    });
    await this.prismaService.appointment.update({
      where: { id: input.appointmentId },
      data: { syncStatus: SyncStatus.SYNC_FAILED, syncRetries: { increment: 1 } },
    });
  }
}
