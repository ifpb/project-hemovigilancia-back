import { MongoRepository } from 'typeorm';

import Professional from '../models/Professional';

class ProfessionalRepository extends MongoRepository<Professional> {

  public async findById(id: string): Promise<Professional | null> {
    const findProfessionalInSameId = await this.findOne({ id });

    return findProfessionalInSameId || null;
  }

  public async findByEmail(email: string): Promise<Professional | null> {
    const findProfessionalInSameEmail = await this.findOne({ email });

    return findProfessionalInSameEmail || null;
  }
}

export default ProfessionalRepository;