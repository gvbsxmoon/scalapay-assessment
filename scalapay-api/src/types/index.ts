import {
  IsString,
  IsArray,
  ValidateNested,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsDefined,
  IsOptional,
  IsNumber,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CurrencyAmount {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  amount: string;
}

class Consumer {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  phoneNumber?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  givenNames: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;
}

class Address {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  phoneNumber?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  postcode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  suburb: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  line1: string;
}

class Merchant {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  redirectCancelUrl: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  redirectConfirmUrl: string;
}

class Item {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  gtin?: string;

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  quantity: number;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CurrencyAmount)
  @IsDefined()
  price: CurrencyAmount;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  subcategory?: string[];

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  sku: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsUrl()
  pageUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsUrl()
  imageUrl?: string;
}

class Discount {
  @ApiProperty()
  @ValidateNested()
  @Type(() => CurrencyAmount)
  @IsDefined()
  amount: CurrencyAmount;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  displayName: string;
}

class Frequency {
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  number: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  frequencyType: string;
}

export {
  CurrencyAmount,
  Consumer,
  Address,
  Merchant,
  Item,
  Discount,
  Frequency,
};
