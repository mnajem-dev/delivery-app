import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
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
import { ListVendorsQueryDto } from './dto/list-vendors-query.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('catalog/vendors')
export class VendorController {
  constructor(private readonly catalog: CatalogService) {}

  @Get()
  list(@Query() query: ListVendorsQueryDto) {
    return this.catalog.listVendors(query);
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.catalog.getVendor(id);
  }

  @Patch('me')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  updateMe(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: UpdateVendorDto,
  ) {
    return this.catalog.updateVendor(user.sub, dto);
  }

  @Post('me/logo')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.VENDOR)
  @UseInterceptors(FileInterceptor('file', { storage: undefined }))
  uploadLogo(
    @CurrentUser() user: AuthenticatedUser,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.catalog.uploadVendorLogo(user.sub, file);
  }
}
