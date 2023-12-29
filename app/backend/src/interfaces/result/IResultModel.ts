import { IResult } from "./IResult"
export interface IResultModel {
    getResults(): Promise<IResult[]>
}