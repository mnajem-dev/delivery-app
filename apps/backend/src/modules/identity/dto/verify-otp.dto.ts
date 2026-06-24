import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  requestId!: string;

  @IsString()
  @Length(4, 8)
  code!: string;

  @IsString()
  @Length(2, 100)
  name!: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
