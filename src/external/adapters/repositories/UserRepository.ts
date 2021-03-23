import { DeepPartial, EntityRepository, Repository } from "typeorm";
import { User } from "../../../core/entity/User";
import { IUserRepository } from "../../../core/ports/repositories/IUserRepository";

@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository  {
    
    async findByEmail(email: string): Promise<User> {
        return await this.findOne({email});
    }

    async saveUser(user: User): Promise<User> {
         return await this.save(user);
    }
}