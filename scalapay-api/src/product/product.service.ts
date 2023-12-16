import { Injectable, NotFoundException } from '@nestjs/common';
import mockProducts from './mock';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  private _products: ProductDTO[] = mockProducts;

  create(product: ProductDTO): ProductDTO {
    this._products.push(product);
    return product;
  }

  findAll(): ProductDTO[] {
    if (this._products.length === 0) {
      throw new NotFoundException('Products not found.');
    }
    return this._products;
  }

  findOne(id: string): ProductDTO {
    const product = this._products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product with ID:${id} not found`);
    }

    return product;
  }

  update(id: string, product: Partial<ProductDTO>): ProductDTO {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID:${id} not found`);
    }

    this._products[productIndex] = {
      ...this._products[productIndex],
      ...product,
    };

    return this._products[productIndex];
  }

  remove(id: string): ProductDTO {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID:${id} not found`);
    }

    const deletedProduct = this._products[productIndex];
    this._products.splice(productIndex, 1);

    return deletedProduct;
  }
}
