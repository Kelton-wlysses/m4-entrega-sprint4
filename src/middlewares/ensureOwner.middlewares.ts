import { Request, Response, NextFunction, response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';



const ensureOwnerMiddleware = async(req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if(!user) {
    return res
      .status(404)
      .json({message: 'User not found'})
  }

  if (!req.user.isAdm || id !== user.id){
    return res.status(401).json({ message: 'Unauthorized'})
  }

  return next()

}
export default ensureOwnerMiddleware;





