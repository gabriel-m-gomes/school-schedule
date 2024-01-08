import { QueryInterface } from 'sequelize';
import { Bimestre, Disciplina } from '../../interfaces/result/IResult';


export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Resultado', [
      {
        bimestre: Bimestre.TERCEIRO,
        disciplina: Disciplina.ARTES,
        nota: 9.0,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
      },
      {
        bimestre: Bimestre.PRIMEIRO,
        disciplina: Disciplina.ARTES,
        nota: 7.0,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
     },
     {
       bimestre: Bimestre.PRIMEIRO,
       disciplina: Disciplina.BIOLOGIA,
       nota: 9.0,
       criadoEm: new Date(),
       atualizadoEm: new Date(),
     },
     {
       bimestre: Bimestre.SEGUNDO,
       disciplina: Disciplina.ARTES,
       nota: 8.0,
       criadoEm: new Date(),
       atualizadoEm: new Date(),
     }
    ], 
   {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Resultado', {});
  },
};

 
