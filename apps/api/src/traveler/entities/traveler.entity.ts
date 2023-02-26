import { Taste } from 'src/taste/entities/taste.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity()
export class Traveler {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.traveler, {
    cascade: true,
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Taste, (taste) => taste.traveler)
  tastes: Taste;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
