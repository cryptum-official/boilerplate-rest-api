import { Options } from 'sequelize';
import { config as appConfig } from '../config';

const sequelizeConfig: Options = {
  dialect: 'mysql',
  host: appConfig.db.sequelizeHost,
  database: appConfig.db.database,
  username: appConfig.db.username,
  password: appConfig.db.password,
  pool: {
    max: appConfig.db.pool.max,
    min: appConfig.db.pool.min,
    idle: 30000,
  },
  logging: appConfig.db.logging
};

export { sequelizeConfig };
