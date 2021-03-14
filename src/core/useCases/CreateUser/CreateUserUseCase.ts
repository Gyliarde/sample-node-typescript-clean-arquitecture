import { UserDTO } from "../../../external/presenters/dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../ports/repositories/IUserRepository";
import { IMailService } from "../../ports/services/IMailService";
import { ICreateUser } from "./ICreateUser";

export class CreateUserUseCase implements ICreateUser {  
    constructor(
       private userRepository: IUserRepository,
       private mailService : IMailService
    ) {}

    
    async handle(userDTO: UserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(userDTO.email);

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = new User(userDTO);

        console.log(user);
        
        await this.userRepository.save(user);

        this.sendEmailToUser(userDTO)
    }

    async sendEmailToUser(userDTO: UserDTO) {
        await this.mailService.sendEmail({
            to : {
                name: userDTO.name,
                email: userDTO.email
            },
            from : {
                name: 'Equipe teste',
                email: 'equipe@email.com'
            },
            subject : 'Seja Bem vindo',
            body : '<p> Bem vindo </p>'
        });
    }
}