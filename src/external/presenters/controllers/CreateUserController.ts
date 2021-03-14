import { Request, Response } from "express"
import { ICreateUser } from "../../../core/usecases/CreateUser/ICreateUser";

export class CreateUserController {
    
    constructor(
        private createUser: ICreateUser
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUser.handle( {
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