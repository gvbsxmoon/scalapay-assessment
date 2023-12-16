import { Module } from '@nestjs/common';
import { OrderModule } from '@order/order.module';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OrderModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
