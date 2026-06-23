import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../database/generated/prisma/client';
import { CurrentUser } from '../identity/decorators/current-user.decorator';
import { Roles } from '../identity/decorators/roles.decorator';
import { JwtAuthGuard } from '../identity/guards/jwt-auth.guard';
import { RolesGuard } from '../identity/guards/roles.guard';
import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RoleEnum.CLIENT)
export class OrderController {
  constructor(private readonly orders: OrderService) {}

  @Post()
  create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: CreateOrderDto,
  ) {
    return this.orders.createOrder(user.sub, dto);
  }

  @Get()
  list(@CurrentUser() user: AuthenticatedUser) {
    return this.orders.listOrders(user.sub);
  }

  @Get(':id')
  getOne(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.orders.getOrder(user.sub, id);
  }
}
