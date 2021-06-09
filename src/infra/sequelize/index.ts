import { Sequelize, Options } from 'sequelize';

import { sequelizeConfig } from '../../app/config/sequelize';
import { IDatabaseInstance } from './interfaces/IDatabaseInstance';
import { UserFactory } from './models';

export const dbInstace = (sequelizeConfig: Options): IDatabaseInstance => {
  const sequelize = new Sequelize(sequelizeConfig);

  const db: IDatabaseInstance = {
    sequelize,
    User: UserFactory(sequelize),
  };

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db.sequelize.models);
    }
  });

  return db;
};

export const db: IDatabaseInstance = dbInstace(sequelizeConfig);
