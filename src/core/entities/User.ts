import { uuid } from "uuidv4";

class User {
    public readonly id: string;
    public name: string;
    public password : string;
    public email : string;

    constructor(props: Omit<User,'id'>, id?: string) {
        Object.assign(this,props);

        if (!id) {
            this.id = uuid()
        }
    }
}


export { User };