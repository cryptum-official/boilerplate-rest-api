import { db } from '../../sequelize';
import { IUser } from '../../sequelize/models';
import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { IUsersRepository } from './IUsersRepository';

const { User } = db;

class UsersRepository implements IUsersRepository {
  public async findAll(): Promise<IUser[]> {
    const users = await User.findAll();

    return users;
  }

  public async findById(id: string): Promise<IUser> {
    const user = await User.findByPk(id);

    return user;
  }

  public async create({ name }: ICreateUserDto): Promise<IUser> {
    const user = await User.create({ name });

    return user;
  }
}

export { UsersRepository };
