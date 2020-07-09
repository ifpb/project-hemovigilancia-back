import { Router, request } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hemocentro' });
});

export default routes;