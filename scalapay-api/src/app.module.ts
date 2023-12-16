import { Module } from '@nestjs/common';
import { OrderModule } from '@order/order.module';
import { UserModule } from '@user/user.module';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@product/product.module';

@Module({
  imports: [
    OrderModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
  ],
})
export class AppModule {}
