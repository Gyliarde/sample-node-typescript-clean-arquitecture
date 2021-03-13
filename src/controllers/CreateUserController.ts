import { Request, Response } from "express"
import { CreateUserUseCase } from "../useCases/CreateUser/CreateUserUseCase";

export class CreateUserController {
    
    constructor(
        private CreateUserCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.CreateUserCase.execute( {
                name,
                email,
                password
            })
    
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message : error.message
            })
        }
    }
}