
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { startups } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search } from 'lucide-react';

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStartups = startups.filter(startup =>
    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Startups</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the diverse and innovative companies in the Rajkot Startup Studio ecosystem.
            </p>
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, industry, or keyword..."
                className="w-full pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStartups.map((startup, index) => {
              const logo = PlaceHolderImages.find((p) => p.id === startup.logoUrl);
              return (
                <div key={startup.id} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${index * 100}ms`}}>
                  <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader className="flex flex-row items-center gap-4 p-6">
                      {logo && (
                        <Image
                          src={logo.imageUrl}
                          alt={`${startup.name} Logo`}
                          width={64}
                          height={64}
                          className="rounded-lg object-cover"
                          data-ai-hint={logo.imageHint}
                        />
                      )}
                      <div>
                        <CardTitle>{startup.name}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{startup.industry}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">{startup.description}</p>
                      <Button asChild variant="outline" className="mt-4 w-full">
                        <Link href={startup.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground">No startups found for &quot;{searchTerm}&quot;.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
