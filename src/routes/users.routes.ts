import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureOwnerMiddleware from "../middlewares/ensureOwner.middlewares";
import ensureSoftMiddleware from "../middlewares/ensureSoft.middlewares";
import ensureIsAdmPMiddleware from "../middlewares/ensureIsAdmP.middlewares";

const userRoutes = Router();

userRoutes.post('', createUserController);  //criação de usuário
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController);   //listar todos os usuário
userRoutes.patch('/:id', ensureAuthMiddleware, ensureIsAdmPMiddleware, ensureOwnerMiddleware, updateUserController); // atualizar dados midleware
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, ensureSoftMiddleware, deleteUserController); //soft delete

export default userRoutes;
