//apenas o adm pode listar todos os usuários
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listUsersService = async(): Promise<User[]> => {

  const userRepository = AppDataSource.getRepository(User)

  //esse trecho do codigo tras um vetor contendo todos os usuários
  // é uma alternativa ai select alls
  const users = await userRepository.find()

  return users

}
export default listUsersService;


