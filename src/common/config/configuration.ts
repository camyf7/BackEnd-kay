export type AppConfiguration = {
  readonly port: number;
  readonly jwtSecret: string;
  readonly redisUrl: string;
  readonly appName: string;
};

export default (): AppConfiguration => ({
  port: Number(process.env.PORT ?? 3000),
  jwtSecret: process.env.JWT_SECRET ?? 'super-secret-key',
  redisUrl: process.env.REDIS_URL ?? 'redis://127.0.0.1:6379',
  appName: process.env.APP_NAME ?? 'kay-nunes-backend',
});
