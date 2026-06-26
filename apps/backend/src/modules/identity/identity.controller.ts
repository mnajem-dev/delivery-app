import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { Roles } from './decorators/roles.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { IdentityService } from './identity.service';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class IdentityController {
  constructor(
    private readonly identityService: IdentityService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.identityService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.identityService.login(dto);
  }

  @Post('otp/request')
  requestOtp(@Body() dto: RequestOtpDto) {
    return this.identityService.requestOtp(dto);
  }

  @Post('otp/verify')
  verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.identityService.verifyOtp(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.identityService.getProfile(user.sub);
  }

  @Post('device-token')
  @UseGuards(JwtAuthGuard)
  registerDeviceToken(
    @Body() body: { token: string; platform: string },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.prisma.deviceToken.upsert({
      where: {
        userId_platform: {
          userId: user.sub,
          platform: body.platform,
        },
      },
      update: { token: body.token },
      create: {
        userId: user.sub,
        token: body.token,
        platform: body.platform,
      },
    });
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
