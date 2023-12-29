import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { Bimestre, Disciplina } from '../../interfaces/result/IResult';


class SequelizeResult extends Model<InferAttributes<SequelizeResult>,
  InferCreationAttributes<SequelizeResult>> {
  declare id: CreationOptional<number>;

  declare bimestre: Bimestre;

  declare disciplina: Disciplina;

  declare nota: number;

  declare criadoEm: CreationOptional<Date>;

  declare atualizadoEm: CreationOptional<Date>;
}

SequelizeResult.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bimestre: {
      type: DataTypes.ENUM(...Object.values(Bimestre)),
      allowNull: false,
    },
    disciplina: {
      type: DataTypes.ENUM(...Object.values(Disciplina)),
      allowNull: false,
    },
  nota: {
    type: DataTypes.FLOAT, 
    allowNull: false
  },
   criadoEm: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  },
  atualizadoEm: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  }
}, {
  sequelize: db,
  modelName: 'Resultado',
  tableName: 'Resultado',
  timestamps: false,
});

export default SequelizeResult;
