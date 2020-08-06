import AppError from '../../errors/AppError';

import ProfessionalsRepository from '../../repositories/ProfessionalsRepository';

interface Request {
  id: string;
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

class UpdateProfessionalService {
  public async execute({
    id,
    name,
    email,
    operation,
    admin,
  }: Request): Promise<Professional | null> {
    const data = [id, name, email, operation, admin];

    const findDataInNull = data.find(
      element => element === null || element === '',
    );

    if (findDataInNull === '' || findDataInNull === null) {
      throw new AppError('You cannot enter null data', 401);
    }

    const findUserInSameEmail = await ProfessionalsRepository.find({
      email,
    }).exec();
    if (findUserInSameEmail.length !== 0) {
      throw new AppError('This email already exists', 401);
    }

    const professional = await ProfessionalsRepository.findByIdAndUpdate(id, {
      $set: { name, email, operation, admin },
    }).exec();

    return professional;
  }
}

export default UpdateProfessionalService;
