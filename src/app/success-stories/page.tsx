
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { successStories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Success Stories',
  description: 'Be inspired by the incredible journeys of startups that began their journey with us at Rajkot Startup Studio. Read about their growth, challenges, and successes.',
  openGraph: {
    title: 'Success Stories | Rajkot Startup Studio',
    description: 'Read inspiring stories from our graduated startups and see what\'s possible.',
  },
  twitter: {
    title: 'Success Stories | Rajkot Startup Studio',
    description: 'Read inspiring stories from our graduated startups and see what\'s possible.',
  },
  alternates: {
    canonical: '/success-stories',
  }
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Success Stories</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Be inspired by the incredible journeys of startups that began their journey with us.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto space-y-12">
            {successStories.map((story, index) => {
              const image = PlaceHolderImages.find((p) => p.id === story.imageUrl);
              return (
                <div key={story.id} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${index * 200}ms`}}>
                  <Card className="overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-auto">
                          {image && (
                              <Image
                                  src={image.imageUrl}
                                  alt={`Image for ${story.startupName}`}
                                  fill
                                  className="object-cover"
                                  data-ai-hint={image.imageHint}
                              />
                          )}
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{story.startupName}</h3>
                        <h2 className="text-2xl lg:text-3xl font-bold mt-2">{story.headline}</h2>
                        <p className="mt-4 text-muted-foreground flex-grow">{story.fullStory}</p>
                        <Button asChild variant="default" className="mt-6 w-fit">
                          <Link href={story.website} target="_blank" rel="noopener noreferrer">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
