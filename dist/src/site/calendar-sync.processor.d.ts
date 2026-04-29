import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { CalendarSyncService, CalendarSyncJobInput } from './calendar-sync.service';
export declare class CalendarSyncProcessor extends WorkerHost {
    private readonly calendarSyncService;
    constructor(calendarSyncService: CalendarSyncService);
    process(job: Job<CalendarSyncJobInput>): Promise<void>;
}
