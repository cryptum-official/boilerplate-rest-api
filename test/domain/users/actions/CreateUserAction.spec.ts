import { CreateUserAction } from '../../../../src/domain/users/actions/CreateUserAction';
import { AppError } from '../../../../src/infra/errors/AppError';
import { UsersRepository } from '../../../../src/infra/repositories/users/UsersRepository';

let createUserAction: CreateUserAction;
let usersFakeRepository: UsersRepository;

describe('Test suit', () => {
  beforeEach(() => {
    usersFakeRepository = new UsersRepository();
    createUserAction = new CreateUserAction(usersFakeRepository);
  });

  it('should create a new user', async () => {
    const user = await createUserAction.execute({
      name: 'Raphael',
      isTrue: false,
    });

    expect(user.name).toBe('Raphael');
  });

  it('should fail if "isTrue" flag set as true', async () => {
    await expect(
      createUserAction.execute({ name: 'Raphael', isTrue: true }),
    ).rejects.toEqual(new AppError('User creation not authorized', 401));
  });
});
