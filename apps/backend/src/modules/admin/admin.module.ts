import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ReportsService } from './reports.service';

@Module({
  imports: [PrismaModule],
  controllers: [AdminController],
  providers: [AdminService, ReportsService],
})
export class AdminModule {}
