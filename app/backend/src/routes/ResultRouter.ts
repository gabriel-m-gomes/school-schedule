import { Request, Response, Router } from 'express';
import ResultController from '../controller/ResultController';

const resultController = new ResultController();

const router = Router();

router.get('/', (req: Request, res: Response) => resultController.getAllResults(req, res));

router.post('/', (req: Request, res: Response) => resultController.createNoteController(req, res))

export default router