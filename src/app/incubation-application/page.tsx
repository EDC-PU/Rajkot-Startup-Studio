
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full h-12 text-lg font-bold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Submitting...
        </>
      ) : (
        'Submit Application'
      )}
    </Button>
  );
}

export default function IncubationApplicationPage() {
  const [state, formAction] = useActionState(submitApplication, initialState);
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
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Incubation Program <span className="text-gradient">Application</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete the form below to apply for our 6-day offline incubation program in Rajkot.
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-card">
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-2xl font-bold">Application Form</CardTitle>
            <CardDescription>Fields marked with * are required.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-8">
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

              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        {/* Success Message */}
        {state.success && (
          <div className="mt-8 p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-4 animate-in zoom-in-95 duration-500">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" />
            <div>
              <h3 className="font-bold text-green-900 dark:text-green-100">Application Received!</h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-1">{state.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
