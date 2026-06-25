import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { IdentityModule } from '../identity/identity.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ReportsService } from './reports.service';

@Module({
  imports: [PrismaModule, IdentityModule],
  controllers: [AdminController],
  providers: [AdminService, ReportsService],
})
export class AdminModule {}
