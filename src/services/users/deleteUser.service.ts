import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async (id: string) => {

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error('User not found');
  }
  
  await userRepository.update(
    id,
    {
      isActive: false 
    }
  )
  
  return true;
}
export default userDeleteService;






