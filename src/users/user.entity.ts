/* eslint-disable prettier/prettier */
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// that tells to typeOrm if you look at this class make a realtive table in db
@Entity()
export class User {
    // this gonna create a column type number in table db that 
        // his identifier is auto incremeted and assigned to a recorded data
    @PrimaryGeneratedColumn()
    id: number;
    // this create a column type string into db table
    @Column()
    email: string;

    @Column()
    password: string;

    // hook
    @AfterInsert()
    // this method gonna console log a message when a new user instance is called to insert user record into db User table
    logInsert() {
        console.log('Inserted User with id', this.id)
    }

    // hook
    @AfterUpdate()
    // this method gonna console log a message when a user instance is called to update user record into db User table
    logUpdate() {
        console.log('Updated User with id', this.id)
    }

    // hook
    @AfterRemove()
    // this method gonna console log a message when a user instance is called to delete user record into db User table
    logRemove() {
        console.log('Removed User with id', this.id)
    }
}