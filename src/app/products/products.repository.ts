import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-products.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { ProductCategory } from './products-category.enum';
import { ProductSize } from './products-size.enum';
import { Product } from './products.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  private logger = new Logger('Products repository', { timestamp: true });

  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { size, category, name, minPrice, maxPrice } = filterDto;
    const query = this.createQueryBuilder('product');

    size ? query.andWhere('product.size = UPPER(:size)', { size }) : {};

    category
      ? query.andWhere('product.category = UPPER(:category)', { category })
      : {};

    name
      ? query.andWhere('(LOWER(product.name) LIKE LOWER(:name))', {
          name: `%${name}%`,
        })
      : {};

    minPrice ? query.andWhere('product.price >= :minPrice', { minPrice }) : {};
    maxPrice ? query.andWhere('product.price <= :maxPrice', { maxPrice }) : {};

    try {
      const products = await query.getMany();

      this.logger.debug(
        `getProducts succeeded with filter ${JSON.stringify(filterDto)}`,
      );

      return products;
    } catch (error) {
      this.logger.error(
        `Failed to get products with Filters: ${JSON.stringify(filterDto)}.`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, size, category, qty, price } = createProductDto;

    const product = this.create({
      name,
      size,
      category,
      qty,
      price,
    });
    this.logger.verbose(
      `Product: ${name} was created. Details: ${JSON.stringify(product)}`,
    );
    await this.save(product);
    return product;
  }
}
