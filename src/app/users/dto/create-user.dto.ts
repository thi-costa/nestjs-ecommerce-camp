import { Role } from "@auth/roles/role.enum"

export class CreateUserDto {
    username: string;
    password: string;
    email: string;
    role: Role;
}