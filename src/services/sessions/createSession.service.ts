import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';


const createSessionService = async ({email, password}: IUserLogin): Promise<string> => {

  const userRepository = AppDataSource.getRepository(User)

  //trecho para encontrar o email dentro do repositorio
  const user = await userRepository.findOneBy({
    email: email,
  })

  //caso não seja encontrado ele vai entrar nesse if
  if(!user){
    throw new Error('Invalid user or password')
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
    throw new Error('Invalid user or password')
  }

  const token = jwt.sign({
      isAdm: user.isAdm
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '24h',
      subject: user.id
    }
  ) 

  return token

}
export default createSessionService;


