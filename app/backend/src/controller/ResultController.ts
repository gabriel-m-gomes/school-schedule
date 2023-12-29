import { Request, Response } from "express";
import ResultService from "../service/ResultService";
import mapStatusHTTP from "../utils/mapStatusHTTP";

class ResultController {
    private service = new ResultService()

    async getAllResults(_req: Request, res: Response){
        const { status, data } = await this.service.getAllResults()
        return res.status(mapStatusHTTP(status)).json(data)
    }
}

export default ResultController