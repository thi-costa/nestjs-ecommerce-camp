import { IsEnum, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { ProductSize } from '@app/products/products-size.enum';
import { ProductCategory } from '../products-category.enum';
import { Transform } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(ProductSize)
  size: ProductSize;

  @IsNotEmpty()
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsNotEmpty()
  qty: number;

  @IsNotEmpty()
  price: number;
}
