import { ConnectionOptions } from 'typeorm';

import { config as appConfig } from './index';
import CustomNamingStrategy from '../../infra/typeorm/namingStrategy/snakeCaseStrategy';
import * as models from '../../infra/typeorm/entities';

const options: ConnectionOptions = {
  type: 'mysql',
  name: 'default',
  host: appConfig.db.typeormHost,
  port: 3306,
  username: appConfig.db.username,
  password: appConfig.db.password,
  database: appConfig.db.database,
  synchronize: false,
  entities: [...Object.values(models)],
  logging: process.env.NODE_ENV === 'development' ? true : false,
  // logging: true,
  namingStrategy: new CustomNamingStrategy(),
  timezone: 'Z',
}

export { options }