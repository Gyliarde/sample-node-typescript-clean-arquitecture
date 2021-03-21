import { uuid } from "uuidv4";
import { Email } from "../valueobjects/Email";

class User {
    public readonly id: string;
    public name: string;
    public password : string;
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