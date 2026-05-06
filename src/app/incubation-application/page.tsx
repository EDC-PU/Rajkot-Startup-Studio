
'use client';

import { useEffect, useRef, useActionState } from 'react';
import { submitApplication } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ActionState } from './actions';

const initialState: ActionState = { message: '', error: undefined, success: false };

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button 
      type="submit" 
      disabled={isPending} 
      className="w-full h-12 text-lg font-bold transition-all"
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Submitting Application...
        </>
      ) : (
        'Submit Application'
      )}
    </Button>
  );
}

export default function IncubationApplicationPage() {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.error && typeof state.error === 'string') {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  const getFieldError = (fieldName: string) => {
    if (state.error && typeof state.error === 'object') {
      const fieldErrors = state.error as Record<string, string[]>;
      return fieldErrors[fieldName]?.[0];
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Incubation Program <span className="text-gradient">Application</span>
          </h1>
          <p className="text-xl font-semibold text-foreground">
            Turn your ideas into action.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apply to join Rajkot Startup Studio’s 6-Day Certificate Program in Entrepreneurship — designed to help you move from idea → execution.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you already have a startup idea or are just getting started, this program will guide you through validation, strategy, and real-world execution with expert mentorship.
          </p>
          <p className="text-md text-muted-foreground/80 pt-4">
            Complete the form below to apply.
          </p>
        </div>

        {state.success ? (
          <Card className="border-0 shadow-2xl bg-card overflow-hidden animate-in fade-in zoom-in duration-500">
            <div className="bg-green-500/10 p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Application Received!</h2>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                {state.message}
              </p>
              <div className="pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="px-8"
                >
                  Submit Another Application
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="border-0 shadow-2xl bg-card">
            <CardHeader className="space-y-1 pb-8">
              <CardTitle className="text-2xl font-bold">Application Form</CardTitle>
              <CardDescription>Fields marked with * are required.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="relative">
                {/* Global loading overlay for better visual feedback */}
                {isPending && (
                  <div className="absolute inset-0 z-50 bg-card/50 backdrop-blur-[1px] flex items-center justify-center rounded-xl transition-all duration-300">
                    <div className="bg-background/80 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3 border animate-in zoom-in-95">
                      <Loader2 className="w-10 h-10 text-primary animate-spin" />
                      <p className="font-semibold text-lg">Processing...</p>
                    </div>
                  </div>
                )}

                <fieldset disabled={isPending} className="space-y-8 transition-all duration-300">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-base">Full Name *</Label>
                        <Input id="fullName" name="fullName" placeholder="Enter your full name" required className="h-11" />
                        {getFieldError('fullName') && <p className="text-xs text-destructive">{getFieldError('fullName')}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-base">Contact Number *</Label>
                        <Input id="contactNumber" name="contactNumber" type="tel" placeholder="Your phone number" required className="h-11" />
                        {getFieldError('contactNumber') && <p className="text-xs text-destructive">{getFieldError('contactNumber')}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">Email ID *</Label>
                        <Input id="email" name="email" type="email" placeholder="example@domain.com" required className="h-11" />
                        {getFieldError('email') && <p className="text-xs text-destructive">{getFieldError('email')}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-base">City *</Label>
                        <Input id="city" name="city" placeholder="Your current city" required className="h-11" />
                        {getFieldError('city') && <p className="text-xs text-destructive">{getFieldError('city')}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="space-y-4">
                    <Label className="text-base">Are you a student or working professional? *</Label>
                    <RadioGroup name="userType" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Student', 'Working Professional', 'Entrepreneur', 'Other'].map((option) => (
                        <div key={option} className="flex items-center space-x-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                          <RadioGroupItem value={option} id={`status-${option}`} />
                          <Label htmlFor={`status-${option}`} className="flex-grow cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {getFieldError('userType') && <p className="text-xs text-destructive">{getFieldError('userType')}</p>}
                  </div>

                  {/* Startup Idea */}
                  <div className="space-y-4">
                    <Label className="text-base">Do you currently have a startup idea? *</Label>
                    <RadioGroup name="hasIdea" className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="idea-yes" />
                        <Label htmlFor="idea-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="idea-no" />
                        <Label htmlFor="idea-no">No</Label>
                      </div>
                    </RadioGroup>
                    {getFieldError('hasIdea') && <p className="text-xs text-destructive">{getFieldError('hasIdea')}</p>}
                  </div>

                  {/* Stage */}
                  <div className="space-y-4">
                    <Label className="text-base">What stage are you at? *</Label>
                    <RadioGroup name="stage" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Just Idea', 'Prototype Ready', 'Early Customers', 'Revenue Stage'].map((option) => (
                        <div key={option} className="flex items-center space-x-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                          <RadioGroupItem value={option} id={`stage-${option}`} />
                          <Label htmlFor={`stage-${option}`} className="flex-grow cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {getFieldError('stage') && <p className="text-xs text-destructive">{getFieldError('stage')}</p>}
                  </div>

                  {/* Help Needed */}
                  <div className="space-y-4">
                    <Label className="text-base">What do you need help with? *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        'Finding a startup idea',
                        'Validation',
                        'Execution',
                        'Funding',
                        'Building a team',
                        'Go-to-market'
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                          <Checkbox id={`help-${item}`} name="helpNeeded" value={item} />
                          <Label htmlFor={`help-${item}`} className="flex-grow cursor-pointer">{item}</Label>
                        </div>
                      ))}
                    </div>
                    {getFieldError('helpNeeded') && <p className="text-xs text-destructive">{getFieldError('helpNeeded')}</p>}
                  </div>

                  {/* Availability */}
                  <div className="space-y-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Label className="text-base font-semibold">Are you available for the full 6-day offline program in Rajkot? *</Label>
                    <RadioGroup name="available" className="flex gap-6 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="avail-yes" />
                        <Label htmlFor="avail-yes" className="font-medium">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="avail-no" />
                        <Label htmlFor="avail-no" className="font-medium">No</Label>
                      </div>
                    </RadioGroup>
                    {getFieldError('available') && <p className="text-xs text-destructive">{getFieldError('available')}</p>}
                  </div>

                  <SubmitButton isPending={isPending} />
                </fieldset>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

