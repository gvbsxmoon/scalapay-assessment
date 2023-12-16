import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AuthModule } from '@auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
