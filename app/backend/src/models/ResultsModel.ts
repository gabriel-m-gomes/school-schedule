import SequelizeResult from "../database/models/SequelizeResults";
import { IResult } from "../interfaces/result/IResult";
import { IResultModel } from "../interfaces/result/IResultModel";

class ResultModel implements IResultModel {
    private model = SequelizeResult;

    async getResults(): Promise<IResult[]> {
        const resultsDB = await this.model.findAll();
        return resultsDB;
    };

    async createNote(note: IResult): Promise<IResult> {
        const { bimestre, disciplina, nota } = note;
        const newNote = await this.model.create({ bimestre, disciplina, nota});
        return newNote.dataValues;
    };

    async excludeNote(id: number): Promise<number> {
        const dbData = await this.model.destroy({ where: { id }});        
        return dbData;
    }
};

export default ResultModel;
