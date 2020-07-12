import { Router } from 'express';

import ProfessionalRepository from '../repositories/ProfessionalRepository';
import CreateProfessionalService from '../services/CreateProfessionalService';
// import DeleteProfessionalService from '../services/DeleteProfessionalService';

const professionalsRouter = Router();

professionalsRouter.get('/', (request, response) => {
  const professionalRepository = getCustomRepository(ProfessionalRepository);
  const professionals = professionalRepository.find();

  return response.json(professionals);
});

professionalsRouter.post('/', async (request, response) => {
  try {
    const { name, email, operation } = request.body;

    const createProfessional = new CreateProfessionalService();

    const professional = await createProfessional.execute({ name, email, operation });

    return response.json(professional);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/* professionalsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteProfessional = new DeleteProfessionalService(professionalRepository);

    deleteProfessional.execute(id);

    return response.json({ message: 'Deleted success!' });

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
}); */

professionalsRouter.put('/', (request, response) => response.json({ PUT: true }));

export default professionalsRouter;
