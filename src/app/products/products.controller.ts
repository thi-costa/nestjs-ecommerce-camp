import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-products.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductController');
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() filterDto: GetProductsFilterDto): Promise<Product[]> {
    this.logger.debug('GetProducts called');

    return this.productsService.getProducts(filterDto);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }
}
