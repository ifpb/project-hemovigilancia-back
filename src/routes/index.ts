import { Router } from 'express';

import professionals from './professionals.routes';

const routes = Router();

routes.use('/professionals', professionals);

export default routes;