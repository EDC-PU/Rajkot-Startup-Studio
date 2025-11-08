
'use server';

import { z } from 'zod';
import { sendEmail } from '@/lib/mailer';

const BookingSchema = z.object({
  typesOfIncorporation: z.string().min(1, 'Type of Incorporation is required.'),
  incorporationEntityName: z.string().min(1, 'Entity Name is required.'),
  gstinNumber: z.string().optional(),
  fullAddress: z.string().optional(),
  startupName: z.string().min(1, 'Startup Name is required.'),
  founderName: z.string().min(1, 'Founder Name is required.'),
  contactNumber: z.string().min(1, 'Contact Number is required.'),
  email: z.string().email('Invalid email address.'),
  dob: z.string().optional(),
  gender: z.string().optional(),
  startupBrief: z.string().optional(),
  stageOfStartup: z.string().min(1, 'Stage of Startup is required.'),
  domain: z.string().min(1, 'Innovation Domain is required.'),
  dpiitCertified: z.string().optional(),
  govtSupport: z.string().optional(),
  PIERCSupport: z.string().optional(),
  teamSize: z.string().optional(),
  coworkingSeats: z.string().optional(),
  coworkingDuration: z.string().optional(),
});

export type BookingState = {
  message?: string;
  error?: string;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function submitBookingForm(prevState: BookingState, formData: FormData): Promise<BookingState> {
  const validatedFields = BookingSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      error: 'Please fix the errors in the form.',
    };
  }

  const data = validatedFields.data;

  const emailHtml = `
    <h1>New Co-working Seat Booking</h1>
    <p>A new booking has been submitted. Here are the details:</p>
    <ul>
        ${Object.entries(data)
          .map(([key, value]) => `<li><strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${value || 'N/A'}</li>`)
          .join('')}
    </ul>
  `;

  try {
    await sendEmail({
      to: 'rathipranav07@gmail.com',
      subject: 'New Co-working Seat Booking Request',
      text: JSON.stringify(data, null, 2),
      html: emailHtml,
    });
    return { message: "Form submitted successfully!" };
  } catch (error) {
    return { error: `There was a problem sending your message. Please try again later.` };
  }
}
