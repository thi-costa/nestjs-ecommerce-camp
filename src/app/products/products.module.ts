import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '@app/products/products.controller';
import { ProductRepository } from '@app/products/products.repository';
import { ProductsService } from '@app/products/products.service';
import { AuthModule } from '@auth/auth.module';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository]), AuthModule],
  controllers: [ProductsController],
  providers: [ProductsService, IsAdminGuard],
})
export class ProductsModule {}
