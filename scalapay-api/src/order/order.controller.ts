import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';
import { AuthGuard } from '@auth/auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private readonly scalaPayService: OrderService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createOrder(@Body() orderBody: OrderDTO, @Res() res): Promise<void> {
    try {
      const orderResponse = await this.scalaPayService.createOrder(orderBody);
      res.status(200).json(orderResponse);
    } catch (error) {
      res.status(error.status).json(error.response);
    }
  }
}
