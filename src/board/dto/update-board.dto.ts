import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(20)
  title?: string;

  @IsOptional()
  contents?: string;
}

// 상위 클래스의 field를 optional하게 가져온다
// class-validation option도 상속받으니 주의
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {};

// export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {};

// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['title']){};