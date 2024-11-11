import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Board } from './board.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'user id',
    name: 'id',
    example: 'admin',
  })
  @Column({ name: 'user_id', unique: true })
  userId: string;

  @ApiProperty({
    description: '패스워드',
    name: 'password',
    example: 'admin123',
  })
  @Column({ select: false })
  password: string;

  @ApiProperty({
    description: 'user name',
    name: 'name',
    example: '어드민',
  })
  @Column()
  name: string;

  @ApiProperty({ description: '작성 게시글' })
  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];
}