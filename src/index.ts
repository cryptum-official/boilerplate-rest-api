import 'reflect-metadata';
import 'dotenv/config';

import { options } from './app/config/typeorm';
import { app } from './infra/http/server';
import { Database } from './infra/typeorm/Database';

const startServer = async () => {
  try {
    await Database.getOrCreateConnection(options);

    app.listen(8080, () => console.log('Server running!'));
  } catch (err) {
    console.error('Unable to connect to database: ', err);
  }
};

startServer();
