import { ProductDTO } from './product.dto';

const mockProducts: ProductDTO[] = [
  {
    id: '1',
    product: {
      price: {
        currency: 'EUR',
        amount: '16.00',
      },
      quantity: 1,
      gtin: '123458791330',
      name: 'T-Shirt',
      category: 'clothes',
      sku: '12341234',
    },
  },
  {
    id: '2',
    product: {
      price: {
        currency: 'EUR',
        amount: '60.00',
      },
      quantity: 1,
      gtin: '123458791330',
      name: 'Jeans',
      category: 'clothes',
      sku: '12341234',
    },
  },
  {
    id: '2',
    product: {
      price: {
        currency: 'EUR',
        amount: '100.00',
      },
      quantity: 1,
      gtin: '123458791330',
      name: 'Sweater',
      category: 'clothes',
      sku: '12341234',
    },
  },
];

export default mockProducts;
