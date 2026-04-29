import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { CalendarSyncService, CalendarSyncJobInput } from './calendar-sync.service';

@Processor('calendar-sync')
export class CalendarSyncProcessor extends WorkerHost {
  public constructor(private readonly calendarSyncService: CalendarSyncService) {
    super();
  }

  public async process(job: Job<CalendarSyncJobInput>): Promise<void> {
    try {
      await this.calendarSyncService.processSync(job.data);
    } catch (err: unknown) {
      await this.calendarSyncService.handleSyncError(job.data, err);
      throw err;
    }
  }
}
