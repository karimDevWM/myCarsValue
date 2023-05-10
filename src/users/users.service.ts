/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    /**
     * This code appears to be using TypeScript decorators and the TypeORM library to inject a repository instance for the "User" entity.
     * The @InjectRepository(User) decorator is used to indicate that the repo property should be injected with an instance of the Repository class for the User entity.
     * The Repository<User> type parameter indicates that this repository instance is specifically for managing entities of type User.
     * @param repo 
     */
    constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    create(email: string, password: string) {
        // this line create an instance of user entity, and not persistin any data in to the db user table
        const user = this.repo.create({ email, password })
        // this line take the instance of entity and persist the data into the db user table
        return this.repo.save(user);
    }

    // this method will find the first record that match the id or not
    findOne(id: number){
        return this.repo.findOne({
            where: {
                id: id
            }
        });
    }
    // Or
    /**
     * for finding a user with a particular email 
     * findOne(email: string) {
     *  return this.repo.findOne({email:email})
     * }
     * */ 

    // this methode will return an array of all the records that contain the search criteria
    find(email: string){
        return this.repo.find({ 
            where: {
                email: email
            } 
        });
    }

    /**
     * attrs: attributes. with the Partial<User>, it means here that attrs can be any object that has
    at least 1 property or not properties of User entity
     */     
    async update(id: number, attrs: Partial<User>){
        // 1) findOne user with a given id, by calling the above fin function
        const user = await this.findOne(id);
        if(!user) {
            throw new Error('user not found');
        }
        // Object.assign(user, attrs) is a JavaScript method that copies the values of all enumerable 
        // own properties from one or more source objects (attrs in this case) to a target object 
        // (user in this case) and returns the target object.
        // In this code, user is an object representing a user, and attrs is an object containing 
        // key-value pairs that represent attributes to be updated for the user object.
        // By calling Object.assign(user, attrs), the values of the properties in attrs are copied into user. 
        // If user already has a property with the same name as one of the properties in attrs, 
        // then its value will be overwritten. If user does not have a property with the same name 
        // as a property in attrs, then a new property will be created in user with that name and value.
        // After this code executes, user will have been updated with the values of the properties in attrs.
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number){
        // 1) findOne user with a given id, by calling the above fin function
        const user = await this.findOne(id);
        // if(!user) {
        //     throw new Error('user not found');
        // }

        return this.repo.remove(user);
    }

    findAll() {
        return this.repo.find();
    }
}
