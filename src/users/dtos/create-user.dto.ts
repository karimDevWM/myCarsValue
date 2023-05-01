/* eslint-disable prettier/prettier */

import { IsEmail, IsString } from "class-validator";

// this class is for validating incoming creation user requests
export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}