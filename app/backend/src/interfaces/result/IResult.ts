export enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO'
}

export enum Disciplina {
  BIOLOGIA = 'Biologia',
  ARTES = 'Artes',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia'
}

export interface IResult {
  id: number;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface IFilterResult {
  id: number;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
  criadoEm: string;
  atualizadoEm: string;
}
