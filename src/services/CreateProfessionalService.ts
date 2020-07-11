import { getCustomRepository } from 'typeorm';

import Professional from '../models/Professional';
import ProfessionalRepository from '../repositories/ProfessionalRepository';

interface Request {
  name: string;
  email: string;
  operation: string;
}

class CreateProfessionalService {
  public async execute({ name, email, operation }: Request): Promise<Professional> {
    
    const professionalRepository = getCustomRepository(ProfessionalRepository);
    const findProfessionalInSameEmail = professionalRepository.findByEmail(email);

    if (findProfessionalInSameEmail) {
      throw new Error('This email is already registered');
    }

    const professional = professionalRepository.create({ name, email, operation }); 
    
    await professionalRepository.save(professional);

    return professional;
  }
}

export default CreateProfessionalService;