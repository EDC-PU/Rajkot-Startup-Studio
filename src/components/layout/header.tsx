'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/startups', label: 'Startups' },
  { href: '/resources', label: 'Resources' },
  { href: '/events', label: 'Events' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/idea-generator', label: 'Idea Generator' },
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Vadodara Startup Studio</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex items-center gap-4 md:ml-auto">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="mr-6 flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <Zap className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold">VSS</span>
                    </Link>
                    <nav className="grid gap-4">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setSheetOpen(false)} />
                        ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
