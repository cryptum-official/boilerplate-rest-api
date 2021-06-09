import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '..', '..', '..', '..', '.env') });

const environments = {
  development: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      sequelizeHost: process.env.DATABASE_SEQUELIZE_HOST,
      knexHost: process.env.DATABASE_KNEX_HOST,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      pool: {
        max: Number(process.env.DATABASE_POOL_SIZE_MAX) || 20,
        min: Number(process.env.DATABASE_POOL_SIZE_MIN) || 2,
      }
    }
  },
  test: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      sequelizeHost: process.env.DATABASE_SEQUELIZE_HOST,
      knexHost: process.env.DATABASE_KNEX_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      pool: {
        max: Number(process.env.DATABASE_POOL_SIZE_MAX) || 20,
        min: Number(process.env.DATABASE_POOL_SIZE_MIN) || 2,
      }
    }
  },
  prod: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      sequelizeHost: process.env.DATABASE_SEQUELIZE_HOST,
      knexHost: process.env.DATABASE_KNEX_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      pool: {
        max: Number(process.env.DATABASE_POOL_SIZE_MAX) || 20,
        min: Number(process.env.DATABASE_POOL_SIZE_MIN) || 2,
      }
    }
  }
};

export { environments };
