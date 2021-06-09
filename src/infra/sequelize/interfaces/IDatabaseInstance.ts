import { Sequelize, ModelCtor } from 'sequelize';

import { IUserInstance } from '../models';

export interface IDatabaseInstance {
  sequelize: Sequelize;
  User: ModelCtor<IUserInstance>;
}
