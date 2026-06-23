import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';

@Module({
  imports: [IdentityModule],
  controllers: [CartController],
  providers: [CartService],
})
export class OrderModule {}
