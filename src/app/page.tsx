import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, BookOpen, Calendar, Trophy, Lightbulb, ArrowRight, Users, TrendingUp, IndianRupee, Briefcase, CalendarDays, Rocket } from 'lucide-react';
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
import { AspectRatio } from "@/components/ui/aspect-ratio"
import GovernorsCarousel from '@/components/about/governors-carousel';


const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

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

const stats = [
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    value: '230+',
    label: 'Startups Incubated',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '50,000+',
    label: 'Students Reached',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    value: '30 Cr+',
    label: 'in Revenue',
  },
  {
    icon: <IndianRupee className="h-10 w-10 text-primary" />,
    value: '10 Cr+',
    label: 'Funds To Support Startup',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    value: '1,400+',
    label: 'Employment Generated',
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-primary" />,
    value: '100+',
    label: 'Annual Networking Events',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover z-0 opacity-10"
                data-ai-hint={heroImage.imageHint}
                priority
            />
        )}
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Welcome to Vadodara Startup Studio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              A studio of Parul Innovation &amp; Entrepreneurship Research Center. We empower entrepreneurs to build the future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/startups">Explore Startups</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Focus</h2>
            <p className="mt-4 text-muted-foreground">
              We provide the tools, community, and support necessary to turn great ideas into thriving businesses.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Button asChild variant="link" className="mt-4 text-primary">
                    <Link href={feature.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Vadodara Startup Studio</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Established by PIERC, Parul University in 2021, we offer resources, guidance, and an acceleration program to aspiring entrepreneurs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Vadodara Startup Studio, established by PIERC, Parul University in 2021, offers resources, guidance, and an acceleration program to aspiring entrepreneurs. With state-of-the-art infrastructure and mentorship, the studio promotes collaboration, innovation, and inclusivity, serving as the management center for other startup studios in the state.
              </p>
               <h3 className="text-2xl font-bold pt-4">PU Startup Studios</h3>
               <p className="text-muted-foreground">
                PIERC is expanding its reach with the opening of new extension branches in Rajkot, Vadodara, Ahmedabad, and Surat. This expansion reflects PIERC's continued commitment to providing businesses with innovative solutions and personalized services while reaching out to new communities in Gujarat. We are proud of PIERC's dedication to empowering businesses with cutting-edge technologies and services that drive growth and success. We invite all entrepreneurs and business owners in these regions to visit our new branches and experience the value that PIERC can bring to their businesses.
               </p>
            </div>
             <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        className="rounded-lg w-full h-full"
                        src="https://www.youtube.com/embed/vHytSZMfEKU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <GovernorsCarousel />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Our vision is to support entrepreneurs and to build a diverse and inclusive community of startups that collaborate and support each other, encouraging growth and innovation irrespective of region or location.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Our organization is committed to supporting entrepreneurs and fostering a diverse and inclusive community of startups. We aim to create an environment where startups from all regions and locations can collaborate, support each other, and thrive. We strive to encourage growth and innovation among startups, regardless of their geographical location, by providing them with the necessary resources, mentorship, and opportunities. Our mission is to empower entrepreneurs and promote entrepreneurship as a driver of economic growth, while promoting diversity and inclusivity in all aspects of our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                      <div className="p-1">
                        <Card className="h-full">
                          <CardContent className="flex flex-col items-center text-center p-6">
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
                            <h3 className="text-xl font-semibold">{startup.name}</h3>
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
      
      <JoinNetwork />

      <section id="contact" className="py-16 md:py-24 bg-card">
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
