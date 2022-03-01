import { ProductRepository } from '@app/products/products.repository';
import { UsersRepository } from '@app/users/users.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@shared/entities/orders.entity';
import { Product } from '@shared/entities/products.entity';
import { User } from '@shared/entities/user.entity';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductRepository,
      OrdersRepository,
      UsersRepository
    ]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
