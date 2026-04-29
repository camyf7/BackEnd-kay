import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import configuration from './common/config/configuration';
import { PrismaModule } from './common/prisma/prisma.module';
import { SiteModule } from './site/site.module';

const isQueueEnabled: boolean = process.env.ENABLE_REDIS_QUEUE === 'true';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ...(isQueueEnabled
      ? [
          BullModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              connection: { url: configService.get<string>('redisUrl') },
            }),
          }),
        ]
      : []),
    PrismaModule,
    SiteModule,
  ],
})
export class AppModule {}
