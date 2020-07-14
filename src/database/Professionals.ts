import { Schema, model, Document } from 'mongoose';

interface ProfessionalInterface extends Document {
  name: string;
  email: string;
  operation: string;
}

const ProfessionalSchema = new Schema(
  {
    name: String,
    email: String,
    operation: String,
  },
  {
    timestamps: true,
  },
);

export default model<ProfessionalInterface>('Professional', ProfessionalSchema);
