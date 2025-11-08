
'use client';

import Link from 'next/link';
import { Rocket, Users, Gem } from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Launch & Level Up",
    description: "From launchpads and funding programs to exclusive workshops, we’ve got the resources to fuel your startup’s takeoff."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Mentor Matchmaker",
    description: "Connect with industry rockstars and seasoned advisors who can guide you and unlock your venture’s true potential."
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Dream Team Dynasty",
    description: "Network with fellow founders, find strategic partners, and build the all-star team to take your startup to the next level."
  }
];

export default function JoinNetwork() {
  return (
    <section id="join-network" className="py-16 md:py-24 bg-background animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Join PIERC Startup Network</h2>
          <p className="mt-4 text-muted-foreground">
            Our amazing community of innovators & entrepreneurs will help you:
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map(benefit => (
            <div key={benefit.title} className="text-center p-6 rounded-lg bg-card border transform hover:scale-105 transition-transform duration-300">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="https://chat.whatsapp.com/GQxwSe9ADU89TK7YDhzjfx" target='_blank' rel='noopener noreferrer'>
                    Join the Network
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
