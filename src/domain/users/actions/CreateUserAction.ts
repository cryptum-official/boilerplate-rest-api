import { AppError } from '../../../infra/errors/AppError';
import { IUsersRepository } from '../../../infra/repositories/users/interfaces/IUsersRepository';
import { User } from '../../../infra/typeorm/entities';

interface IRequest {
  name: string;
  isTrue: boolean;
}

class CreateUserAction {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, isTrue }: IRequest): Promise<User> {
    if (isTrue) {
      throw new AppError('User creation not authorized', 401);
    }

    const user = await this.usersRepository.create({ name });

    return user;
  }
}

export { CreateUserAction };
