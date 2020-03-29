import { Controller, Body, UsePipes, ValidationPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('用户接口')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @UsePipes(new ValidationPipe())
    @Post('createUser')
    async create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);

    }
}
