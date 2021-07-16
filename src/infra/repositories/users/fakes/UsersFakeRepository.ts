import { v4 as uuidv4 } from 'uuid';

import { User } from '../../../typeorm/entities';
import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { IUsersRepository } from '../interfaces/IUsersRepository';

class UsersFakeRepository implements IUsersRepository {
  users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async create({ name }: ICreateUserDto): Promise<User> {
    const user: User = {
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
