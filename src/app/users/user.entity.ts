import { Product } from '@app/products/products.entity';
import { Role } from '@auth/roles/role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @

  @OneToMany((_type) => Product, (product) => product.user, { eager: true })
  products: Product[];
}
