
import Link from 'next/link';
import { Zap } from 'lucide-react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold">Vadodara Startup Studio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A studio of Parul Innovation &amp; Entrepreneurship Research Center.
            </p>
          </div>

          <div className="lg:col-start-2">
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/resources">Founder's Toolkit</FooterLink>
              <FooterLink href="/">Co-working Space</FooterLink>
              <li>
                <Link href="https://chat.whatsapp.com/GQxwSe9ADU89TK7YDhzjfx" target='_blank' rel='noopener noreferrer' className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Join our Whatsapp Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Centers</h4>
            <ul className="space-y-2">
              <FooterLink href="https://www.pierc.org">PIERC University Campus</FooterLink>
              <FooterLink href="/about">Fablab</FooterLink>
              <FooterLink href="/">Vadodara Startup Studio</FooterLink>
              <FooterLink href="/">Ahmedabad Startup Studio</FooterLink>
              <FooterLink href="/">Surat Startup Studio</FooterLink>
              <FooterLink href="/">Rajkot Startup Studio</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Programs</h4>
            <ul className="space-y-2">
                <li>
                    <Link href="https://www.pierc.org/Form?program=Incubation+Program" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Incubation Program
                    </Link>
                </li>
                <li>
                    <Link href="https://www.pierc.org/growthpad-program" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Growthpad Program
                    </Link>
                </li>
            </ul>
          </div>

          <div>
            <a href="https://maps.app.goo.gl/7r2eDgjYcwPR4uJq9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <h4 className="font-semibold mb-2 text-foreground">Vadodara Startup Studio</h4>
                <p className="text-sm text-muted-foreground">
                    Above Diva Hospital, Near Amitnagar Circle, VIP Rd,<br />
                    Karelibagh,Vadodara, Gujarat, India- 390022
                </p>
            </a>
            <div className="mt-4">
              <h4 className="font-semibold text-foreground">Get in Touch:</h4>
              <div className="text-sm text-muted-foreground">
                  <a href="mailto:vss@paruluniversity.ac.in" className="hover:text-primary transition-colors block">
                      Email: vss@paruluniversity.ac.in
                  </a>
                  <a href="tel:+916358915335" className="hover:text-primary transition-colors block">
                      Phone: +91 63589 15335
                  </a>
              </div>
            </div>
          </div>
        </div>
         <p className="text-sm text-muted-foreground text-center mt-8 border-t pt-6">
            &copy; {new Date().getFullYear()} Vadodara Startup Studio. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
