import { UserDTO } from "../../../external/presenters/dtos/CreateUserDTO";

export interface ICreateUser {
    handle(userDTO :UserDTO);
}