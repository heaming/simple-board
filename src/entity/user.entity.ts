import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'user id',
    name: 'id',
    example: 'admin',
  })
  @Column({ unique: true })
  username: string;

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

}