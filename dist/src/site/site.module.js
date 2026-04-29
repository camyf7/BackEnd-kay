"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const jwt_1 = require("@nestjs/jwt");
const site_controller_1 = require("./site.controller");
const site_service_1 = require("./site.service");
const auth_guard_1 = require("./auth.guard");
const calendar_sync_service_1 = require("./calendar-sync.service");
const calendar_sync_processor_1 = require("./calendar-sync.processor");
const payment_webhook_service_1 = require("./payment-webhook.service");
const roles_guard_1 = require("../common/rbac/roles.guard");
const isQueueEnabled = process.env.ENABLE_REDIS_QUEUE === 'true';
let SiteModule = class SiteModule {
};
exports.SiteModule = SiteModule;
exports.SiteModule = SiteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({}),
            ...(isQueueEnabled ? [bullmq_1.BullModule.registerQueue({ name: 'calendar-sync' })] : []),
        ],
        controllers: [site_controller_1.SiteController],
        providers: [
            site_service_1.SiteService,
            auth_guard_1.AuthGuard,
            calendar_sync_service_1.CalendarSyncService,
            ...(isQueueEnabled ? [calendar_sync_processor_1.CalendarSyncProcessor] : []),
            payment_webhook_service_1.PaymentWebhookService,
            roles_guard_1.RolesGuard,
        ],
    })
], SiteModule);
//# sourceMappingURL=site.module.js.map