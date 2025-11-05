'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateIdeasAction, type IdeaGeneratorState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2, Wand2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const initialState: IdeaGeneratorState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Ideas
        </>
      )}
    </Button>
  );
}

export default function IdeaGeneratorPage() {
  const [state, formAction] = useFormState(generateIdeasAction, initialState);
  const bgImage = PlaceHolderImages.find((p) => p.id === 'idea-generator-bg');

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover z-0 opacity-10"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-2xl w-full">
          <Card className="shadow-2xl bg-card/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-3xl md:text-4xl font-extrabold">AI Startup Idea Generator</CardTitle>
              <p className="text-muted-foreground pt-2">Enter an area of interest and let our AI spark your next big venture.</p>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    name="areaOfInterest"
                    placeholder="e.g., 'sustainable energy', 'pet care', 'fintech for Gen Z'"
                    className="flex-grow"
                    required
                  />
                  <SubmitButton />
                </div>
                {state.error && <p className="text-sm font-medium text-destructive">{state.error}</p>}
              </form>

              {state.ideas && state.ideas.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">Your Startup Ideas:</h3>
                  <div className="space-y-3">
                    {state.ideas.map((idea, index) => (
                      <div key={index} className="p-4 border rounded-lg bg-background flex items-start gap-3 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <Wand2 className="h-5 w-5 text-accent mt-1 shrink-0" />
                        <p className="font-medium">{idea}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
