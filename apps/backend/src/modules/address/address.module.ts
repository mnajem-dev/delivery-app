import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [IdentityModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
