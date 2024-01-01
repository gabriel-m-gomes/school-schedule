import { Request, Response, Router } from 'express';
import ResultController from '../controller/ResultController';
import ValidateCreateNote from '../middlewares/validateCreateNote';

const resultController = new ResultController();

const router = Router();

router.get('/', (req: Request, res: Response) => resultController.getAllResults(req, res));

router.post('/', ValidateCreateNote.validateBody, (req: Request, res: Response) => resultController.createNoteController(req, res));

router.delete('/:id', (req: Request, res: Response) => resultController.excludeController(req, res));

export default router;