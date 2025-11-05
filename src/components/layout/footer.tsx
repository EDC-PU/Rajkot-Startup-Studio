import Link from 'next/link';
import { Zap, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Vadodara Startup Studio</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            A studio of Parul Innovation &amp; Entrepreneurship Research Center
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/paruluniversity" target="_blank" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/school/parul-university/" target="_blank" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.facebook.com/paruluniversity" target="_blank" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
         <p className="text-sm text-muted-foreground text-center mt-4">
            &copy; {new Date().getFullYear()} Vadodara Startup Studio. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
