import { OrderDTO } from './order.dto';

const mockOrder: OrderDTO = {
  totalAmount: {
    currency: 'EUR',
    amount: '120',
  },
  consumer: {
    phoneNumber: '0400000001',
    givenNames: 'Joe',
    surname: 'Consumer',
    email: 'test@scalapay.it',
  },
  shipping: {
    phoneNumber: '0400000000',
    countryCode: 'IT',
    name: 'Joe Consumer',
    postcode: '50056',
    suburb: 'Montelupo Fiorentino',
    line1: 'Via della Rosa, 58',
  },
  merchant: {
    redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
    redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url',
  },
  shippingAmount: {
    currency: 'EUR',
    amount: '12',
  },
  taxAmount: {
    currency: 'EUR',
    amount: '120',
  },
  type: 'online',
  product: 'pay-in-3',
  frequency: {
    number: 1,
    frequencyType: 'monthly',
  },
  orderExpiryMilliseconds: 600000,
  items: [
    {
      price: {
        currency: 'EUR',
        amount: '10.00',
      },
      quantity: 1,
      gtin: '123458791330',
      name: 'T-Shirt',
      category: 'clothes',
      sku: '12341234',
    },
  ],
  merchantReference: 'merchantOrder-1234',
};

export default mockOrder;
