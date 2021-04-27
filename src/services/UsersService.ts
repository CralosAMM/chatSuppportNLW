import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email })

    return user;
  }

  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    // Verificar se usuario existe

    const userExists = await this.usersRepository.findOne({
      email,
    });
    //Se não existir, salvar no BD
    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    //se existe, retorne ao usuario
    return user;
  }
}

export { UsersService };