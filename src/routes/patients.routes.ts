import { Router } from 'express';

import Patient from '../models/Patient';

const patientsRouter = Router();

patientsRouter.post('/', async (request, response) => {
  try {
    const professional = await Patient.create(request.body);

    return response.json(professional);
  } catch (err) {
    return response
      .status(400)
      .json({ error: 'Error creating new professional' });
  }
});

export default patientsRouter;
