import { RoleEnum } from '../../../database/generated/prisma/client';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsEnum(RoleEnum)
  role!: RoleEnum;

  @IsString()
  @MinLength(8)
  password!: string;

  @ValidateIf((dto: RegisterDto) => dto.role === RoleEnum.VENDOR)
  @IsString()
  @IsNotEmpty()
  vendorName?: string;

  @ValidateIf((dto: RegisterDto) => dto.role === RoleEnum.VENDOR)
  @IsString()
  @IsNotEmpty()
  address?: string;

  @ValidateIf((dto: RegisterDto) => dto.role === RoleEnum.VENDOR)
  @Type(() => Number)
  @IsNumber()
  lat?: number;

  @ValidateIf((dto: RegisterDto) => dto.role === RoleEnum.VENDOR)
  @Type(() => Number)
  @IsNumber()
  lng?: number;

  @ValidateIf((dto: RegisterDto) => dto.role === RoleEnum.ADMIN)
  @IsString()
  @IsNotEmpty()
  department?: string;
}
