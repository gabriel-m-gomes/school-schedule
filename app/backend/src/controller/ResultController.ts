import { Request, Response } from "express";
import ResultService from "../service/ResultService";
import mapStatusHTTP from "../utils/mapStatusHTTP";
import BimestreFilter from "../utils/filterBimestre";

class ResultController {
  private service = new ResultService();
  private bimestreFilter = new BimestreFilter();


  async getAllResults(_req: Request, res: Response) {
    const { status, data } = await this.service.getAllResults();
    const dataFilter = this.bimestreFilter.filterBimestre(data)
    return res.status(mapStatusHTTP(status)).json(dataFilter);
  };

  async createNoteController(req: Request, res: Response) {
    try {
      const { status, data} = await this.service.createNoteService(req.body);
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error: any ) {
      return res.status(400).json({ message: 'Insira um bimestre válido'})
    }
  };

  async excludeController(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { status, data } = await this.service.excludeNoteService(id);
    return res.status(mapStatusHTTP(status)).json(data);
  };

};

export default ResultController;