import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaModule } from './database/prisma.module';
import { AddressModule } from './modules/address/address.module';
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
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
    EventEmitterModule.forRoot(),
    PrismaModule,
    IdentityModule,
    AddressModule,
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
