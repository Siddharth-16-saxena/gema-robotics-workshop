import { z } from 'zod';

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters long' })
    .max(100, { message: 'Name must not exceed 100 characters' })
    .regex(/^[a-zA-Z\s.-]+$/, {
      message: 'Name can only contain letters, spaces, hyphens, and periods',
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email must not exceed 100 characters' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required' })
    .regex(/^\+?[1-9]\d{9,14}$/, {
      message: 'Enter a valid 10-15 digit phone number (with optional + prefix, no spaces)',
    }),
});

export type EnquirySchemaType = z.infer<typeof enquirySchema>;
