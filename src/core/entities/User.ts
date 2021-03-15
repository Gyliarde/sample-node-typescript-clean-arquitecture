import { uuid } from "uuidv4";
import { Email } from "../valueobjects/Email";

class User {
    public readonly id: string;
    public name: string;
    public password : string;
    public email : Email;

    constructor(name: string,password : string, email: string,id? : string) {
        this.name = name;
        this.password = password;
        this.email = new Email(email);


        if (!id) {
            this.id = uuid()
        }
    }
}


export { User };