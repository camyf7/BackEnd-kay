import { Queue } from 'bullmq';
import { PrismaService } from '../common/prisma/prisma.service';
export type CalendarSyncJobInput = {
    readonly tenantId: string | null;
    readonly appointmentId: string;
    readonly idempotencyKey: string;
    readonly action: 'create_or_update' | 'cancel';
};
export declare class CalendarSyncService {
    private readonly prismaService;
    private readonly calendarSyncQueue?;
    private readonly logger;
    constructor(prismaService: PrismaService, calendarSyncQueue?: Queue<CalendarSyncJobInput> | undefined);
    enqueueAppointmentSync(input: CalendarSyncJobInput): Promise<void>;
    processSync(input: CalendarSyncJobInput): Promise<void>;
    handleSyncError(input: CalendarSyncJobInput, err: unknown): Promise<void>;
}
