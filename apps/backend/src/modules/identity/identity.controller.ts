import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../database/generated/prisma/client';
import { CurrentUser } from './decorators/current-user.decorator';
import { Roles } from './decorators/roles.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { IdentityService } from './identity.service';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.identityService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.identityService.login(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.identityService.getProfile(user.sub);
  }

  @Get('admin/ping')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.ADMIN)
  adminPing(@CurrentUser() user: AuthenticatedUser) {
    return {
      message: 'admin access granted',
      userId: user.sub,
    };
  }
}
