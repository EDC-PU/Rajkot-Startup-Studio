import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function EventsPage() {
  const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Upcoming Events</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our community of innovators. Find workshops, talks, and networking opportunities.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-8">
            {sortedEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <Badge variant={new Date(event.date) < new Date() ? 'outline' : 'default'} className="w-fit">
                            {new Date(event.date) < new Date() ? 'Past Event' : 'Upcoming'}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                     <div className="flex items-center gap-2">
                       {event.location === 'Online' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <Button disabled={new Date(event.date) < new Date()}>
                    {new Date(event.date) < new Date() ? 'Event Ended' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
