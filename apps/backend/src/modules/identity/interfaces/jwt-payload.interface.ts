import { RoleEnum } from '../../../database/generated/prisma/client';

export interface JwtPayload {
  sub: string;
  email: string;
  role: RoleEnum;
}

export interface AuthenticatedUser {
  sub: string;
  email: string;
  role: RoleEnum;
}
