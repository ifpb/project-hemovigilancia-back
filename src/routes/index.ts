import { Router } from 'express';

import professionalsRouter from './professionals.routes';

const routes = Router();

routes.use('/api/professionals', professionalsRouter);

export default routes;
