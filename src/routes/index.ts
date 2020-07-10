import { Router } from 'express';

import logRequestsMiddleware from '../middlewares/logRequests.middleware';
import professionals from './professionals.routes';

const routes = Router();

routes.use(logRequestsMiddleware);
routes.use('/api/professionals', professionals);

export default routes;