import { Product } from '@shared/entities/products.entity';
import { User } from '@shared/entities/user.entity';
import { Role } from '@auth/roles/role.enum';
import { Exclude } from 'class-transformer';
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

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total_price: number;

  @ManyToMany(() => Product, { cascade: true })
  products: Product[];

  @ManyToOne((_type) => User, (user) => user.orders, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

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
