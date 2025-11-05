'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Users, Gem, BrainCircuit, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch & Level Up",
    description: "From launchpads and funding programs to exclusive workshops, we’ve got the resources to fuel your startup’s takeoff."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Mentor Matchmaker",
    description: "Connect with industry rockstars and seasoned advisors who can guide you and unlock your venture’s true potential."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Dream Team Dynasty",
    description: "Network with fellow founders, find strategic partners, and build the all-star team to take your startup to the next level."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Stay Ahead of the Curve",
    description: "Get exclusive content and insights to keep you on the cutting edge of startup trends. Become a trendsetter, not a follower!"
  }
];

export default function JoinNetwork() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'network-map');

  return (
    <section id="join-network" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Join PIERC Startup Network</h2>
          <p className="mt-4 text-muted-foreground">
            Our amazing community of innovators & entrepreneurs will help you:
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(benefit => (
            <div key={benefit.title} className="text-center p-6 rounded-lg">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                {mapImage && (
                    <Image 
                        src={mapImage.imageUrl}
                        alt={mapImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={mapImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 <p className="absolute bottom-4 left-4 text-white font-semibold">{mapImage?.description}</p>
            </div>
            <div className="text-center lg:text-left">
                <p className="text-lg text-muted-foreground">
                    Together, let&apos;s turn those ideas into reality!
                </p>
                <h3 className="text-2xl font-bold mt-2">Join the PIERC Startup Network today!</h3>
                <Button asChild size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white">
                    <Link href="https://chat.whatsapp.com/GQxwSe9ADU89TK7YDhzjfx" target='_blank' rel='noopener noreferrer'>
                        <MessageSquare className="mr-2" />
                        Join the Network
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
