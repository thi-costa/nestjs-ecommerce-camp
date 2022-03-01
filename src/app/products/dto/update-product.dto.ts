import { PartialType } from '@nestjs/swagger';
import { ProductCategory } from '../products-category.enum';
import { ProductSize } from '../products-size.enum';

class CreateProductDto {
  name: string;
  size: ProductSize;
  category: ProductCategory;
  qty: number;
  price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
