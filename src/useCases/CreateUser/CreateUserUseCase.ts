import { UserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IMailService } from "../../services/IMailService";

export class CreateUserUseCase {  
    constructor(
       private userRepository: IUserRepository,
       private mailService : IMailService
    ) {}
    
    
    async execute(userDTO: UserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(userDTO.email);

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = new User(userDTO);

        console.log(user);
        
        await this.userRepository.save(user);

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