import SequelizeResult from "../database/models/SequelizeResults";
import { IResult } from "../interfaces/result/IResult";
import { IResultModel } from "../interfaces/result/IResultModel";

class ResultModel implements IResultModel {
    private model = SequelizeResult;

    async getResults(): Promise<IResult[]> {
        const resultsDB = await this.model.findAll();
        return resultsDB;
    }
}

export default ResultModel;
