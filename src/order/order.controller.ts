import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/cart/:cartId')
  @UsePipes(ValidationPipe)
  async createOrder(@Body() createOrderDTO: CreateOrderDto, @Param('cartId') cartId: number) {
    return this.orderService.createOrder(createOrderDTO, cartId);
  }
}
