import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../../../sequelize/models';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { IUsersRepository } from '../IUsersRepository';

class UsersFakeRepository implements IUsersRepository {
  users: IUser[] = [];

  async findAll(): Promise<IUser[]> {
    return this.users;
  }

  async findById(id: string): Promise<IUser> {
    return this.users.find((user) => user.id === id);
  }

  async create({ name }: ICreateUserDto): Promise<IUser> {
    const user: IUser = {
      id: uuidv4(),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }
}

export { UsersFakeRepository };
