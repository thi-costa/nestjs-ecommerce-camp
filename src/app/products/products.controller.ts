import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from '@app/products/dto/create-products.dto';
import { GetProductsFilterDto } from '@app/products/dto/get-products-filter.dto';
import { Product } from '@shared/entities/products.entity';
import { ProductsService } from '@app/products/products.service';
import { JwtGuard } from '@auth/guards/jwt.guard';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductController');
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() filterDto: GetProductsFilterDto): Promise<Product[]> {
    this.logger.debug('GetProducts called');

    return this.productsService.getProducts(filterDto);
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @UseGuards(JwtGuard, IsAdminGuard)
  @Post()
  createProduct(
    @Body() createProductDto: CreateProductDto,
    @Request() req,
  ): Promise<Product> {
    this.logger.verbose(
      `User "${req.user.username}" with Role "${
        req.user.role
      }", created a new product. Data: ${JSON.stringify(createProductDto)}"`,
    );
    return this.productsService.createProduct(createProductDto, req.user);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateProductDto: object,
  ): Promise<Product> {
    this.logger.verbose(
      `Update DTO object ${JSON.stringify(updateProductDto)}`,
    );
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @UseGuards(JwtGuard, IsAdminGuard)
  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    this.logger.debug('Method deleteProduct called');
    return this.productsService.deleteProduct(id);
  }
}
