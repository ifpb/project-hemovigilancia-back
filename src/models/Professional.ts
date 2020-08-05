import { Schema, model, Document } from 'mongoose';

interface ProfessionalInterface extends Document {
  name: string;
  email: string;
  operation: string;
  admin: boolean;
}

const ProfessionalSchema = new Schema(
  {
    name: String,
    email: String,
    operation: String,
    admin: Boolean,
  },
  {
    timestamps: true,
  },
);

export default model<ProfessionalInterface>('Professional', ProfessionalSchema);
