import { IResult } from "./IResult"

export interface IResultModel {
    getResults(): Promise<IResult[]>;

    createNote(data: IResult): Promise<IResult>;

    excludeNote(id: IResult['id']): Promise<number>;
};
