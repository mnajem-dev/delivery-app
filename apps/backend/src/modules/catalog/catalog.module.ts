import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { CatalogService } from './catalog.service';
import { MenuItemController } from './menu-item.controller';
import { StorageService } from './storage/storage.service';
import { VendorController } from './vendor.controller';

@Module({
  imports: [IdentityModule],
  controllers: [VendorController, MenuItemController],
  providers: [CatalogService, StorageService],
})
export class CatalogModule {}
