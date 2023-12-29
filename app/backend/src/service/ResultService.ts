import ResultModel from "../models/ResultsModel";
import { ServiceResponse } from "../interfaces/serviceResponse/ServiceResponse";
import { IResult } from "../interfaces/result/IResult";

class ResultService {
  private model = new ResultModel();


  async getAllResults(): Promise<ServiceResponse<IResult[]>> {
    const results = await this.model.getResults();
    return { status: 'SUCCESSFUL', data: results };
  };

  async createNoteService(note: IResult): Promise<ServiceResponse<IResult>>{
    const newNote = await this.model.createNote(note);
    return { status: 'CREATE', data: newNote };
  };

};

export default ResultService