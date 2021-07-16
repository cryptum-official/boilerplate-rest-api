import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '..', '..', '..', '..', '.env') });

type configObject = {
  app: {
    port: number;
    httpBodyLimit: string;
    sendgridApiKey: string;
  },
  db: {
    typeormHost: string;
    knexHost: string;
    database: string;
    username: string;
    password: string;
    logging: boolean;
    pool: {
      max: number;
      min: number;
    }
  },
}

const environments = {
  development: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      typeormHost: process.env.DATABASE_TYPEORM_HOST,
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
  } as configObject,
  test: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      typeormHost: process.env.DATABASE_TYPEORM_HOST,
      knexHost: process.env.DATABASE_KNEX_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      pool: {
        max: Number(process.env.DATABASE_POOL_SIZE_MAX) || 20,
        min: Number(process.env.DATABASE_POOL_SIZE_MIN) || 2,
      }
    }
  } as configObject,
  prod: {
    app: {
      port: process.env.APP_PORT || 3000,
      httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
    },
    db: {
      typeormHost: process.env.DATABASE_TYPEORM_HOST,
      knexHost: process.env.DATABASE_KNEX_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      pool: {
        max: Number(process.env.DATABASE_POOL_SIZE_MAX) || 20,
        min: Number(process.env.DATABASE_POOL_SIZE_MIN) || 2,
      }
    }
  } as configObject
};

export { environments, configObject };
