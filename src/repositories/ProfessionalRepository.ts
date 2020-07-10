import Professional from '../models/Professional';

interface CreateProfessional {
  name: string;
  email: string;
  operation: string;
}

class ProfessionalRepository {
  private professionals: Professional[];

  constructor() {
    this.professionals = [];
  }

  public all(): Professional[] {
    return this.professionals;
  }

  public findById(id: string): Professional | null {
    const findProfessionalInSameId = this.professionals.find(
      professional => professional.id === id
    )

    return findProfessionalInSameId || null;
  }

  public findByEmail(email: string): Professional | null {
    const findProfessionalInSameEmail = this.professionals.find(
      professional => professional.email === email
    )

    return findProfessionalInSameEmail || null;
  }

  public create({ name, email, operation }: CreateProfessional): Professional {
    const professional = new Professional({ name, email, operation });

    this.professionals.push(professional);

    return professional;
  }

  public delete(id: string): void {
    this.professionals.filter(professional => professional.id !== id);
  }
}

export default ProfessionalRepository;