import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  CurrencyAmount,
  Consumer,
  Address,
  Merchant,
  Item,
  Discount,
  Frequency,
} from '@types';

import {
  IsString,
  IsNumber,
  ValidateNested,
  ArrayMinSize,
  IsOptional,
} from 'class-validator';

import { Type } from 'class-transformer';

export class OrderDTO {
  @ApiProperty()
  @ValidateNested()
  @Type(() => CurrencyAmount)
  totalAmount: CurrencyAmount;

  @ApiProperty()
  @ValidateNested()
  @Type(() => Consumer)
  consumer: Consumer;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  billing?: Address;

  @ApiProperty()
  @ValidateNested()
  @Type(() => Address)
  shipping: Address;

  @ApiProperty({
    type: () => Item,
    isArray: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Item)
  @ArrayMinSize(1, {
    message: 'At least one product is required to create an order',
  })
  items: Item[];

  @ApiPropertyOptional({
    type: () => Discount,
    isArray: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Discount)
  discounts?: Discount[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => Merchant)
  merchant: Merchant;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  merchantReference?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => CurrencyAmount)
  shippingAmount?: CurrencyAmount;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => CurrencyAmount)
  taxAmount?: CurrencyAmount;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  product?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Frequency)
  frequency?: Frequency;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  orderExpiryMilliseconds?: number;
}
