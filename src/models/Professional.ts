import { uuid } from 'uuidv4';

class Professional {
  id: string;

  name: string;

  email: string;

  operation: string;

  constructor({ name, email, operation }: Omit<Professional, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.operation = operation;
  }
}

export default Professional;

