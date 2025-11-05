'use client';

import { useActionState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Loader2, Send } from 'lucide-react';

const initialState = { message: '', error: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="text-center p-6 flex-1">
      <CardContent className="p-0 flex flex-col items-center">
        <div className="text-accent mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="text-muted-foreground text-sm">{children}</div>
      </CardContent>
    </Card>
  );
}


export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    }
    if (state.error) {
        toast({
            title: 'Error',
            description: state.error,
            variant: 'destructive',
        });
    }
  }, [state, toast]);

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                Have a question, a project idea, or just want to say hello? We&apos;d love to hear from you.
                </p>
            </div>

            <div className="mt-12 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <ContactInfoCard
                        icon={<MapPin size={30} />}
                        title="Our Address"
                        >
                        <a
                            href="https://maps.app.goo.gl/1gVj8CTFU1gHHZx66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            PARUL INNOVATION & ENTREPRENEURSHIP RESEARCH CENTRE (PIERC)
                            <br />
                            BBA Building, Parul University P.O.Limda, Ta.Waghodia – 391760 Dist.
                            Vadodara, Gujarat (India)
                        </a>
                    </ContactInfoCard>
                     <ContactInfoCard
                        icon={<Mail size={30} />}
                        title="Email Us"
                        >
                        <a
                            href="mailto:pierc@paruluniversity.ac.in"
                            className="hover:text-primary transition-colors"
                        >
                            pierc@paruluniversity.ac.in
                        </a>
                     </ContactInfoCard>
                </div>

                <div>
                    <Card className="shadow-lg p-6 md:p-8">
                        <CardContent className="p-0">
                            <form ref={formRef} action={formAction} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input id="name" name="name" placeholder="Your Name" required />
                                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                                </div>
                                <Input id="company" name="company" placeholder="Your Company (Optional)" />
                                <Textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                required
                                rows={5}
                                />
                                <SubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
