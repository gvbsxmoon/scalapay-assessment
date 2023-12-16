type CurrencyAmount = {
  currency: string;
  amount: string;
};

type Consumer = {
  phoneNumber?: string;
  givenNames: string;
  email?: string;
  surname: string;
};

type Address = {
  phoneNumber: string;
  countryCode: string;
  name: string;
  postcode: string;
  line1: string;
  suburb: string;
};

type Merchant = {
  redirectCancelUrl: string;
  redirectConfirmUrl: string;
};

type Item = {
  price: CurrencyAmount;
  gtin?: string;
  quantity: number;
  name: string;
  category: string;
  subcategory?: string[];
  sku: string;
  brand?: string;
  pageUrl?: string;
  imageUrl?: string;
};

type Discount = {
  amount: CurrencyAmount;
  displayName: string;
};

export { CurrencyAmount, Consumer, Address, Merchant, Item, Discount };
