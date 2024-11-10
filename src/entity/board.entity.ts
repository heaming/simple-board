import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'Board'})
export class Board {

  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @ApiProperty({description: '게시글 제목'})
  @Column()
  title: string;

  @Column()
  contents: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}