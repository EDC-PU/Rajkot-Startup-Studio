
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Support Programs',
  description: 'Find the right support for your startup at Rajkot Startup Studio. We offer Incubation, Growth Pad, and Need-Based support programs for entrepreneurs at every stage.',
  openGraph: {
    title: 'Startup Support Programs | Rajkot Startup Studio',
    description: 'Explore our tailored support programs for idea-stage, growth-stage, and established startups.',
  },
  twitter: {
    title: 'Startup Support Programs | Rajkot Startup Studio',
    description: 'Explore our tailored support programs for idea-stage, growth-stage, and established startups.',
  },
  alternates: {
    canonical: '/startup-support',
  }
};

const supportOptions = [
  {
    title: 'Incubation Program',
    imageUrl: 'https://www.pierc.org/_next/image?url=%2Fassets%2FstartupForm%2Fincubation.png&w=1080&q=75',
    description: 'The PIERC Incubation Program Assists Beginners In The Idea Stage To Kickstart Their Startup Idea. We Provide Support And Guidance To Transform Ideas Into Successful Ventures.',
    buttonText: 'Click Here to Apply!',
    buttonLink: 'https://www.pierc.org/Form/step3?program=Incubation+Program&location=Rajkot+Startup+Studio',
  },
  {
    title: 'Growth Pad Program',
    imageUrl: 'https://www.pierc.org/_next/image?url=%2Fassets%2FstartupForm%2FgrowthPad.png&w=1080&q=75',
    description: 'The Growth Pad Initiative Within The PIERC Incubation Program Is Tailored For Startups In The Product Stage, Ready To Enter The Market. We Offer Targeted Support And Guidance To Accelerate The Growth And Success Of These Ventures.',
    buttonText: 'Learn More!',
    buttonLink: 'https://www.pierc.org/growthpad-program',
  },
  {
    title: 'Need Based Support',
    imageUrl: 'https://www.pierc.org/_next/image?url=%2Fassets%2FstartupForm%2FbasedSupport.png&w=1080&q=75',
    description: 'The Need-Based Support Program Within The PIERC Incubation Program Is Designed Specifically For Startups Already In The Market. We Offer Tailored Assistance To Address Specific Needs And Enhance Their Growth Trajectory.',
    buttonText: 'Click Here to Apply',
    buttonLink: 'https://www.pierc.org/Form/needBased?program=Need+based+Support&location=Rajkot+Startup+Studio',
  },
];

export default function StartupSupportPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">What type of support do you need?</h1>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={option.title} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${index * 150}ms`}}>
                <Card className="flex flex-col text-center items-center p-6 border-0 shadow-none h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative w-64 h-64 mx-auto mb-6">
                      <Image
                        src={option.imageUrl}
                        alt={option.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">{option.title}</h2>
                    <p className="text-muted-foreground text-sm mb-6 px-4 flex-grow">{option.description}</p>
                    <div className="mt-auto">
                      <Button asChild>
                        <Link href={option.buttonLink} target="_blank" rel="noopener noreferrer">
                          {option.buttonText}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
