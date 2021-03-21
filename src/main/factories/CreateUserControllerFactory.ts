import { CreateUserUseCase } from "../../core/usecases/CreateUser/CreateUserUseCase";
import { CreateUserController } from "../../external/presenters/controllers/CreateUserController";
import { PostgresUserRepository } from "../../external/adapters/repositories/PostgresRepository";
import { MailTrapServiceImpl } from "../../external/adapters/services/MailTrapServiceImpl";

const mailtrapService= new MailTrapServiceImpl();
const postgresUserRepository = new PostgresUserRepository();

const createUserCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapService
);

const createUserController = new CreateUserController(
    createUserCase
)

export { createUserController, createUserCase }


