import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductSize } from '@app/products/products-size.enum';
import { ProductCategory } from './products-category.enum';
import { IsIn, IsInt, IsNumber } from 'class-validator';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public size: ProductSize;

  @Column()
  @IsInt()
  public qty: number;

  @Column()
  public category: ProductCategory;

  @Column({ type: 'float' })
  public price: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;
}
