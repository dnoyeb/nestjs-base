import { Controller, Body, UsePipes, ValidationPipe, Post, Get, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@ApiTags('用户接口')
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly authService: AuthService,
    ) { }

    @UsePipes(new ValidationPipe())
    @Post('createUser')
    async create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);

    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.userService.findOne(id);

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.userService.delete(id);
    }

    @UsePipes(new ValidationPipe())
    @Put()
    async update(@Body('user') userData: UpdateUserDto) {
        return await this.userService.update(userData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.createToken(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
