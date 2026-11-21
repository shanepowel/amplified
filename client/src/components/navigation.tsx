'use client';

import { useState, memo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { AmpButton, Container } from "@/components/system";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { brand } from "@/lib/brand";

interface NavigationProps {
  onOpenConsultation: () => void;
}

type NavItem = { tag?: string; name: string; desc: string; href: string };
type NavMenu = {
  id: string;
  label: string;
  width: string;
  align: "center" | "right";
  feature?: { eyebrow: string; title: string; desc: string; href: string };
  items: NavItem[];
  footer?: { label: string; value: string; href: string };
};

export const navMenus: NavMenu[] = [
  {
    id: "what",
    label: "What we do",
    width: "w-[520px]",
    align: "center",
    feature: {
      eyebrow: "Three ways to start",
      title: "Sprint · Build · Crew",
      desc: "Two weeks, a few months, or a team on tap.",
      href: "/services",
    },
    items: [
      { tag: "BMK 01", name: "Brand and identity", desc: "Names, logos, voice and visual systems", href: "/services/brand" },
      { tag: "BMK 02", name: "Websites and platforms", desc: "Fast sites your team can run themselves", href: "/services/websites" },
      { tag: "BMK 03", name: "Digital products", desc: "Apps, portals and marketplaces", href: "/services/products" },
      { tag: "BMK 06", name: "Growth and content", desc: "Campaigns, content and tracking", href: "/services/growth" },
      { tag: "BMK 07", name: "Delivery leadership", desc: "Programmes across teams and suppliers", href: "/services/delivery" },
    ],
    footer: { label: "How we work", value: "Sketch → Make → Ship → Grow", href: "/how-we-work" },
  },
  {
    id: "ai",
    label: "AI",
    width: "w-[460px]",
    align: "center",
    feature: {
      eyebrow: "AI Sprint · 2 weeks",
      title: "A working AI use case on your data",
      desc: "With its cost per run, so you know if it's worth scaling.",
      href: "/ai",
    },
    items: [
      { tag: "BMK 04", name: "AI and automation", desc: "Assistants, agents and AI in your product", href: "/ai" },
      { tag: "BMK 05", name: "AI tokenomics", desc: "Know what your AI costs, and make each token count", href: "/ai/tokenomics" },
      { tag: "EN", name: "EmberNest", desc: "Governed AI-assisted software delivery", href: "/ai/embernest" },
    ],
  },
  {
    id: "work",
    label: "Our work",
    width: "w-[320px]",
    align: "center",
    items: [
      { name: "What we've made", desc: "Viralyz, Konduit, FreelanceNearMe", href: "/our-work" },
      { name: "Track record", desc: "Programmes our people have led", href: "/case-studies" },
      { name: "Insights", desc: "Notes from the studio", href: "/insights" },
    ],
  },
  {
    id: "company",
    label: "Company",
    width: "w-[300px]",
    align: "center",
    items: [
      { name: `About ${brand.name}`, desc: "Who we are and how we think", href: "/about" },
      { name: "How we work", desc: "Sketch, make, ship, grow", href: "/how-we-work" },
      { name: "Careers", desc: "Make things with us", href: "/careers" },
      { name: "Contact", desc: "Start a conversation", href: "/contact" },
    ],
  },
  {
    id: "who",
    label: "Who we work with",
    width: "w-[340px]",
    align: "right",
    items: [
      { name: "Founders and start-ups", desc: "Idea to launch without the bloat", href: "/for/founders" },
      { name: "Growing businesses", desc: "Rebuild what's holding you back", href: "/for/scale-ups" },
      { name: "Marketing teams", desc: "More good work, not more headcount", href: "/for/marketing-teams" },
      { name: "CTOs and digital leads", desc: "Ship faster with AI, keep control", href: "/for/ctos" },
    ],
  },
];

const panel = "absolute top-full z-50 overflow-hidden border border-white/10 bg-[#141a44] shadow-2xl shadow-black/40";
const itemCls =
  "group flex items-start gap-3 px-3 py-2.5 transition-colors duration-150 hover:bg-white/[0.05] focus:outline-none focus-visible:bg-white/[0.07]";

function MenuItems({ items, onNavigate, inMenu }: { items: NavItem[]; onNavigate?: () => void; inMenu?: boolean }) {
  return (
    <>
      {items.map((item) => {
        const link = (
        <Link key={item.href + item.name} href={item.href} className={itemCls} onClick={onNavigate}>
          {item.tag && (
            <span className="w-12 flex-shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.08em] text-[#F85C70]">{item.tag}</span>
          )}
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white group-hover:text-[#F85C70]">{item.name}</span>
            <span className="mt-0.5 block text-xs text-white/55">{item.desc}</span>
          </span>
        </Link>
        );
        return inMenu ? (
          <NavigationMenuLink asChild key={item.href + item.name}>
            {link}
          </NavigationMenuLink>
        ) : (
          link
        );
      })}
    </>
  );
}

function Feature({ feature, onNavigate, inMenu }: { feature: NonNullable<NavMenu["feature"]>; onNavigate?: () => void; inMenu?: boolean }) {
  const link = (
    <Link
      href={feature.href}
      onClick={onNavigate}
      className="group block border-b border-white/10 bg-[#181F4F] px-5 py-4 transition-colors hover:bg-[#60266A]/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F85C70]">{feature.eyebrow}</p>
          <p className="text-sm font-semibold text-white">{feature.title}</p>
          <p className="mt-0.5 text-xs text-white/55">{feature.desc}</p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#F85C70] transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
  return inMenu ? <NavigationMenuLink asChild>{link}</NavigationMenuLink> : link;
}

const Navigation = memo(function Navigation(_props: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu("");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 10) setIsVisible(true);
      else if (y > lastScrollY && y > 100) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#181F4F] transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label={`${brand.name}, return to homepage`}
            className="group relative block flex-shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85C70] focus-visible:ring-offset-4 focus-visible:ring-offset-[#181F4F]"
          >
            <span
              className="font-display text-2xl font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 [font-stretch:115%] group-hover:text-[#F85C70]"
              data-testid="logo"
            >
              {brand.name}
              <span className="text-[#F85C70]">.</span>
            </span>
          </Link>

          {/* Desktop: shadcn NavigationMenu (Radix) for keyboard, focus and screen-reader behaviour */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <NavigationMenu viewport={false} value={openMenu} onValueChange={setOpenMenu}>
              <NavigationMenuList className="gap-0 xl:gap-1">
                {navMenus.map((menu) => {
                  const active =
                    menu.items.some((i) => pathname === i.href) || (menu.feature && pathname === menu.feature.href);
                  return (
                    <NavigationMenuItem key={menu.id} value={menu.id}>
                      <NavigationMenuTrigger
                        className={`h-9 rounded-none bg-transparent px-2.5 font-mono text-[12px] uppercase tracking-[0.12em] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent xl:px-3 ${
                          active
                            ? "text-[#F85C70] hover:text-[#F85C70] focus:text-[#F85C70] data-[state=open]:text-[#F85C70]"
                            : "text-white/80 hover:text-white focus:text-white data-[state=open]:text-white"
                        }`}
                        data-testid={`nav-${menu.id}`}
                      >
                        {menu.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className={`!mt-0 !rounded-none !border-white/10 !bg-[#141a44] !p-0 !text-white !shadow-2xl shadow-black/40 ${menu.width} ${
                          menu.align === "right" ? "!left-auto right-0" : "left-1/2 -translate-x-1/2"
                        }`}
                      >
                        <div className="h-[2px] w-full bg-[#F85C70]" aria-hidden />
                        {menu.feature && <Feature feature={menu.feature} inMenu />}
                        <div className="p-2">
                          <MenuItems items={menu.items} inMenu />
                        </div>
                        {menu.footer && (
                          <NavigationMenuLink asChild>
                            <Link
                              href={menu.footer.href}
                              className="flex items-center justify-between border-t border-white/10 px-5 py-3 transition-colors hover:bg-white/[0.04]"
                            >
                              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{menu.footer.label}</span>
                              <span className="text-xs font-semibold text-[#F85C70]">{menu.footer.value}</span>
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <AmpButton
              asChild
              size="sm"
              variant="outlineLight"
              className="!h-9 !border-2 !border-[#F85C70] !px-5 !font-semibold !text-[#F85C70] hover:!bg-[#F85C70] hover:!text-white"
              data-testid="button-get-in-touch"
            >
              <Link href="/contact">{brand.ctaPrimary} →</Link>
            </AmpButton>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="amp-focus-ring rounded text-white/85 hover:bg-white/10 hover:text-white"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  data-testid="button-mobile-menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 border-l border-white/10 bg-[#141a44] p-0 text-white sm:w-96"
                aria-describedby="mobile-nav-desc"
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription id="mobile-nav-desc" className="sr-only">
                  Main navigation for {brand.name}
                </SheetDescription>
                <div className="flex h-full flex-col">
                  <div className="border-b border-white/10 p-6">
                    <span className="font-display text-2xl font-extrabold [font-stretch:115%]">
                      {brand.name}
                      <span className="text-[#F85C70]">.</span>
                    </span>
                  </div>
                  <div className="flex-1 space-y-6 overflow-y-auto p-4">
                    {navMenus.map((menu) => (
                      <div key={menu.id}>
                        <p className="mb-2 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F85C70]">{menu.label}</p>
                        {menu.feature && (
                          <div className="mb-1">
                            <Feature feature={menu.feature} onNavigate={() => setIsOpen(false)} />
                          </div>
                        )}
                        <MenuItems items={menu.items} onNavigate={() => setIsOpen(false)} />
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 p-6">
                    <AmpButton asChild fullWidth size="lg" className="!text-white" data-testid="button-mobile-get-in-touch">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        {brand.ctaPrimary} →
                      </Link>
                    </AmpButton>
                    <p className="mt-3 text-center text-xs text-white/50">No pitch. No deck. Just a 30-minute call.</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
});

export default Navigation;
