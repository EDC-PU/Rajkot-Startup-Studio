
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { resources } from '@/lib/data';
import Link from 'next/link';
import { FileText, DraftingCompass, Book, Wrench, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder Resource Library',
  description: 'A curated collection of essential resources for startup founders. Access business plan templates, fundraising guides, marketing strategies, and product development tools.',
  openGraph: {
    title: 'Resource Library for Founders | Rajkot Startup Studio',
    description: 'Essential guides, templates, and tools to help you build and grow your startup.',
  },
  twitter: {
    title: 'Resource Library for Founders | Rajkot Startup Studio',
    description: 'Essential guides, templates, and tools to help you build and grow your startup.',
  },
  alternates: {
    canonical: '/resources',
  }
};

const resourceCategories = resources.reduce((acc, resource) => {
  if (!acc[resource.category]) {
    acc[resource.category] = [];
  }
  acc[resource.category].push(resource);
  return acc;
}, {} as Record<string, typeof resources>);

const typeIcons = {
  Article: <FileText className="h-5 w-5" />,
  Template: <DraftingCompass className="h-5 w-5" />,
  Guide: <Book className="h-5 w-5" />,
  Tool: <Wrench className="h-5 w-5" />,
};

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Resource Library</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A curated collection of essential resources to help you build and grow your startup.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full" defaultValue={Object.keys(resourceCategories)[0]}>
              {Object.entries(resourceCategories).map(([category, items]) => (
                <AccordionItem key={category} value={category} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      {items.map((resource) => (
                        <Link
                          key={resource.id}
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="text-primary">{typeIcons[resource.type]}</div>
                                <h3 className="font-semibold text-foreground">
                                  {resource.title}
                                </h3>
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                               <Badge variant="outline">{resource.type}</Badge>
                               <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
