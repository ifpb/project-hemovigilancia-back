import Professional from '../models/Professional';
import ProfessionalRepository from '../repositories/ProfessionalRepository';

interface Request {
  name: string;
  email: string;
  operation: string;
}

class CreateProfessionalService {
  private professionalRepository: ProfessionalRepository;

  constructor(professionalRepository: ProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public execute({ name, email, operation }: Request): Professional {
    const findProfessionalInSameEmail = this.professionalRepository.findByEmail(email);

    if (findProfessionalInSameEmail) {
      throw new Error('This email is already registered');
    }

    const professional = this.professionalRepository.create({ name, email, operation }); 

    return professional;
  }
}

export default CreateProfessionalService;