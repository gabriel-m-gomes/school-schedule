import ResultModel from "../models/ResultsModel";
import { ServiceResponse } from "../interfaces/serviceResponse/ServiceResponse";
import { IResult } from "../interfaces/result/IResult";

class ResultService {
  private model = new ResultModel();


  async getAllResults(): Promise<ServiceResponse<IResult[]>> {
    const results = await this.model.getResults();
    return { status: 'SUCCESSFUL', data: results };
  };

  async createNoteService(note: IResult): Promise<ServiceResponse<IResult>> {
    const newNote = await this.model.createNote(note);
    return { status: 'CREATE', data: newNote };
  };

  async excludeNoteService(id: number): Promise<ServiceResponse<string>> {
    const dbData = await this.model.excludeNote(id);
    if (dbData === 0) return { status: 'NOT_FOUND', data: { message: 'Nota não encontrada'}};
      
    return { status: 'EXCLUDE', data: 'nota excluida com sucesso'};
  };

};

export default ResultService;
