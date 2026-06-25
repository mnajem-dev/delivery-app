import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../identity/guards/roles.guard';
import { Roles } from '../identity/decorators/roles.decorator';
import { RoleEnum } from '../../database/generated/prisma/client';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RoleEnum.ADMIN)
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly reportsService: ReportsService,
  ) {}

  @Get('orders')
  getOrders(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
  ) {
    return this.adminService.getOrders(page, limit);
  }

  @Get('stats')
  getStats() {
    return this.adminService.getStats();
  }

  @Post('users/:id/suspend')
  @HttpCode(HttpStatus.OK)
  suspendUser(@Param('id') userId: string) {
    return this.adminService.suspendUser(userId);
  }

  @Get('reports/orders/csv')
  async getOrdersCsv(@Res({ passthrough: true }) res: Response) {
    res.set({
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="orders.csv"',
    });
    return this.reportsService.generateOrdersCsv();
  }

  @Get('reports/stats/pdf')
  async getStatsPdf(@Res() res: Response) {
    const buffer = await this.reportsService.generateStatsPdf();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="stats-report.pdf"',
      'Content-Length': buffer.length.toString(),
    });
    res.end(buffer);
  }
}

