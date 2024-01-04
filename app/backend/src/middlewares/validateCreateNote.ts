import { NextFunction, Request, Response } from 'express';
import ResultModel from '../models/ResultsModel';

class ValidateCreateNote {
  static async validateBody(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { bimestre, disciplina, nota } = req.body;
    const model = new ResultModel();
    
    const dbData = await model.getResults();
    const existingNote = dbData.find(
      (data) => data.bimestre === bimestre.toUpperCase() && data.disciplina === disciplina
    );

    if (existingNote) {
      return res.status(400).json({ message: 'Já existe uma nota registrada para esse bimestre e disciplina' });
    }

    if (nota < 0 || nota > 10 || nota === null) return res.status(400).json({ message: 'Nota inválida' });
    

    next();
  }
}



export default ValidateCreateNote;

