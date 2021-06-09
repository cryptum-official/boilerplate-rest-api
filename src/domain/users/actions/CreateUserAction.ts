import { AppError } from '../../../infra/errors/AppError';
import { IUsersRepository } from '../../../infra/repositories/users/IUsersRepository';
import { IUser } from '../../../infra/sequelize/models';

interface IRequest {
  name: string;
  isTrue: boolean;
}

class CreateUserAction {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, isTrue }: IRequest): Promise<IUser> {
    if (isTrue) {
      throw new AppError('User creation not authorized', 401);
    }

    const user = await this.usersRepository.create({ name });

    return user;
  }
}

export { CreateUserAction };
