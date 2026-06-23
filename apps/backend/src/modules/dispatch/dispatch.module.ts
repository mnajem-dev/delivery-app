import { Module } from '@nestjs/common';
import { OrderPlacedListener } from './listeners/order-placed.listener';

@Module({
  providers: [OrderPlacedListener],
})
export class DispatchModule {}
