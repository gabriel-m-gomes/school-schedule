import { QueryInterface, DataTypes, Model } from 'sequelize';
import { Bimestre, Disciplina, IResult } from '../../interfaces/result/IResult';

export default {
  up (queryInterface: QueryInterface)  {
    const disciplinasValues = Object.values(Disciplina);
    const bimestresValues = Object.values(Bimestre);

    return queryInterface.createTable<Model<IResult>>('Resultado', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      bimestre: {
        type: DataTypes.ENUM(...bimestresValues),
        allowNull: false,
      },
      disciplina: {
        type: DataTypes.ENUM(...disciplinasValues),
        allowNull: false,
      },
      nota: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      criadoEm: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      atualizadoEm: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down (queryInterface: QueryInterface)  {
    return queryInterface.dropTable('Resultado');
  }
};
