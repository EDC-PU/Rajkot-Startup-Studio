
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
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
        isActive ? "text-primary" : "text-foreground"
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
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/RSS%20BLACK.png?alt=media&token=48d4da9f-1543-4c71-90c8-18fea38211a1"
            alt="Rajkot Startup Studio Logo"
            width={180}
            height={40}
            className='object-contain'
          />
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center cursor-pointer text-sm font-medium text-foreground transition-colors hover:text-primary outline-none">
              Programs <ChevronDown size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="https://www.pierc.org/incubation-program" target="_blank" rel="noopener noreferrer">
                    Incubation Program
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://www.pierc.org/growthpad-program" target="_blank" rel="noopener noreferrer">
                    Growth Pad Program
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="https://youtube.com/playlist?list=PLOKNrldi7ClhJNZHbwbB7IZFRXMjD5Z_3&si=_IHihs2NGbHxkbef" label="Startup School" target="_blank"/>
          <NavLink href="https://www.pierc.org/Newsletter" label="Newsletter" target="_blank"/>
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-4">
            <Link href="https://pierc.org" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
              <Image 
                  src="https://vadodarastartupstudio.com/PIERC.svg"
                  alt="PIERC Logo"
                  width={200}
                  height={80}
                  className='object-contain'
              />
            </Link>
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
                        <Image 
                            src="https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/RSS%20BLACK.png?alt=media&token=48d4da9f-1543-4c71-90c8-18fea38211a1"
                            alt="Rajkot Startup Studio Logo"
                            width={150}
                            height={33}
                            className='object-contain'
                        />
                    </Link>
                    <nav className="grid gap-4">
                        
                        <div className="grid gap-2">
                            <p className="font-medium">Programs</p>
                            <Link href="https://www.pierc.org/incubation-program" target="_blank" rel="noopener noreferrer" className="pl-4 text-sm text-muted-foreground hover:text-primary" onClick={() => setSheetOpen(false)}>
                                Incubation Program
                            </Link>
                            <Link href="https://www.pierc.org/growthpad-program" target="_blank" rel="noopener noreferrer" className="pl-4 text-sm text-muted-foreground hover:text-primary" onClick={() => setSheetOpen(false)}>
                                Growth Pad Program
                            </Link>
                        </div>
                        <NavLink href="https://youtube.com/playlist?list=PLOKNrldi7ClhJNZHbwbB7IZFRXMjD5Z_3&si=_IHihs2NGbHxkbef" label="Startup School" target="_blank" onClick={() => setSheetOpen(false)} />
                        <NavLink href="https://www.pierc.org/Newsletter" label="Newsletter" target="_blank" onClick={() => setSheetOpen(false)} />
                        <NavLink href="/contact" label="Contact" onClick={() => setSheetOpen(false)} />
                         <div className="mt-4">
                            <Link href="https://pierc.org" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="https://vadodarastartupstudio.com/PIERC.svg"
                                    alt="PIERC Logo"
                                    width={100}
                                    height={40}
                                    className='object-contain'
                                />
                            </Link>
                        </div>
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
