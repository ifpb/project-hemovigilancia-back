import { Router } from 'express';

import professionalsRouter from './professionals.routes';
import patientsRouter from './patients.routes';

const routes = Router();

routes.use('/api/professionals', professionalsRouter);
routes.use('/api/patients', patientsRouter);

export default routes;
