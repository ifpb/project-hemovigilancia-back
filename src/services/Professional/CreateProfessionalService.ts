import AppError from '../../errors/AppError';

import ProfessionalsRepository from '../../repositories/ProfessionalsRepository';
import Professional from '../../models/Professional';

interface Request {
  name: string;
  email: string;
  operation: string;
  admin: boolean;
}

interface Professional {
  _id: string;
  name: string;
  email: string;
  operation: string;
  admin: boolean;
}

class CreateProfessionalService {
  public async execute({
    name,
    email,
    operation,
    admin,
  }: Request): Promise<Professional> {
    const data = [name, email, operation, admin];

    const findDataInNull = data.find(
      element => element === null || element === '',
    );

    if (findDataInNull === '' || findDataInNull === null) {
      throw new AppError('You cannot enter empty or null data', 401);
    }

    const findUserInSameEmail = await ProfessionalsRepository.find({
      email,
    }).exec();
    if (findUserInSameEmail.length !== 0) {
      throw new AppError('This email already exists', 401);
    }

    const professional = await ProfessionalsRepository.create({
      name,
      email,
      operation,
      admin,
    });

    return professional;
  }
}

export default CreateProfessionalService;
