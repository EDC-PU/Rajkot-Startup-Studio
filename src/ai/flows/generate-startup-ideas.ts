// src/ai/flows/generate-startup-ideas.ts
'use server';

/**
 * @fileOverview Generates startup ideas based on an area of interest.
 *
 * - generateStartupIdeas - A function that generates startup ideas.
 * - GenerateStartupIdeasInput - The input type for the generateStartupIdeas function.
 * - GenerateStartupIdeasOutput - The return type for the generateStartupIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStartupIdeasInputSchema = z.object({
  areaOfInterest: z
    .string()
    .describe('The area of interest for generating startup ideas.'),
});
export type GenerateStartupIdeasInput = z.infer<typeof GenerateStartupIdeasInputSchema>;

const GenerateStartupIdeasOutputSchema = z.object({
  startupIdeas: z
    .array(z.string())
    .describe('An array of startup ideas based on the area of interest.'),
});
export type GenerateStartupIdeasOutput = z.infer<typeof GenerateStartupIdeasOutputSchema>;

export async function generateStartupIdeas(
  input: GenerateStartupIdeasInput
): Promise<GenerateStartupIdeasOutput> {
  return generateStartupIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStartupIdeasPrompt',
  input: {schema: GenerateStartupIdeasInputSchema},
  output: {schema: GenerateStartupIdeasOutputSchema},
  prompt: `You are a startup idea generator. Generate 3 startup ideas based on the following area of interest: {{{areaOfInterest}}}. Return the startup ideas as an array of strings.

Make the ideas creative, innovative and potentially lucrative. Make them short and to the point.  Don't number the ideas or give any preamble or commentary.  Just the raw ideas.

Example output:
{
  "startupIdeas": [
    "AI-powered personalized education platform",
    "Sustainable urban farming solutions",
    "Mental wellness app for remote workers",
  ],
}`,
});

const generateStartupIdeasFlow = ai.defineFlow(
  {
    name: 'generateStartupIdeasFlow',
    inputSchema: GenerateStartupIdeasInputSchema,
    outputSchema: GenerateStartupIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
