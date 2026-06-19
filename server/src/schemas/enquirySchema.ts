import { z } from 'zod';

export const enquirySchema = z.object({
  name: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name must not exceed 100 characters' })
    .regex(/^[a-zA-Z\s.-]+$/, {
      message: 'Name can only contain letters, spaces, hyphens, and periods',
    }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email must not exceed 100 characters' }),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .regex(/^\+?[1-9]\d{9,14}$/, {
      message: 'Phone number must be between 10 to 15 digits, containing only numbers (plus an optional + prefix)',
    }),
});

export type EnquirySchemaType = z.infer<typeof enquirySchema>;
