'use client';

import { useState, memo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ChevronDown, X, ArrowRight, ShoppingBag, Leaf, Globe, TrendingUp } from "lucide-react";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import amplifiedLogoCoral from "@assets/image_1772532881424.png";
import { ThemeToggle } from "@/components/theme-toggle";
import { AmpButton, Container, Eyebrow, Text } from "@/components/system";

interface NavigationProps {
  onOpenConsultation: () => void;
}

const consultingServices = [
  {
    tag: "AMP 01",
    name: "AI Governance",
    desc: "Responsible AI for regulated industries",
    href: "/ai-governance",
  },
  {
    tag: "AMP 02",
    name: "AI Implementation",
    desc: "End-to-end delivery within your governance",
    href: "/ai-implementation",
  },
  {
    tag: "AMP 03",
    name: "Structured Delivery",
    desc: "Agile without the chaos",
    href: "/structured-delivery",
  },
  {
    tag: "AMP 04",
    name: "Capability Building",
    desc: "Build it in, not bolted on",
    href: "/capability",
  },
];

const buildAndCoachServices = [
  {
    tag: "AMP 05",
    name: "Coaching",
    desc: "Executive, team and practitioner coaching",
    href: "/coaching",
  },
  {
    tag: "AMP 06",
    name: "Tech Build",
    desc: "Custom software, platforms and AI systems",
    href: "/transformation",
  },
  {
    tag: "AMP 07",
    name: "Autonomous Organisations",
    desc: "Self-managing, product-led, AI-powered",
    href: "/org-design",
  },
];

const companyLinks = [
  { name: "About Amplified", desc: "Our story, values, and why we exist", href: "/about" },
  { name: "What We Believe", desc: "Five claims about how delivery should work", href: "/what-we-believe" },
  { name: "Our Team", desc: "Meet the partnership", href: "/about/team" },
  { name: "How We Work", desc: "The Amp Model: Assess, Implement, Amplify", href: "/how-we-work" },
  { name: "Careers", desc: "Work with us", href: "/careers" },
  { name: "Insights", desc: "Thinking for delivery-led organisations", href: "/insights" },
];

const dropdownPanel =
  "absolute top-full mt-0 rounded-lg overflow-hidden shadow-xl border border-[#E5E3EE] bg-white";
const dropdownLink =
  "flex items-start gap-3 px-2 py-2.5 rounded transition-colors duration-150 hover:bg-[#F2F0F7]";
const dropdownLinkCol =
  "flex flex-col px-2 py-2.5 rounded transition-colors duration-150 hover:bg-[#F2F0F7]";
const sectionLabel = "font-mono text-xs uppercase tracking-[0.1em] px-2 mb-2 text-[#6B6E81]";
const tagClass = "font-mono text-xs pt-0.5 flex-shrink-0 w-12 text-[#F85C70]";
const itemName = "font-sans text-sm font-semibold mb-0.5 text-[#181F4F]";
const itemDesc = "font-sans text-xs text-[#6B6E81]";

