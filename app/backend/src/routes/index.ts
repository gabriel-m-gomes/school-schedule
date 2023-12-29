import { Router } from 'express';
import ResultRouter from './ResultRouter'; 

const router = Router();

router.use('/funciona', ResultRouter);

export default router;
