'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const spaces = [
    { 
      id: "private-cabins",
      title: "Private Cabins",
      features: [
        "Fully furnished for a seamless move-in.",
        "Fully Air conditioned Office.",
        "Big size drawers and lockers.",
        "High-speed Wi-Fi access and LAN connection ports",
        "Attached restroom.",
        "Waiting area for your guests",
        "Visitor meeting space"
      ] 
    },
    { 
      id: "dedicated-desks-ac",
      title: "Dedicated desks (AC)", 
      features: [
         "Personalized workspace with dedicated lockers.",
         "Fully Air conditioning (AC desks).",
         "High-speed Wi-Fi access and LAN ports.",
         "Waiting area for your guests",
         "Visitor meeting space.",
         "Common restroom facilities"
      ] 
    },
    { 
      id: "dedicated-desks-non-ac",
      title: "Dedicated desks (Non- AC)", 
      features: [
        "Personalized workspace with dedicated lockers.",
        "Well-aerated rooms (Non-AC desks).",
        "High-speed Wi-Fi access and LAN ports.",
        "Waiting area for your guests",
        "Visitor meeting space.",
        "Common restroom facilities"
      ] 
    },
    { 
      id: "conference-rooms",
      title: "Conference Rooms", 
      features: [
        "Whiteboards for brainstorming sessions.",
        "Projector screen.",
        "High-speed Wi-Fi",
        "Wireless Microphone and speaker",
        "Fully Air conditioning"
      ] 
    },
    { 
      id: "seminar-hall",
      title: "Seminar Hall", 
      features: [
          "Comfortable seating for a large audience",
          "Air conditioning.",
          "Wireless Microphone and speaker .",
          "Wi-Fi and LAN access",
          "Projector screen.",
          "Soundproof & Echo Proof seminar hall"
      ] 
    }
  ];

export default function AvailableSpaces() {
  return (
    <section id="available-spaces" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Spaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 md:gap-y-32">
          {spaces.map((space) => {
            const image = PlaceHolderImages.find(p => p.id === space.id);
            return (
              <div key={space.id} className="[perspective:1000px] group">
                <div className="relative h-[400px] w-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ease-in-out">
                  {/* Front Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg shadow-lg overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={space.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
                    <ul className="space-y-2">
                      {space.features.map((feature, i) => (
                        <li key={i} className="text-sm list-disc list-inside">
                          {feature.replace("• ", "")}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-center text-lg font-semibold bg-gray-800 text-white py-2 px-4 rounded-full w-fit mx-auto">
                  {space.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-20">
            <Button asChild size="lg" className='bg-accent hover:bg-accent/90 text-accent-foreground'>
                <Link href="/book-seats">
                    Book a Space
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
