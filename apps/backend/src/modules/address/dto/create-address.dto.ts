import { IsBoolean, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @Length(1, 100)
  label!: string;

  @IsString()
  @Length(1, 300)
  fullAddress!: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  lat!: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  lng!: number;

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;
}
