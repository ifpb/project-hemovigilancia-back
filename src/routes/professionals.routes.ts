import { Router } from 'express';

import Professional from '../models/Professional';

const professionalsRouter = Router();

professionalsRouter.get('/', async (request, response) => {
  try {
    const professionals = await Professional.find();

    return response.json(professionals);
  } catch (err) {
    return response.status(400).json({ error: 'Error loading professionals' });
  }
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
  try {
    const professional = await Professional.create(request.body);

    return response.json(professional);
  } catch (err) {
    return response
      .status(400)
      .json({ error: 'Error creating new professional' });
  }
});

professionalsRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, operation } = request.body;

    const professional = await Professional.updateOne(
      { _id: id },
      { $set: { name, email, operation } },
    );

    return response.json(professional);
  } catch (err) {
    return response.status(400).json({ error: 'Error updating professional' });
  }
});

professionalsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    await Professional.deleteOne({ _id: id });

    return response.json({ message: 'Professional deleted success!' });
  } catch (err) {
    return response.status(400).json({ error: 'Error deleting professional' });
  }
});

export default professionalsRouter;
