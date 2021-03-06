import { EntityRepository, Repository } from 'typeorm';
import { User } from '@shared/entities/user.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Role } from '@auth/roles/role.enum';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private logger = new Logger('Users repository', { timestamp: true });
  async createUser(
    authCredentialsDto: AuthCredentialsDto,
    role: Role,
  ): Promise<void> {
    const { username, password, email } = authCredentialsDto;

    // hash with salt protection (to make same passowrds have differents hashs)
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      email,
      password: hashedPassword,
      role: role,
    });

    try {
      await this.save(user);
      this.logger.debug(`${role} ${user.id} created succesfully`);
    } catch (error) {
      if (error.code === '23505') {
        //duplicate username error
        this.logger.error('Username already exists');
        throw new ConflictException('Username or email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
