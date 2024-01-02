import { IResult } from "../interfaces/result/IResult";

export default function filterBimestre(data: any, bimestreNames: string[] = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']): any {
  const filteredData: any = {};

  bimestreNames.forEach((bimestre: string) => {
    filteredData[bimestre.toLowerCase()] = data.filter((item: IResult) => item.bimestre === bimestre);
  });

  return filteredData;
}
