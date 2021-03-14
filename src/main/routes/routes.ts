import { Router } from "express";
import { createUserController } from "../factories/CreateUserControllerFactory";

const router = Router();

router.post('/user',(req,resp) => {
    return createUserController.handle(req,resp)
});

export { router }