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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoleEnum } from '../../database/generated/prisma/client';
import { CurrentUser } from '../identity/decorators/current-user.decorator';
import { Roles } from '../identity/decorators/roles.decorator';
import { JwtAuthGuard } from '../identity/guards/jwt-auth.guard';
import { RolesGuard } from '../identity/guards/roles.guard';
import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { CatalogService } from './catalog.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';

@Controller('catalog')
export class MenuItemController {
  constructor(private readonly catalog: CatalogService) {}

  @Get('vendors/:vendorId/items')
  listItems(@Param('vendorId', ParseUUIDPipe) vendorId: string) {
    return this.catalog.listMenuItems(vendorId);
  }

  @Post('vendors/me/items')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  createItem(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: CreateMenuItemDto,
  ) {
    return this.catalog.createMenuItem(user.sub, dto);
  }

  @Get('items/:id')
  getItem(@Param('id', ParseUUIDPipe) id: string) {
    return this.catalog.getMenuItem(id);
  }

  @Patch('items/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  updateItem(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateMenuItemDto,
  ) {
    return this.catalog.updateMenuItem(user.sub, id, dto);
  }

  @Delete('items/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteItem(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.catalog.deleteMenuItem(user.sub, id);
  }

  @Post('items/:id/image')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  @UseInterceptors(FileInterceptor('file', { storage: undefined }))
  uploadItemImage(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.catalog.uploadMenuItemImage(user.sub, id, file);
  }
}
