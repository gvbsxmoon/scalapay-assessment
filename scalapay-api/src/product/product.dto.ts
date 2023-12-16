import { Item } from '@types';

export class ProductDTO {
  constructor(
    public id: string,
    public product: Item,
  ) {}
}
