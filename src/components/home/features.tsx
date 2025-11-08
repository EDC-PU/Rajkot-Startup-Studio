
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, BookOpen, Calendar, Trophy, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: 'Startup Directory',
    description: 'Explore the innovative startups growing in our ecosystem.',
    link: '/startups',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Resource Library',
    description: 'Access curated guides, templates, and articles for success.',
    link: '/resources',
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: 'Event Calendar',
    description: 'Join our workshops, networking sessions, and community events.',
    link: '/events',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Success Stories',
    description: 'Get inspired by the journeys of our successful graduates.',
    link: '/success-stories',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
          <p className="mt-4 text-muted-foreground">
            We provide the tools, resources, and community to turn your startup idea into a thriving business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.link} className="group">
              <Card className="h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-xl">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="bg-primary/10 p-3 rounded-full">
                            {feature.icon}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
