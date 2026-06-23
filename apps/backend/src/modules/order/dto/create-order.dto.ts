import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsUUID, Min } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  deliveryAddressId!: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  tipMinor?: number;
}
