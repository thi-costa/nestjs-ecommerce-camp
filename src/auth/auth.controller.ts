import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { ConfigService } from '@nestjs/config';
import { Role } from './roles/role.enum';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');
  constructor(
    private readonly authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Post('/admin/signup')
  signUpAdmin(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto, Role.Admin);
  }

  @Post('/admin/signin')
  signInAdmin(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    this.logger.debug(`Admin tried to log`);
    return this.authService.signIn(authCredentialsDto, Role.Admin);
  }

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    this.logger.debug(`User tried to sign up`);
    return this.authService.signUp(authCredentialsDto, Role.User);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    this.logger.debug(`User tried to log`);
    return this.authService.signIn(authCredentialsDto, Role.User);
  }
}
