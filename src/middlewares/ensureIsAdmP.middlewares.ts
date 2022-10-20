import { Request, Response, NextFunction } from "express";

const ensureIsAdmPMiddleware = async(req: Request, res: Response, next: NextFunction) => {

  if(!req.user.isAdm){
    return res
      .status(401)
      .json({ message: 'User is not admin' })
  }

  return next()

}
export default ensureIsAdmPMiddleware;