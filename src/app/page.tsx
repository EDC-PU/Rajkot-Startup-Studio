
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { startups } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AvailableSpaces from '@/components/home/available-spaces';
import JoinNetwork from '@/components/home/join-network';
import Features from '@/components/home/features';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GovernorsCarousel from '@/components/about/governors-carousel';
import Stats from '@/components/home/stats';


const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center bg-card">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover z-0 opacity-5"
                data-ai-hint={heroImage.imageHint}
                priority
            />
        )}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="mx-auto w-fit mb-4 bg-primary/10 p-4 rounded-full">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Rajkot Startup Studio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering Innovators: Crafting, Launching, and Scaling Startups with Expert Guidance and Resources
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/startup-support">Apply For Startup Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/book-seats">Book Seats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            <div className='text-center'>
              <h2 className="text-3xl font-bold">About PIERC</h2>
              <p className="text-muted-foreground text-lg mt-2">Ideation - Innovation - Incubation</p>
            </div>
            <p className="text-muted-foreground text-center max-w-4xl mx-auto">
              Established in 2013, Entrepreneurship Development Cell (EDC) is one of the creative hubs of Parul University formed to support students and aspiring entrepreneurs in their entrepreneurial endeavors. EDC was established with an aim to foster the culture of Research, Innovation and Entrepreneurship in students and faculty members of the university. In 2015, the university registered a Section 8 company, Parul Innovation and Entrepreneurship Research Center (PIERC) as an incubator to formally extend its services and support to start-ups; from Idea Stage to Growth Stage. PIERC comprises a dedicated team of Incubation Managers and staff members that work towards developing the start-up and entrepreneurship ecosystem of the university and region. With the support from PIERC, a large number of entrepreneurs have successfully taken their startups to new heights.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <Features />

      <JoinNetwork />

      <AvailableSpaces />

      <section id="featured-startups" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Startups</h2>
            <p className="mt-4 text-muted-foreground">
              A glimpse into the brilliant companies building and growing with us.
            </p>
          </div>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {startups.map((startup) => {
                  const logo = PlaceHolderImages.find(p => p.id === startup.logoUrl);
                  return (
                    <CarouselItem key={startup.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full bg-background border">
                          <CardContent className="flex flex-col items-center text-center p-6 h-full">
                            {logo && (
                                <div className="relative w-24 h-24 mb-4">
                                  <Image
                                      src={logo.imageUrl}
                                      alt={`${startup.name} Logo`}
                                      width={96}
                                      height={96}
                                      className="rounded-full object-cover"
                                      data-ai-hint={logo.imageHint}
                                  />
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-foreground">{startup.name}</h3>
                            <p className="mt-2 text-muted-foreground flex-grow">{startup.description}</p>
                            <Button asChild variant="outline" className="mt-4">
                              <Link href={startup.website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </div>
      </section>
      
      <GovernorsCarousel />
      
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a groundbreaking idea or want to learn more about our programs? We'd love to hear from you.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
