import { Router } from 'express';

import CreateUserController from '../../../domain/users/controllers/CreateUserController';

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.get('/', createUserController.handle);

export { usersRoutes };
