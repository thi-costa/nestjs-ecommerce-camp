import { Role } from '@auth/roles/role.enum';

export interface JwtPayload {
  username: string;
  role: Role;
}
