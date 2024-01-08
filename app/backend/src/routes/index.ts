import { Router } from 'express';
import ResultRouter from './ResultRouter'; 

const router = Router();

router.use('/', ResultRouter);

export default router;
