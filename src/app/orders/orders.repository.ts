import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../../shared/entities/orders.entity';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {}
