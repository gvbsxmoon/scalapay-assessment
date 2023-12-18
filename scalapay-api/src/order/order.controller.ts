import {
  Controller,
  Post,
  Body,
  Res,
  UsePipes,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';
import { ApiTags } from '@nestjs/swagger';
import { AllExceptionsFilter } from '@utils/http-exception.filter';

@Controller('order')
@ApiTags('Order')
@UseFilters(AllExceptionsFilter)
export class OrderController {
  constructor(private readonly scalaPayService: OrderService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createOrder(@Body() orderBody: OrderDTO, @Res() res): Promise<void> {
    const orderResponse = await this.scalaPayService.createOrder(orderBody);
    res.status(200).json({ ...orderResponse, order: { ...orderBody } });
  }
}
