'use server';

import { generateStartupIdeas } from '@/ai/flows/generate-startup-ideas';
import { z } from 'zod';

const IdeaSchema = z.object({
  areaOfInterest: z.string().min(3, { message: 'Please enter at least 3 characters.' }),
});

export interface IdeaGeneratorState {
  error?: string;
  ideas?: string[];
}

export async function generateIdeasAction(
  prevState: IdeaGeneratorState,
  formData: FormData
): Promise<IdeaGeneratorState> {
  const validatedFields = IdeaSchema.safeParse({
    areaOfInterest: formData.get('areaOfInterest'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.areaOfInterest?.[0],
    };
  }

  try {
    const result = await generateStartupIdeas({ areaOfInterest: validatedFields.data.areaOfInterest });
    if (!result.startupIdeas || result.startupIdeas.length === 0) {
      return { error: 'Could not generate ideas for this topic. Please try another one.' };
    }
    return { ideas: result.startupIdeas };
  } catch (e) {
    console.error(e);
    // This could be a more user-friendly error message
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
