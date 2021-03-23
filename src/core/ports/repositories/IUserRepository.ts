import { User } from "../../entity/User";

export interface IUserRepository {
    findByEmail(email : string) : Promise<User>;
    saveUser(user: User) : Promise<User>;
}