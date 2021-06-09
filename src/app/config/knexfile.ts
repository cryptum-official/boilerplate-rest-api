import { Knex } from 'knex';
import { resolve } from 'path';

import { config as appConfig } from './index';

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    charset: 'utf8',
    database: appConfig.db.database,
    host: appConfig.db.knexHost,
    password: appConfig.db.password,
    user: appConfig.db.username,
  },
  migrations: {
    directory: resolve(__dirname, '..', 'database', 'migrations'),
    tableName: 'migrations_v2',
  },
  pool: {
    acquireTimeoutMillis: 30000,
    createRetryIntervalMillis: 100,
    createTimeoutMillis: 3000,
    idleTimeoutMillis: 30000,
    max: Number(appConfig.db.pool.max) || 20,
    min: Number(appConfig.db.pool.min) || 2,
    propagateCreateError: false,
    reapIntervalMillis: 1000,
  },
  seeds: {
    directory: resolve(__dirname, '..', 'database', 'seeds'),
  },
};

export default config;
