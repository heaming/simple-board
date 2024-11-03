import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: "제목",
    required: true,
    example: "title#1",
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "내용",
    required: true,
    example: "contents...",
  })
  contents: string;
}