
'use client';

import { useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitBookingForm, type BookingState } from './actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const initialState: BookingState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Booking...
        </>
      ) : (
        'Book Now'
      )}
    </Button>
  );
}

function FormField({ name, label, error, children }: { name: string; label: string; error?: string[]; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            {children}
            {error && <p className="text-sm font-medium text-destructive">{error[0]}</p>}
        </div>
    );
}

export function BookSeatsForm() {
  const [state, formAction] = useActionState(submitBookingForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (state.message) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
      setPhone('');
    }
    if (state.error && !state.errors) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card className="shadow-lg p-6 md:p-8">
      <CardContent className="p-0">
        <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField name="typesOfIncorporation" label="Type of Incorporation *" error={state.errors?.typesOfIncorporation}>
                     <Select name="typesOfIncorporation">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Private Limited">Private Limited</SelectItem>
                            <SelectItem value="LLP">LLP</SelectItem>
                            <SelectItem value="Partnership">Partnership</SelectItem>
                            <SelectItem value="Not Yet Incorporated">Not Yet Incorporated</SelectItem>
                        </SelectContent>
                    </Select>
                 </FormField>

                <FormField name="incorporationEntityName" label="Entity Name (if incorporated)" error={state.errors?.incorporationEntityName}>
                    <Input name="incorporationEntityName" placeholder="Your entity name" />
                </FormField>
                
                <FormField name="gstinNumber" label="Do you have a GSTIN Number?" error={state.errors?.gstinNumber}>
                    <Select name="gstinNumber">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
                
                <FormField name="startupName" label="Name of Startup/Idea *" error={state.errors?.startupName}>
                    <Input name="startupName" placeholder="Your startup name" />
                </FormField>
                
                <FormField name="founderName" label="Founder Name *" error={state.errors?.founderName}>
                    <Input name="founderName" placeholder="Your full name" />
                </FormField>
                
                <FormField name="email" label="Email Address *" error={state.errors?.email}>
                    <Input name="email" type="email" placeholder="you@example.com" />
                </FormField>
            </div>

             <FormField name="contactNumber" label="Contact Number *" error={state.errors?.contactNumber}>
                <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                        name: 'contactNumber'
                    }}
                />
            </FormField>

            <FormField name="fullAddress" label="Full Address of Registered Company" error={state.errors?.fullAddress}>
                <Textarea name="fullAddress" placeholder="Your company's full address" />
            </FormField>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField name="dob" label="Date of Birth" error={state.errors?.dob}>
                    <Input name="dob" type="date" />
                </FormField>
                
                <FormField name="gender" label="Gender" error={state.errors?.gender}>
                     <Select name="gender">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
            </div>

            <FormField name="startupBrief" label="Brief about Startup/Innovation" error={state.errors?.startupBrief}>
                <Textarea name="startupBrief" placeholder="Tell us about your startup..." />
            </FormField>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField name="stageOfStartup" label="Stage of Startup *" error={state.errors?.stageOfStartup}>
                     <Select name="stageOfStartup">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Ideation">Ideation</SelectItem>
                            <SelectItem value="Early">Early</SelectItem>
                            <SelectItem value="Growth">Growth</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField name="domain" label="Select Innovation Domain *" error={state.errors?.domain}>
                     <Select name="domain">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Adtech">Adtech / Advertisement</SelectItem>
                            <SelectItem value="Aerospace">Aerospace & Aviation</SelectItem>
                            <SelectItem value="Agritech">Agriculture / Agritech</SelectItem>
                            <SelectItem value="AI_ML">AI, ML</SelectItem>
                            <SelectItem value="AR_VR_XR_MR">AR, VR, XR, MR</SelectItem>
                            <SelectItem value="Architecture">Architecture</SelectItem>
                            <SelectItem value="Automobiles">Automobiles</SelectItem>
                            <SelectItem value="Big_Data">Big Data</SelectItem>
                            <SelectItem value="Bioscience_Biotech">Bioscience, Biotech</SelectItem>
                            <SelectItem value="Environment_Cleantech_Waste">Environment / Cleantech / Waste Management</SelectItem>
                            <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="Defence">Defence</SelectItem>
                            <SelectItem value="Design_Arts">Design, Arts</SelectItem>
                            <SelectItem value="Disaster_Management_Fire_Safety">Disaster Management, Fire Safety</SelectItem>
                            <SelectItem value="Ecommerce">E-commerce</SelectItem>
                            <SelectItem value="Education_Edtech">Education / Edtech</SelectItem>
                            <SelectItem value="Clean_Energy_Renewable">Clean Energy / Renewable Energy</SelectItem>
                            <SelectItem value="Entertainment">Entertainment</SelectItem>
                            <SelectItem value="Fashion">Fashion</SelectItem>
                            <SelectItem value="Finance_Fintech_Banking">Finance / Fintech / Banking</SelectItem>
                            <SelectItem value="FMCG">FMCG</SelectItem>
                            <SelectItem value="Gaming">Gaming</SelectItem>
                            <SelectItem value="Healthcare_Healthtech">Healthcare / Healthtech</SelectItem>
                            <SelectItem value="Human_Resources_HRtech">Human Resources / HRtech</SelectItem>
                            <SelectItem value="Information_Technology">Information Technology</SelectItem>
                            <SelectItem value="Legal">Legal</SelectItem>
                            <SelectItem value="Logistics_Supply_Chain">Logistics / Supply Chain</SelectItem>
                            <SelectItem value="Media_Communication">Media & Communication</SelectItem>
                            <SelectItem value="Pharmaceuticals">Pharmaceuticals</SelectItem>
                            <SelectItem value="Real_Estate_Construction">Real Estate & Construction</SelectItem>
                            <SelectItem value="Social">Social</SelectItem>
                            <SelectItem value="Textiles">Textiles</SelectItem>
                            <SelectItem value="Toy_Allied">Toy & Allied sectors</SelectItem>
                            <SelectItem value="Travel_Hospitality">Travel & Hospitality</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField name="dpiitCertified" label="Are you DPIIT Certified?" error={state.errors?.dpiitCertified}>
                    <Select name="dpiitCertified">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
                <FormField name="govtSupport" label="Government Support?" error={state.errors?.govtSupport}>
                    <Select name="govtSupport">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
                <FormField name="PIERCSupport" label="Incubated at PIERC?" error={state.errors?.PIERCSupport}>
                    <Select name="PIERCSupport">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <FormField name="teamSize" label="Size of Team" error={state.errors?.teamSize}>
                    <Input name="teamSize" type="number" placeholder="e.g., 5" />
                </FormField>
                <FormField name="coworkingSeats" label="No. of seats required" error={state.errors?.coworkingSeats}>
                    <Input name="coworkingSeats" type="number" placeholder="e.g., 2" />
                </FormField>
                 <FormField name="coworkingDuration" label="Duration for co-working" error={state.errors?.coworkingDuration}>
                    <Select name="coworkingDuration">
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 month">1 Month</SelectItem>
                            <SelectItem value="3 months">3 Months</SelectItem>
                            <SelectItem value="Depends">Depends</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
            </div>
          
            <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
