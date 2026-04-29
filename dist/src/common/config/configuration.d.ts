export type AppConfiguration = {
    readonly port: number;
    readonly jwtSecret: string;
    readonly redisUrl: string;
    readonly appName: string;
};
declare const _default: () => AppConfiguration;
export default _default;
