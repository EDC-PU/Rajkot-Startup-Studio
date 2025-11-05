
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavLink = ({ href, label, onClick, target }: { href: string; label: string; onClick?: () => void, target?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Vadodara Startup Studio</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-none">
              Programs <ChevronDown size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="https://www.pierc.org/growthpad-program" target="_blank" rel="noopener noreferrer">
                    Growth Pad Program
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="https://youtube.com/playlist?list=PLOKNrldi7ClhJNZHbwbB7IZFRXMjD5Z_3&si=_IHihs2NGbHxkbef" label="Startup School" target="_blank"/>
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-4">
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
                        
                        <div className="grid gap-2">
                            <p className="font-medium">Programs</p>
                            <Link href="https://www.pierc.org/growthpad-program" target="_blank" rel="noopener noreferrer" className="pl-4 text-sm text-muted-foreground hover:text-primary" onClick={() => setSheetOpen(false)}>
                                Growth Pad Program
                            </Link>
                        </div>
                        <NavLink href="https://youtube.com/playlist?list=PLOKNrldi7ClhJNZHbwbB7IZFRXMjD5Z_3&si=_IHihs2NGbHxkbef" label="Startup School" target="_blank" onClick={() => setSheetOpen(false)} />
                        <NavLink href="/contact" label="Contact" onClick={() => setSheetOpen(false)} />
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/book-seats">Book Seats</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