const Navigation = memo(function Navigation({ onOpenConsultation }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [ourWorkOpen, setOurWorkOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [whoWeWorkWithOpen, setWhoWeWorkWithOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkColor = "text-white/85 hover:text-white";

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#181F4F] shadow-sm transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Amplified, return to homepage"
            className="group flex-shrink-0 relative block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85C70] focus-visible:ring-offset-4 focus-visible:ring-offset-[#181F4F] w-[130px] h-[26px] sm:w-[155px] sm:h-[31px] lg:w-[180px] lg:h-[36px]"
          >
            <Image
              src={amplifiedLogoCoral}
              alt="Amplified"
              priority
              sizes="180px"
              className="absolute top-0 left-0 !h-full !w-auto object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              data-testid="logo"
            />
            <Image
              src={amplifiedLogo}
              alt=""
              aria-hidden="true"
              priority
              sizes="180px"
              className="absolute top-0 left-0 !h-full !w-auto object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">

            {/* What We Do dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`amp-focus-ring flex items-center gap-1 font-sans text-sm uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-2 ${linkColor}`}
                data-testid="nav-what-we-do"
              >
                What We Do
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className={`${dropdownPanel} left-1/2 -translate-x-1/2 w-[560px]`}>
                  {/* Featured: Engagements banner */}
                  <Link
                    href="/engagements"
                    className="block px-5 py-4 bg-[#181F4F] border-b border-[#E5E3EE] transition-colors duration-150 hover:bg-[#60266A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85C70] focus-visible:ring-inset focus-visible:bg-[#60266A]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Eyebrow className="mb-1">Engagements · Productised</Eyebrow>
                        <Text variant="small" tone="white" className="mb-0.5 font-semibold">
                          Squad Blueprint · The Forge · Delivery Compass
                        </Text>
                        <Text variant="caption" className="text-white/60">
                          Three named engagements. Scoped to outcome and timed.
                        </Text>
                      </div>
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-[#F85C70]" />
                    </div>
                  </Link>
                  <div className="grid grid-cols-2 gap-0">
                    {/* Consulting column */}
                    <div className="p-4 border-r border-[#E5E3EE]">
                      <p className={sectionLabel}>Consulting</p>
                      {consultingServices.map((item) => (
                        <Link key={item.tag} href={item.href} className={dropdownLink}>
                          <span className={tagClass}>{item.tag}</span>
                          <div>
                            <div className={itemName}>{item.name}</div>
                            <div className={itemDesc}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Build & Coach column */}
                    <div className="p-4">
                      <p className={sectionLabel}>Build &amp; Coach</p>
                      {buildAndCoachServices.map((item) => (
                        <Link key={item.tag} href={item.href} className={dropdownLink}>
                          <span className={tagClass}>{item.tag}</span>
                          <div>
                            <div className={itemName}>{item.name}</div>
                            <div className={itemDesc}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}

                      {/* Methodology badge */}
                      <Link href="/how-we-work">
                        <div className="mt-4 mx-2 p-3 rounded cursor-pointer bg-[#181F4F] transition-colors duration-150 hover:bg-[#60266A]">
                          <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1 text-white/50">
                            Our Methodology
                          </p>
                          <p className="font-sans text-xs font-semibold text-[#F85C70]">
                            Assess → Implement → Amplify
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOurWorkOpen(true)}
              onMouseLeave={() => setOurWorkOpen(false)}
            >
              <button
                className={`amp-focus-ring flex items-center gap-1 font-sans text-sm uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-2 ${linkColor}`}
              >
                Our Work
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${ourWorkOpen ? "rotate-180" : ""}`}
                />
              </button>

              {ourWorkOpen && (
                <div className={`${dropdownPanel} left-1/2 -translate-x-1/2 w-[280px] p-2`}>
                  {[
                    {
                      href: "/case-studies",
                      icon: TrendingUp,
                      name: "Case Studies",
                      desc: "Named client outcomes from regulated-industry engagements",
                    },
                    {
                      href: "/our-work#client-work",
                      icon: Globe,
                      name: "Client Work & Products",
                      desc: "Websites, apps, and digital transformation we have delivered",
                    },
                    {
                      href: "/our-work#amp-store",
                      icon: ShoppingBag,
                      name: "ampStore",
                      desc: "Practitioner learning platform, aligned to every AMP service line",
                    },
                    {
                      href: "/our-work#sustainability",
                      icon: Leaf,
                      name: "Sustainability",
                      desc: "Our commitments to responsible and sustainable practice",
                    },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 px-4 py-3 rounded transition-colors duration-150 hover:bg-[#F2F0F7]"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#F85C70]" />
                      <div>
                        <span className="font-sans text-sm font-semibold block text-[#181F4F]">
                          {item.name}
                        </span>
                        <span className="font-sans text-xs mt-0.5 block text-[#6B6E81]">
                          {item.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Company dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`amp-focus-ring flex items-center gap-1 font-sans text-sm uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-2 ${linkColor}`}
              >
                Company
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {companyOpen && (
                <div className={`${dropdownPanel} left-1/2 -translate-x-1/2 w-[280px] p-2`}>
                  {companyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-3 rounded transition-colors duration-150 hover:bg-[#F2F0F7]"
                    >
                      <span className="font-sans text-sm font-semibold text-[#181F4F]">
                        {item.name}
                      </span>
                      <span className="font-sans text-xs mt-0.5 text-[#6B6E81]">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Work With dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhoWeWorkWithOpen(true)}
              onMouseLeave={() => setWhoWeWorkWithOpen(false)}
            >
              <button
                className={`amp-focus-ring flex items-center gap-1 font-sans text-sm uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-2 ${linkColor}`}
              >
                Who We Work With
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${whoWeWorkWithOpen ? "rotate-180" : ""}`}
                />
              </button>

              {whoWeWorkWithOpen && (
                <div className={`${dropdownPanel} right-0 w-[520px]`}>
                  <div className="grid grid-cols-2 gap-0">
                    {/* By Role */}
                    <div className="p-4 border-r border-[#E5E3EE]">
                      <p className={sectionLabel}>By Role</p>
                      {[
                        { name: "For CIOs", desc: "Technology leadership in regulated organisations", href: "/for-cios" },
                        { name: "For Delivery Directors", desc: "Programme accountability and AI governance", href: "/for-delivery-directors" },
                        { name: "For Digital Leads", desc: "Implementation, tooling, and team capability", href: "/for-digital-leads" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className={dropdownLinkCol}>
                          <span className="font-sans text-sm font-semibold text-[#181F4F]">{item.name}</span>
                          <span className="font-sans text-xs mt-0.5 text-[#6B6E81]">{item.desc}</span>
                        </Link>
                      ))}
                    </div>

                    {/* By Sector */}
                    <div className="p-4">
                      <p className={sectionLabel}>By Sector</p>
                      {[
                        { name: "Infrastructure", desc: "Major programmes and capital delivery", href: "/sectors/infrastructure" },
                        { name: "Financial Services", desc: "FCA, SMCR, and regulated AI", href: "/sectors/financial-services" },
                        { name: "Energy & Utilities", desc: "OFGEM-compliant AI governance", href: "/sectors/energy-utilities" },
                        { name: "Public Sector", desc: "GDS, DDaT and accountable delivery", href: "/sectors/public-sector" },
                        { name: "Technology & Private Sector", desc: "AI governance for scale-ups and commercial enterprises", href: "/sectors/technology" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className={dropdownLinkCol}>
                          <span className="font-sans text-sm font-semibold text-[#181F4F]">{item.name}</span>
                          <span className="font-sans text-xs mt-0.5 text-[#6B6E81]">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />

            <AmpButton
              asChild
              size="sm"
              variant="outlineLight"
              className="!h-9 !border-2 !border-[#F85C70] !px-5 !font-semibold !text-[#F85C70] hover:!bg-[#F85C70] hover:!text-white"
              data-testid="button-get-in-touch"
            >
              <Link href="/contact">Contact →</Link>
            </AmpButton>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded transition-colors amp-focus-ring ${linkColor}`}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  data-testid="button-mobile-menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96 p-0" aria-describedby="mobile-nav-desc">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription id="mobile-nav-desc" className="sr-only">
                  Main navigation for Amplified
                </SheetDescription>
                <div className="flex flex-col h-full bg-white">
                  <div className="flex items-center justify-between p-6 border-b border-[#E5E3EE]">
                    <Image
                      src={amplifiedLogo}
                      alt="Amplified"
                      sizes="120px"
                      className="!h-8 !w-auto object-contain"
                    />
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Featured: Engagements */}
                    <Link
                      href="/engagements"
                      className="block p-4 rounded bg-[#181F4F] transition-colors hover:bg-[#60266A]"
                      onClick={() => setIsOpen(false)}
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1 text-[#F85C70]">
                        Engagements · Productised
                      </p>
                      <p className="font-sans text-sm font-semibold text-white mb-0.5">
                        Squad Blueprint · The Forge · Delivery Compass
                      </p>
                      <p className="font-sans text-xs text-white/60">
                        Three named engagements. Scoped to outcome and timed.
                      </p>
                    </Link>

                    {/* Consulting */}
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2 text-[#6B6E81]">
                        Consulting
                      </p>
                      <div className="space-y-1">
                        {consultingServices.map((item) => (
                          <Link
                            key={item.tag}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-mono text-xs pt-0.5 w-12 flex-shrink-0 text-[#F85C70]">
                              {item.tag}
                            </span>
                            <div>
                              <div className="font-sans text-sm font-semibold text-[#181F4F]">
                                {item.name}
                              </div>
                              <div className="font-sans text-xs text-[#6B6E81]">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Build & Coach */}
                    <div className="border-t border-[#E5E3EE] pt-4">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2 text-[#6B6E81]">
                        Build &amp; Coach
                      </p>
                      <div className="space-y-1">
                        {buildAndCoachServices.map((item) => (
                          <Link
                            key={item.tag}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-mono text-xs pt-0.5 w-12 flex-shrink-0 text-[#F85C70]">
                              {item.tag}
                            </span>
                            <div>
                              <div className="font-sans text-sm font-semibold text-[#181F4F]">
                                {item.name}
                              </div>
                              <div className="font-sans text-xs text-[#6B6E81]">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Our Work */}
                    <div className="border-t border-[#E5E3EE] pt-4">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2 text-[#6B6E81]">
                        Our Work
                      </p>
                      <div className="space-y-1">
                        {[
                          { href: "/case-studies", icon: TrendingUp, name: "Case Studies", desc: "Named client outcomes from the field" },
                          { href: "/our-work#client-work", icon: Globe, name: "Client Work & Products", desc: "Websites, apps, and transformation" },
                          { href: "/our-work#amp-store", icon: ShoppingBag, name: "ampStore", desc: "Practitioner learning platform" },
                          { href: "/our-work#sustainability", icon: Leaf, name: "Sustainability", desc: "Our environmental commitments" },
                        ].map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#F85C70]" />
                            <div>
                              <div className="font-sans text-sm font-semibold text-[#181F4F]">
                                {item.name}
                              </div>
                              <div className="font-sans text-xs text-[#6B6E81]">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Company links */}
                    <div className="border-t border-[#E5E3EE] pt-4">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2 text-[#6B6E81]">
                        Company
                      </p>
                      <div className="space-y-1">
                        {companyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded text-[#181F4F] transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Who We Work With */}
                    <div className="border-t border-[#E5E3EE] pt-4">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2 text-[#6B6E81]">
                        Who We Work With
                      </p>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-3 mb-1 mt-2 text-[#60266A]">
                        By Role
                      </p>
                      <div className="space-y-1 mb-3">
                        {[
                          { name: "For CIOs", href: "/for-cios" },
                          { name: "For Delivery Directors", href: "/for-delivery-directors" },
                          { name: "For Digital Leads", href: "/for-digital-leads" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded text-[#181F4F] transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-3 mb-1 text-[#60266A]">
                        By Sector
                      </p>
                      <div className="space-y-1">
                        {[
                          { name: "Infrastructure", href: "/sectors/infrastructure" },
                          { name: "Financial Services", href: "/sectors/financial-services" },
                          { name: "Energy & Utilities", href: "/sectors/energy-utilities" },
                          { name: "Public Sector", href: "/sectors/public-sector" },
                          { name: "Technology & Private Sector", href: "/sectors/technology" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded text-[#181F4F] transition-colors hover:bg-[#F2F0F7]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Methodology badge */}
                    <Link href="/how-we-work" onClick={() => setIsOpen(false)}>
                      <div className="mx-0 p-4 rounded bg-[#181F4F]">
                        <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1 text-white/50">
                          Our Methodology
                        </p>
                        <p className="font-sans text-sm font-semibold text-[#F85C70]">
                          Assess → Implement → Amplify
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="p-6 border-t border-[#E5E3EE]">
                    <AmpButton
                      asChild
                      fullWidth
                      size="lg"
                      className="!text-white"
                      data-testid="button-mobile-get-in-touch"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Start a Conversation →
                      </Link>
                    </AmpButton>
                    <Text variant="caption" tone="subtle" className="mt-3 text-center">
                      No pitch. No deck. Just a 30-minute call.
                    </Text>
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
