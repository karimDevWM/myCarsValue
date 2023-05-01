/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}