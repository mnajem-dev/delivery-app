import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { DispatchModule } from './modules/dispatch/dispatch.module';
import { HealthModule } from './modules/health/health.module';
import { IdentityModule } from './modules/identity/identity.module';
import { NotificationModule } from './modules/notification/notification.module';
import { OrderModule } from './modules/order/order.module';
import { TrackingModule } from './modules/tracking/tracking.module';

@Module({
  imports: [
    IdentityModule,
    CatalogModule,
    OrderModule,
    DispatchModule,
    TrackingModule,
    NotificationModule,
    AdminModule,
    HealthModule,
  ],
})
export class AppModule {}
