import { IFilterResult } from "../interfaces/result/IResult";

class BimestreFilter {
  private formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  filterBimestre(data: any, bimestreNames: string[] = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']): any {
    const filteredData: any = {};

    bimestreNames.forEach((bimestre: string) => {
      filteredData[bimestre.toLowerCase()] = data
        .filter((item: IFilterResult) => item.bimestre === bimestre)
        .map((item: IFilterResult) => ({
          id: item.id,
          bimestre: item.bimestre,
          disciplina: item.disciplina,
          nota: item.nota,
          criadoEm: this.formatDate(item.criadoEm),
          atualizadoEm: this.formatDate(item.atualizadoEm),
        }));
    });

    return filteredData;
  }
}

export default BimestreFilter;
