import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';
import { v4 as uuidv4 } from 'uuid';
import { AuthGuard } from '@auth/auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() product: Omit<ProductDTO, 'id'>, @Res() res) {
    try {
      const createdProduct = this.productService.create({
        id: uuidv4(),
        ...product,
      });
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @Get()
  findAll(@Res() res) {
    try {
      const productsList = this.productService.findAll();
      res.status(200).json(productsList);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res) {
    try {
      const product = this.productService.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProduct: Partial<ProductDTO>,
    @Res() res,
  ) {
    try {
      const updatedProduct = this.productService.update(id, updateProduct);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res) {
    try {
      const deletedProduct = this.productService.remove(id);
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
}
