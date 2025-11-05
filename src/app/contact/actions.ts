'use server';

import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages).flat()[0];
    return {
      error: firstError || 'Invalid data provided.',
    };
  }
  
  // In a real app, you would process this data (e.g., send an email, save to DB)
  console.log('Form data:', validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.' };
}
