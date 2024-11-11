import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}