import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/database';
import type { StudentAttributes, StudentCreationAttributes } from '../types/student.types';

export class Student extends Model<StudentAttributes, StudentCreationAttributes> implements StudentAttributes {
  declare id: number;
  declare fullName: string;
  declare age: number;
  declare className: string;
  declare gender: string;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 100 },
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'class',
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'students',
    timestamps: true,
  }
);
