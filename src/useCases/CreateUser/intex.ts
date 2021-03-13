import { CreateUserController } from "../../controllers/CreateUserController";
import { PostgresUserRepository } from "../../repositories/PostgresRepository";
import { MailTrapServiceImpl } from "../../services/MailTrapServiceImpl";
import { CreateUserUseCase } from "./CreateUserUseCase";


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

