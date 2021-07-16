import { User } from '../../../typeorm/entities';
import { ICreateUserDto } from '../dtos/ICreateUserDto';

export interface IUsersRepository {
  findAll(): Promise<User[] | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(data: ICreateUserDto): Promise<User>;
}
