import { CreateUserUseCase } from "../../core/usecases/CreateUser/CreateUserUseCase";
import { CreateUserController } from "../../external/presenters/controllers/CreateUserController";
import { PostgresUserRepository } from "../../external/repositories/PostgresRepository";
import { MailTrapServiceImpl } from "../../external/services/MailTrapServiceImpl";

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

