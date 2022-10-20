import { instanceToPlain } from 'class-transformer';
import { Request, response, Response } from 'express'
import { User } from '../entities/user.entity';
import { IUserRequest, IUserUpdate } from '../interfaces/users';

import createUserService from '../services/users/createUsers.service';
import userDeleteService from '../services/users/deleteUser.service';
import listUsersService from '../services/users/listUsers.service';
import updateUserService from '../services/users/updateUser.service';


const createUserController = async (req: Request, res: Response) => {
  try {
   
    // const { name, email, age, password }: IUserRequest = req.body
    const user: IUserRequest = req.body;
    const createdUser = await createUserService(user)
    return res.status(201).json(instanceToPlain(createdUser))

  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
};

const listUsersController = async(req: Request, res: Response) => {
  const users = await listUsersService()
  return res.json(users)
  //retorno se quando quiser listar não mostrar a senha
  //return res.json(instanceToPlain(users))
}

const updateUserController = async (req: Request, res: Response) => {
  try {
   
    const userUpdate: IUserUpdate = req.body;
    const id: string = req.params.id
    const updatedUser = await updateUserService(userUpdate, id)
    if(updatedUser instanceof User){
      return res
        .status(200)
        .json(updatedUser)
    }
    return res
      .status(updatedUser[1] as number)
      .json({ message: updatedUser[0] })

  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {

  try {
    const id = req.params.id;
    await userDeleteService(id);

    return res
      .status(204)
      .json({ message: 'User deleted with sucess!' })
   
  } catch (error) {
    if(error instanceof Error){
      return res
        .status(400)
        .json({ message: error.message })
    }
  }
};

export { createUserController, listUsersController, updateUserController, deleteUserController}