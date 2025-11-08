
'use server';

import { z } from 'zod';
import { sendEmail } from '@/lib/mailer';

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
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
  
  const data = validatedFields.data;
  
  const emailHtml = `
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone || 'N/A'}</li>
        <li><strong>Company:</strong> ${data.company || 'N/A'}</li>
        <li><strong>Message:</strong></li>
    </ul>
    <p>${data.message}</p>
  `;

  try {
    await sendEmail({
        to: 'rathipranav07@gmail.com',
        subject: 'New Message from Rajkot Startup Studio Contact Form',
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nMessage: ${data.message}`,
        html: emailHtml,
    });
    return { message: 'Thank you for your message! We will get back to you soon.' };
  } catch (error) {
    console.error(error);
    return {
      error: 'There was a problem sending your message. Please try again later.',
    };
  }
}
