
'use server';

import { z } from 'zod';

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

  try {
    const response = await fetch("https://vssserver.onrender.com/api/send_email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData: validatedFields.data }),
    });

    if (response.ok) {
      return { message: "Form submitted successfully!" };
    } else {
      const errorData = await response.text();
      return { error: `Error submitting form: ${errorData}` };
    }
  } catch (error) {
    return { error: `An unexpected error occurred: ${error instanceof Error ? error.message : 'Unknown error'}` };
  }
}
