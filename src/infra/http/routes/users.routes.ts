import { Router } from 'express';

import CreateUserController from '../../../domain/users/controllers/CreateUserController';

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
