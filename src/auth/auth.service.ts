import { UsersRepository } from '@app/users/users.repository';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from '@auth/jwt-payload.interface';
import { Role } from './roles/role.enum';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService', { timestamp: true });
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    authCredentialsDto: AuthCredentialsDto,
    role: Role,
  ): Promise<void> {
    this.logger.debug(`${role} called signUp`);
    return this.usersRepository.createUser(authCredentialsDto, role);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
    role: Role,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;

    const user = await this.usersRepository.findOne({ username });
    const fakePassword = await bcrypt.hash(password, 10); // Avoiding the timing attack

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const payload: JwtPayload = {
          username: user.username,
          role: user.role,
        };
        const accessToken: string = await this.jwtService.sign(payload);

        this.logger.debug(`${role} logged succesfully`);
        return { accessToken };
      }
      throw new UnauthorizedException('Please check your login credentials');
    } else {
      const validPassword = await bcrypt.compare(password, fakePassword);

      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
