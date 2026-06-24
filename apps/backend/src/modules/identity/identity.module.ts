import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';
import { OtpProviderService } from './services/otp-provider.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '7d') as `${number}d`,
        },
      }),
    }),
  ],
  controllers: [IdentityController],
  providers: [
    IdentityService,
    OtpProviderService,
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
  ],
  exports: [IdentityService, JwtAuthGuard, RolesGuard, JwtModule, PassportModule],
})
export class IdentityModule {}
