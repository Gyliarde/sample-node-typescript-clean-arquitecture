import { CreateUserUseCase } from "../../core/usecases/CreateUser/CreateUserUseCase";
import { CreateUserController } from "../../external/presenters/controllers/CreateUserController";
import { MailTrapServiceImpl } from "../../external/adapters/services/MailTrapServiceImpl";
import { UserRepository } from "../../external/adapters/repositories/UserRepository";
import { getCustomRepository } from "typeorm";

const mailtrapService= new MailTrapServiceImpl();
const userRepository = getCustomRepository(UserRepository)

const createUserCase = new CreateUserUseCase(
    userRepository,
    mailtrapService
);

const createUserController = new CreateUserController(
    createUserCase
)

export { createUserController, createUserCase }


