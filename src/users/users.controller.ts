/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {

    @Post('/signup')
    // Body decorator is used to tell to nest extract the body from the incoming request
        // so here the extrcted body is gonna be of type CreateUserDto
    createUser(@Body() body: CreateUserDto) {
        console.log(body);
    }
}
