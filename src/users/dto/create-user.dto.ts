import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '用户名',
    default: 'ceshi',
  })
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}