import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('board')
export class Board {

  @PrimaryGeneratedColumn({name: 'id'})
  public id: number;

  @Column()
  public title: string;

  @Column()
  public contents: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: '작성 유저' })
  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user: User;

}