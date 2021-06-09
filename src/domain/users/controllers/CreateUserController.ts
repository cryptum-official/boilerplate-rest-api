import { Request, Response } from 'express';

import { UsersRepository } from '../../../infra/repositories/users/UsersRepository';
import { CreateUserAction } from '../actions/CreateUserAction';

class CreateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createUser = new CreateUserAction(new UsersRepository());

    const user = await createUser.execute({ name: 'Yury', isTrue: false });

    return res.status(201).json(user);
  }
}

export default CreateUserController;
