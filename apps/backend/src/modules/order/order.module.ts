import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [IdentityModule],
  controllers: [CartController, OrderController],
  providers: [CartService, OrderService],
})
export class OrderModule {}
