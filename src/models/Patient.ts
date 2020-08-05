import { Schema, model, Document } from 'mongoose';

interface PatientInterface extends Document {
  name: string;
  idade: number;
  bloodType: string;
}

const PatientSchema = new Schema(
  {
    name: String,
    idade: Number,
    bloodType: String,
  },
  {
    timestamps: true,
  },
);

export default model<PatientInterface>('Patient', PatientSchema);
