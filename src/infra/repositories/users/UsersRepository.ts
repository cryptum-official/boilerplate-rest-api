import { Repository, getRepository } from 'typeorm';

import { User } from '../../typeorm/entities';
import { ICreateUserDto } from './dtos/ICreateUserDto';
import { IUsersRepository } from './interfaces/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private respository: Repository<User>;

  constructor() {
    this.respository = getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    const users = await this.respository.find();

    return users;
  }

  public async findById(id: string): Promise<User> {
    const user = await this.respository.findOne(id);

    return user;
  }

  public async create(data: ICreateUserDto): Promise<User> {
    const user = this.respository.create(data);

    await this.respository.save(user);

    return user;
  }
}

export { UsersRepository };
