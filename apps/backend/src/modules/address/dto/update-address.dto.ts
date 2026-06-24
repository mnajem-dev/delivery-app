import { IsBoolean, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  @Length(1, 100)
  @IsOptional()
  label?: string;

  @IsString()
  @Length(1, 300)
  @IsOptional()
  fullAddress?: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  @IsOptional()
  lat?: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  @IsOptional()
  lng?: number;
}
