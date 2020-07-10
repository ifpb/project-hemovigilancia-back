import Professional from '../models/Professional';
import ProfessionalRepository from '../repositories/ProfessionalRepository';

class DeleteProfessionalService {
  private professionalRepository: ProfessionalRepository;

  constructor(professionalRepository: ProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }
  
  public execute(id: string): boolean {
    const findProfessionalInSameId = this.professionalRepository.findById(id);
    
    if (!findProfessionalInSameId) {
      throw new Error('This ID is not valid');
    }

    const deleteProfessional = this.professionalRepository.delete(id);
     
    if (!deleteProfessional) {
      throw new Error('Não deletado');
    }

    return deleteProfessional;
  }
}

export default DeleteProfessionalService;