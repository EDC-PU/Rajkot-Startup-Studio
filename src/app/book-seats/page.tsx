
import { BookSeatsForm } from './form';

export default function BookSeatsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Book Your Seat</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below to book your co-working space at Vadodara Startup Studio.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <BookSeatsForm />
          </div>
        </div>
      </section>
    </div>
  );
}
