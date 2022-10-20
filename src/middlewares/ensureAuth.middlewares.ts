//fazendo authenticação antes de listar todos os usuário cadastrados
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const ensureAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {

  //pegando o token
  let token = req.headers.authorization

  if(!token){
    return res.status(401).json({
      message: 'Invalid token'
    })
  }

  token = token.split(' ')[1]

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) =>{
    if(error){
      return res.status(401).json({
        message: 'Invalid token'
      })
    }

    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub
    }

    //se não retornar error chamar a função next
    return next()

  })


}
export default ensureAuthMiddleware


