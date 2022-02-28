import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-products.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { Product } from './products.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productsRepository: ProductRepository,
  ) {}

  private logger = new Logger('ProductService', { timestamp: true });

  getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    this.logger.debug('GetProduct called');
    return this.productsRepository.getProducts(filterDto);
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    this.logger.debug('CreateProduct called');
    return this.productsRepository.createProduct(createProductDto);
  }
}
