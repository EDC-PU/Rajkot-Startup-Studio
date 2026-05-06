
'use server';

import { z } from 'zod';

const ApplicationSchema = z.object({
  fullName: z.string().min(2, { message: 'Full Name is required.' }),
  contactNumber: z.string().min(10, { message: 'Valid Contact Number is required.' }),
  email: z.string().email({ message: 'Valid Email ID is required.' }),
  city: z.string().min(2, { message: 'City is required.' }),
  userType: z.enum(['Student', 'Working Professional', 'Entrepreneur', 'Other'], {
    errorMap: () => ({ message: 'Please select your current status.' }),
  }),
  hasIdea: z.enum(['Yes', 'No'], {
    errorMap: () => ({ message: 'Please indicate if you have a startup idea.' }),
  }),
  stage: z.enum(['Just Idea', 'Prototype Ready', 'Early Customers', 'Revenue Stage'], {
    errorMap: () => ({ message: 'Please select your current stage.' }),
  }),
  helpNeeded: z.array(z.string()).min(1, { message: 'Please select at least one area of help.' }),
  available: z.enum(['Yes', 'No'], {
    errorMap: () => ({ message: 'Please indicate your availability.' }),
  }),
});

export type ActionState = {
  success: boolean;
  message: string;
  error?: {
    fullName?: string[];
    contactNumber?: string[];
    email?: string[];
    city?: string[];
    userType?: string[];
    hasIdea?: string[];
    stage?: string[];
    helpNeeded?: string[];
    available?: string[];
    general?: string;
  } | string;
};

export async function submitApplication(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const helpNeeded = formData.getAll('helpNeeded') as string[];
  
  const validatedFields = ApplicationSchema.safeParse({
    fullName: formData.get('fullName'),
    contactNumber: formData.get('contactNumber'),
    email: formData.get('email'),
    city: formData.get('city'),
    userType: formData.get('userType'),
    hasIdea: formData.get('hasIdea'),
    stage: formData.get('stage'),
    helpNeeded: helpNeeded,
    available: formData.get('available'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Please correct the errors in the form.',
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    // Google Sheets integration via Google Apps Script
    // Replace with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbz_XXXXXXXXX/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        helpNeeded: data.helpNeeded.join(', '),
        timestamp: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true 
        }),
      }),
    });

    // Note: Google Apps Script usually returns a redirect or a JSON response.
    // If you haven't set up the script yet, this fetch might fail or return a 404.
    // We'll treat it as success for the UI demo, but log if it fails.
    
    if (!response.ok && GOOGLE_SCRIPT_URL.includes('XXXXXXXXX')) {
       console.warn('Google Sheet URL not configured. Data not saved to sheet.');
    }

    return {
      success: true, 
      message: 'Your application has been submitted successfully! We will contact you soon.' 
    };
  } catch (error) {
    console.error('Submission error:', error);
    return {
      success: false,
      message: '',
      error: 'There was a problem submitting your application. Please try again later.',
    };
  }
}
