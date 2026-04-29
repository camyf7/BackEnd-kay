"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: Number(process.env.PORT ?? 3000),
    jwtSecret: process.env.JWT_SECRET ?? 'super-secret-key',
    redisUrl: process.env.REDIS_URL ?? 'redis://127.0.0.1:6379',
    appName: process.env.APP_NAME ?? 'kay-nunes-backend',
});
//# sourceMappingURL=configuration.js.map