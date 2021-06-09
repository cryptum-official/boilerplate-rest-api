import { Sequelize, Model, ModelCtor, DataTypes, Optional } from 'sequelize';

export interface IUser {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

type UserCreationAttributes = Optional<IUser, 'id' | 'createdAt' | 'updatedAt'>;

export interface IUserInstance
  extends Model<IUser, UserCreationAttributes>,
    IUser {}

export const UserFactory = (sequelize: Sequelize): ModelCtor<IUserInstance> => {
  const User = sequelize.define<IUserInstance>(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
    },
    {
      timestamps: true,
    },
  );

  return User;
};
