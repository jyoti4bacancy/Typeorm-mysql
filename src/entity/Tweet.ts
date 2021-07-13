import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { print } from "util";
import { User } from "./User";
@Entity({name: "tweets"})
export class Tweet{
    @PrimaryGeneratedColumn("uuid")
    id:String

    @Column({type:"varchar", length :"80"})
    title:String

    
    @Column({type:"varchar", length :"80"})
    content:String
    
    @ManyToOne(type=>User,user=>user.tweets)
    user:Promise<User>
}
