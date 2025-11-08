
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const feedImages = [
    { id: "insta-1" },
    { id: "insta-2" },
    { id: "insta-3" },
    { id: "insta-4" },
    { id: "insta-5" },
    { id: "insta-6" },
];

export default function InstagramFeed() {
  return (
    <section id="instagram-feed" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Follow Our Journey</h2>
            <p className="mt-4 text-muted-foreground">
                Get a glimpse into the daily life at Rajkot Startup Studio. Follow us on Instagram for the latest events, success stories, and behind-the-scenes moments.
            </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {feedImages.map((feedImage) => {
                const image = PlaceHolderImages.find(p => p.id === feedImage.id);
                return (
                    <div key={feedImage.id} className="relative aspect-square group overflow-hidden">
                         {image && (
                            <Link href="https://www.instagram.com/rajkot_startupstudio/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="h-8 w-8 text-white" />
                                </div>
                            </Link>
                         )}
                    </div>
                )
            })}
        </div>

        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="https://www.instagram.com/rajkot_startupstudio/" target='_blank' rel='noopener noreferrer'>
                    <Instagram className="mr-2 h-5 w-5" /> Follow on Instagram
                </Link>
            </Button>
        </div>

      </div>
    </section>
  )
}
