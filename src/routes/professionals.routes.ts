import { Router } from 'express';

const professionalsRouter = Router();

professionalsRouter.post('/', (request, response) => {
  return response.json({ 'POST':true })
});

professionalsRouter.get('/', (request, response) => {
  return response.json({ 'GET':true })
});

professionalsRouter.delete('/', (request, response) => {
  return response.json({ 'DELETE':true })
});

professionalsRouter.put('/', (request, response) => {
  return response.json({ 'PUT':true })
});

export default professionalsRouter;