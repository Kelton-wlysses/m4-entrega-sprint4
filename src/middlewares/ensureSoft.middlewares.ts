import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const ensureSoftMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    return res
      .status(404)
      .json({ message: 'User not found!'})
  }

  if(!user.isActive) {
    return res
      .status(400)
      .json({ message: 'User inative!'})
  }

  if (!req.user.isAdm) {
    return res
      .status(403)
      .json({ message: 'User is not admin!'})
  }

}
export default ensureSoftMiddleware;

