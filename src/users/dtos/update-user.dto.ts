/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString } from "class-validator";

// this class is for validating incoming creation user requests
export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}