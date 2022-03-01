import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { ConfigService } from '@nestjs/config';
import { Role } from './roles/role.enum';
import { UpdateUserDto } from '@app/users/dto/update-user.dto';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '@shared/entities/user.entity';

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

  @Get('/user/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.authService.getUserById(id);
  }

  @Patch('/user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: object,
  ): Promise<User> {
    this.logger.verbose(`Update DTO object ${JSON.stringify(updateUserDto)}`);
    return this.authService.updateUser(id, updateUserDto);
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: string): Promise<void> {
    this.logger.debug('Metho deleteUser called')
    return this.authService.deleteUser(id);
  }
}
