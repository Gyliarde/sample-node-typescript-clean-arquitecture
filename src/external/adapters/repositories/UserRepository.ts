import { User } from "../../../core/entity/User";
import { IUserRepository } from "../../../core/ports/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    
    
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}