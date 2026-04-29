import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { JwtModule } from '@nestjs/jwt';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { AuthGuard } from './auth.guard';
import { CalendarSyncService } from './calendar-sync.service';
import { CalendarSyncProcessor } from './calendar-sync.processor';
import { PaymentWebhookService } from './payment-webhook.service';
import { RolesGuard } from '../common/rbac/roles.guard';

const isQueueEnabled: boolean = process.env.ENABLE_REDIS_QUEUE === 'true';

@Module({
  imports: [
    JwtModule.register({}),
    ...(isQueueEnabled ? [BullModule.registerQueue({ name: 'calendar-sync' })] : []),
  ],
  controllers: [SiteController],
  providers: [
    SiteService,
    AuthGuard,
    CalendarSyncService,
    ...(isQueueEnabled ? [CalendarSyncProcessor] : []),
    PaymentWebhookService,
    RolesGuard,
  ],
})
export class SiteModule {}
