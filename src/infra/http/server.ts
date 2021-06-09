import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from '../errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

export { app };
