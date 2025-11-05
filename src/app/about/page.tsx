
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, IndianRupee, Briefcase, CalendarDays, Rocket } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio"

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

export default function AboutPage() {
  return (
    <div className="bg-background">
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
    </div>
  );
}
