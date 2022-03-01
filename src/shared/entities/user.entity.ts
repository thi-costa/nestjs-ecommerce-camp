import { Order } from '@shared/entities/orders.entity';
import { Product } from '@shared/entities/products.entity';
import { Role } from '@auth/roles/role.enum';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @OneToMany((_type) => Product, (product) => product.user, { eager: true })
  products: Product[];

  @OneToMany((_type) => Order, (order) => order.user, { eager: false })
  @Exclude({ toPlainOnly: true })
  orders: Order[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @Exclude()
  deletedAt: Date;
}
