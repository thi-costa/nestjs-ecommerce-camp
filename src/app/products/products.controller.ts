import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from '@app/products/dto/create-products.dto';
import { GetProductsFilterDto } from '@app/products/dto/get-products-filter.dto';
import { Product } from '@app/products/products.entity';
import { ProductsService } from '@app/products/products.service';
import { JwtGuard } from '@auth/guards/jwt.guard';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductController');
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() filterDto: GetProductsFilterDto): Promise<Product[]> {
    this.logger.debug('GetProducts called');

    return this.productsService.getProducts(filterDto);
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
}
