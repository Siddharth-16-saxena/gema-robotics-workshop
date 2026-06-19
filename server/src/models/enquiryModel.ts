import { Schema, model, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name must be at most 100 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number (10-15 digits, optional + prefix)'],
    },
  },
  {
    timestamps: true,
  }
);

// Indexing for performance if queried later
EnquirySchema.index({ email: 1 });
EnquirySchema.index({ createdAt: -1 });

export const Enquiry = model<IEnquiry>('Enquiry', EnquirySchema);
export default Enquiry;
