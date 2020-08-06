import { NativeError } from 'mongoose';
import AppError from '../../errors/AppError';

import ProfessionalsRepository from '../../repositories/ProfessionalsRepository';

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

class DeleteProfessionalService {
  public async execute(id: string): Promise<void> {
    const findById = await ProfessionalsRepository.findByIdAndDelete(id).exec(
      (err: NativeError): AppError | undefined => {
        if (err) return new AppError(err.message, 400);
      },
    );

    if (findById === null) {
      throw new AppError('This ID does not exists', 400);
    }
  }
}

export default DeleteProfessionalService;
