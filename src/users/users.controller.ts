/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post('/signup')
    // Body decorator is used to tell to nest extract the body from the incoming request
        // so here the extrcted body is gonna be of type CreateUserDto
    createUser(@Body() body: CreateUserDto) {
        this.userService.create(body.email, body.password);
    }

    @Get('/:id')
    // the id here is of type string, because in the incoming request the id is on string data type
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get('/')
    findAll(){
        return this.userService.findAll();
    }

    @Get()
    findAllUsersByGivenEmail(@Query('email') email: string) {
        return this.userService.find(email)
    }


    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.userService.update(parseInt(id), body);
    }
}
