import { Router } from 'express';

import ProfessionalRepository from '../repositories/ProfessionalRepository';
import CreateProfessionalService from '../services/CreateProfessionalService';
import DeleteProfessionalService from '../services/DeleteProfessionalService';

const professionalsRouter = Router();
const professionalRepository = new ProfessionalRepository();


professionalsRouter.get('/', (request, response) => {
  const professionals = professionalRepository.all();

  return response.json(professionals);
});


professionalsRouter.post('/', (request, response) => {
  try { 
    const { name, email, operation } = request.body;

    const createProfessional = new CreateProfessionalService(professionalRepository);

    const professional = createProfessional.execute({ name, email, operation });

    return response.json(professional);
    
  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
});


professionalsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
  
    const deleteProfessional = new DeleteProfessionalService(professionalRepository);
  
    deleteProfessional.execute(id);
  
    return response.json({ message: 'Deleted success!' });

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
});


professionalsRouter.put('/', (request, response) => {
  return response.json({ 'PUT':true })
});

export default professionalsRouter;
