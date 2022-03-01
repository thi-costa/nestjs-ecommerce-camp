import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '@shared/entities/orders.entity';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
  ) {}

  async getOrderById(id: string): Promise<Order> {
    const found = await this.ordersRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Order with ID ${id} Not Found`);
    }

    return found;
  }
}
