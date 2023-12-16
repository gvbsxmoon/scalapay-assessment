import {
  CurrencyAmount,
  Consumer,
  Address,
  Merchant,
  Item,
  Discount,
} from '@types';

export class OrderDTO {
  constructor(
    public totalAmount: CurrencyAmount,
    public consumer: Consumer,
    public shipping: Address,
    public merchant: Merchant,
    public items: Item[],
    public billing?: Address,
    public shippingAmount?: CurrencyAmount,
    public taxAmount?: CurrencyAmount,
    public type?: string,
    public product?: string,
    public frequency?: { number: number; frequencyType: string },
    public orderExpiryMilliseconds?: number,
    public discounts?: Discount[],
    public merchantReference?: string,
  ) {}
}
