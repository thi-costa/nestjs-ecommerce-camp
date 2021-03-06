import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductSize } from '@app/products/products-size.enum';
import { ProductCategory } from '@app/products/products-category.enum';
import { IsInt, IsNumber } from 'class-validator';
import { User } from '@shared/entities/user.entity';
import { Exclude } from 'class-transformer';
import { Order } from '@shared/entities/orders.entity';

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

  @ManyToOne((_type) => User, (user) => user.products, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @ManyToMany(() => Order, { cascade: true })
  orders: Order[];
}
