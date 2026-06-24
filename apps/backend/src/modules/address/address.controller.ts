import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../database/generated/prisma/client';
import { CurrentUser } from '../identity/decorators/current-user.decorator';
import { Roles } from '../identity/decorators/roles.decorator';
import { JwtAuthGuard } from '../identity/guards/jwt-auth.guard';
import { RolesGuard } from '../identity/guards/roles.guard';
import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RoleEnum.CLIENT)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateAddressDto) {
    return this.addressService.create(user.sub, dto);
  }

  @Get()
  findAll(@CurrentUser() user: AuthenticatedUser) {
    return this.addressService.findAll(user.sub);
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.addressService.findOne(user.sub, id);
  }

  @Put(':id')
  update(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAddressDto,
  ) {
    return this.addressService.update(user.sub, id, dto);
  }

  @Patch(':id/default')
  setDefault(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.addressService.setDefault(user.sub, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.addressService.remove(user.sub, id);
  }
}
