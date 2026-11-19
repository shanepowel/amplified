'use client';

import { useState, memo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/system";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onOpenConsultation: () => void;
}

const primaryLinks = [
  { name: "services", href: "/services" },
  { name: "work", href: "/our-work" },
  { name: "insights", href: "/insights" },
  { name: "about", href: "/about" },
];

const Navigation = memo(function Navigation({ onOpenConsultation }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-[#E0DBD2]/90 bg-[#F5F2EA]/92 backdrop-blur-md"
          : "border-transparent bg-[#F5F2EA]",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link
          href="/"
          className="font-sans text-lg font-semibold tracking-tight text-[#1A1A1A] transition-opacity hover:opacity-70"
          data-testid="link-nav-logo"
        >
          amplified
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[13px] lowercase tracking-wide text-[#5C584F] transition-colors hover:text-[#1A1A1A]",
                  active && "text-[#1A1A1A]",
                )}
                data-testid={`link-nav-${link.name}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button
            type="button"
            onClick={onOpenConsultation}
            className="h-10 rounded-none bg-[#C75B39] px-5 text-sm font-medium text-white hover:bg-[#A8482C]"
            data-testid="button-nav-talk"
          >
            Talk to us
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none text-[#1A1A1A] md:hidden"
              aria-label="Open menu"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l-[#E0DBD2] bg-[#F5F2EA] sm:max-w-sm"
          >
            <SheetTitle className="font-sans text-lg font-semibold tracking-tight">
              amplified
            </SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation
            </SheetDescription>
            <Separator className="my-6 bg-[#E0DBD2]" />
            <div className="flex flex-col gap-1">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 font-display text-3xl text-[#1A1A1A] transition-colors hover:text-[#C75B39]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Separator className="my-6 bg-[#E0DBD2]" />
            <Button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="h-12 w-full rounded-none bg-[#C75B39] text-base font-medium text-white hover:bg-[#A8482C]"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
});

export default Navigation;
