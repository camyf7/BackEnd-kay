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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CalendarSyncService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarSyncService = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../common/prisma/prisma.service");
let CalendarSyncService = CalendarSyncService_1 = class CalendarSyncService {
    prismaService;
    calendarSyncQueue;
    logger = new common_1.Logger(CalendarSyncService_1.name);
    constructor(prismaService, calendarSyncQueue) {
        this.prismaService = prismaService;
        this.calendarSyncQueue = calendarSyncQueue;
    }
    async enqueueAppointmentSync(input) {
        await this.prismaService.calendarSyncLog.create({
            data: {
                tenantId: input.tenantId,
                eventType: input.action,
                idempotencyKey: input.idempotencyKey,
                status: client_1.SyncStatus.PENDING_SYNC,
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
    async processSync(input) {
        const links = await this.prismaService.calendarEventLink.findMany({
            where: { appointmentId: input.appointmentId },
            include: { googleCalendarConnection: true },
        });
        if (links.length === 0) {
            this.logger.warn(`No calendar links found for appointment ${input.appointmentId}`);
        }
        await this.prismaService.calendarSyncLog.updateMany({
            where: { idempotencyKey: input.idempotencyKey },
            data: { status: client_1.SyncStatus.SYNCED },
        });
        await this.prismaService.appointment.update({
            where: { id: input.appointmentId },
            data: { syncStatus: client_1.SyncStatus.SYNCED },
        });
    }
    async handleSyncError(input, err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown calendar sync error';
        await this.prismaService.calendarSyncLog.updateMany({
            where: { idempotencyKey: input.idempotencyKey },
            data: { status: client_1.SyncStatus.SYNC_FAILED, errorMessage, retryCount: { increment: 1 } },
        });
        await this.prismaService.appointment.update({
            where: { id: input.appointmentId },
            data: { syncStatus: client_1.SyncStatus.SYNC_FAILED, syncRetries: { increment: 1 } },
        });
    }
};
exports.CalendarSyncService = CalendarSyncService;
exports.CalendarSyncService = CalendarSyncService = CalendarSyncService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Optional)()),
    __param(1, (0, bullmq_1.InjectQueue)('calendar-sync')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue])
], CalendarSyncService);
//# sourceMappingURL=calendar-sync.service.js.map