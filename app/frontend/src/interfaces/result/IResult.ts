export interface IResult {
  [key: string]: Array<{
    id: number;
    bimestre: string;
    disciplina: string;
    nota: number;
    criadoEm: number;
    atualizadoEm: Date;
  }>;
}
