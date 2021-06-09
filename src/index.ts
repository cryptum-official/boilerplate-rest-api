import { app } from './infra/http/server';
import { db } from './infra/sequelize';

const { sequelize } = db;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(8080, () => console.log('Server running!'));
  } catch (err) {
    console.error('Unable to connect to database: ', err);
  }
};

startServer();
