import { IResult } from "./IResult"
export interface IResultModel {
    getResults(): Promise<IResult[]>

    createNote(data: IResult): Promise<IResult>
}