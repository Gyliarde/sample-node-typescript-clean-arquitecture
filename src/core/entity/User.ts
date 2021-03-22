import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    public readonly id: string;

    @Column()
    public name: string;

    @Column()
    public password : string;

    @Column()
    public email : string;

    constructor(name: string,password : string, email: string,id? : string) {
        this.name = name;
        this.password = password;
        this.email = email;


        if (!id) {
            this.id = uuid()
        }
    }
}


export { User };