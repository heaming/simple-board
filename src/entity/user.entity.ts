import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'Users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: '유저 아이디', example: 'admin'})
  @Column({ name: 'user_id', unique: true })
  userId: string;

  @Column({ select: false })
  password: string;

  @Column({ name: 'user_name' })
  userName: string;

}