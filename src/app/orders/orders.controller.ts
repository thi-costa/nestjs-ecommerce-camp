import { JwtGuard } from '@auth/guards/jwt.guard';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Logger,
} from '@nestjs/common';
import { Order } from '@shared/entities/orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  private logger = new Logger('OrderController');
  constructor(private ordersService: OrdersService) {}

  @Get('/:id')
  getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.getOrderById(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    this.logger.debug(`Post createOrder called`);
  }
}
