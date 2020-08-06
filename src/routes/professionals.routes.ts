import { Router } from 'express';

import Professional from '../models/Professional';

import CreateProfessionalService from '../services/Professional/CreateProfessionalService';
import UpdateProfessionalService from '../services/Professional/UpdateProfessionalService';
import DeleteProfessionalService from '../services/Professional/DeleteProfessionalService';

const professionalsRouter = Router();

professionalsRouter.get('/', async (request, response) => {
  const professionals = await Professional.find();

  return response.json(professionals);
});

professionalsRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const professional = await Professional.findById(id);

    return response.json(professional);
  } catch (err) {
    return response.status(400).json({ error: 'Error loading professional' });
  }
});

professionalsRouter.post('/', async (request, response) => {
  const { name, email, operation, admin } = request.body;

  const createProfessional = new CreateProfessionalService();

  const professional = await createProfessional.execute({
    name,
    email,
    operation,
    admin,
  });

  return response.status(201).json({ professional });
});

professionalsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, operation, admin } = request.body;

  const updateProfessional = new UpdateProfessionalService();

  const professional = await updateProfessional.execute({
    id,
    name,
    email,
    operation,
    admin,
  });

  return response.json(professional);
});

professionalsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteProfessional = new DeleteProfessionalService();

  await deleteProfessional.execute(id);

  return response
    .status(202)
    .json({ message: 'Professional deleted success!' });
});

export default professionalsRouter;
