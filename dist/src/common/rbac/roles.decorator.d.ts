import { UserRole } from '@prisma/client';
export declare const ROLES_KEY: string;
export declare const Roles: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
