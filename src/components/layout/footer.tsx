
import Link from 'next/link';
import { Zap, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Image 
                src="https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/RSS%20BLACK.png?alt=media&token=48d4da9f-1543-4c71-90c8-18fea38211a1"
                alt="Rajkot Startup Studio Logo"
                width={180}
                height={40}
                className='object-contain'
              />
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
              <FooterLink href="https://www.vadodarastarupstudio.com">Vadodara Startup Studio</FooterLink>
              <FooterLink href="/">Ahmedabad Startup Studio</FooterLink>
              <FooterLink href="https://www.suratstartupstudio.com">Surat Startup Studio</FooterLink>
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
                <h4 className="font-semibold mb-2 text-foreground">Rajkot Startup Studio</h4>
                <p className="text-sm text-muted-foreground">
                409, The Millenium, Circle, 150 Feet Ring Rd, nr. Nana Mava, Padmi Society, Mavdi, Rajkot, Gujarat 360005
                </p>
            </a>
            <div className="mt-4">
              <h4 className="font-semibold text-foreground">Get in Touch:</h4>
              <div className="text-sm text-muted-foreground">
                  <a href="mailto:rajkotstartupstudio@paruluniversity.ac.in" className="hover:text-primary transition-colors block">
                      Email: rajkotstartupstudio@paruluniversity.ac.in
                  </a>
                  <a href="tel:+919016229329" className="hover:text-primary transition-colors block">
                      Phone: +91 90162 29329
                  </a>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/rajkot_startupstudio/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090969957626" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/rajkot-startup-studio-pierc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
          </div>
        </div>
         <p className="text-sm text-muted-foreground text-center mt-8 border-t pt-6">
            &copy; {new Date().getFullYear()} Rajkot Startup Studio. All rights reserved by Parul University.
          </p>
      </div>
    </footer>
  );
}
