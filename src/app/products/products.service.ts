import { User } from '@shared/entities/user.entity';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-products.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../../shared/entities/products.entity';
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
  async getProductById(id: string): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Product with ID ${id} Not Found`);
    }

    return found;
  }

  createProduct(
    createProductDto: CreateProductDto,
    user: User,
  ): Promise<Product> {
    this.logger.debug('CreateProduct called');
    return this.productsRepository.createProduct(createProductDto, user);
  }

  async updateProduct(id, updateProductDto: UpdateProductDto) {
    const product = await this.getProductById(id);
    this.logger.verbose(
      `Object of updating ${JSON.stringify(updateProductDto)}`,
    );

    this.logger.debug(`Product ${product.name} was updated`);

    return this.productsRepository.save({
      id: product.id,
      ...updateProductDto,
    });
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productsRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} Not Found`);
    }
    this.logger.debug(`Product with id ${id} deleted`);
  }
}
