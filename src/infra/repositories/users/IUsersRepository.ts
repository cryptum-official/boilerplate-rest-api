import { IUser } from '../../sequelize/models';
import { ICreateUserDto } from '../dtos/ICreateUserDto';

export interface IUsersRepository {
  findAll(): Promise<IUser[] | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  create(data: ICreateUserDto): Promise<IUser>;
}
