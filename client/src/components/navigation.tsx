'use client';

import { useState, memo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ChevronDown, X, ArrowRight, ShoppingBag, Leaf, Heart, Globe, TrendingUp } from "lucide-react";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import amplifiedLogoCoral from "@assets/image_1772532881424.png";
import { ThemeToggle } from "@/components/theme-toggle";

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const navBg = "shadow-sm";
  const linkColor = "text-white/85 hover:text-white";
  const logoFilter = "";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${navBg} ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "#181F4F" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="absolute top-0 left-0 !h-full !w-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              style={{ objectFit: "contain" }}
              data-testid="logo"
            />
            <Image
              src={amplifiedLogo}
              alt=""
              aria-hidden="true"
              priority
              sizes="180px"
              className="absolute top-0 left-0 !h-full !w-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{ objectFit: "contain" }}
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
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[560px] rounded-lg overflow-hidden shadow-xl border"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E5E3EE" }}
                >
                  {/* Featured: Engagements banner */}
                  <Link
                    href="/engagements"
                    className="block px-5 py-4 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85C70] focus-visible:ring-inset"
                    style={{ backgroundColor: "#181F4F", borderBottom: "1px solid #E5E3EE" }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#60266A")}
                    onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#181F4F")}
                    onFocus={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#60266A")}
                    onBlur={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#181F4F")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#F85C70" }}>
                          Engagements · Productised
                        </p>
                        <p className="font-sans text-sm font-semibold text-white mb-0.5">
                          Squad Blueprint · The Forge · Delivery Compass
                        </p>
                        <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                          Three named engagements. Scoped to outcome and timed.
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: "#F85C70" }} />
                    </div>
                  </Link>
                  <div className="grid grid-cols-2 gap-0">
                    {/* Consulting column */}
                    <div className="p-4 border-r" style={{ borderColor: "#E5E3EE" }}>
                      <p
                        className="font-mono text-xs uppercase tracking-[0.1em] px-2 mb-2"
                        style={{ color: "#6B6E81" }}
                      >
                        Consulting
                      </p>
                      {consultingServices.map((item) => (
                        <Link
                          key={item.tag}
                          href={item.href}
                          className="flex items-start gap-3 px-2 py-2.5 rounded transition-colors duration-150 group"
                          onMouseOver={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                          }
                          onMouseOut={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                          }
                        >
                          <span
                            className="font-mono text-xs pt-0.5 flex-shrink-0 w-12"
                            style={{ color: "#F85C70" }}
                          >
                            {item.tag}
                          </span>
                          <div>
                            <div className="font-sans text-sm font-semibold mb-0.5" style={{ color: "#181F4F" }}>
                              {item.name}
                            </div>
                            <div className="font-sans text-xs" style={{ color: "#6B6E81" }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Build & Coach column */}
                    <div className="p-4">
                      <p
                        className="font-mono text-xs uppercase tracking-[0.1em] px-2 mb-2"
                        style={{ color: "#6B6E81" }}
                      >
                        Build &amp; Coach
                      </p>
                      {buildAndCoachServices.map((item) => (
                        <Link
                          key={item.tag}
                          href={item.href}
                          className="flex items-start gap-3 px-2 py-2.5 rounded transition-colors duration-150 group"
                          onMouseOver={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                          }
                          onMouseOut={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                          }
                        >
                          <span
                            className="font-mono text-xs pt-0.5 flex-shrink-0 w-12"
                            style={{ color: "#F85C70" }}
                          >
                            {item.tag}
                          </span>
                          <div>
                            <div className="font-sans text-sm font-semibold mb-0.5" style={{ color: "#181F4F" }}>
                              {item.name}
                            </div>
                            <div className="font-sans text-xs" style={{ color: "#6B6E81" }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}

                      {/* Methodology badge */}
                      <Link href="/how-we-work">
                        <div
                          className="mt-4 mx-2 p-3 rounded cursor-pointer transition-colors duration-150"
                          style={{ backgroundColor: "#181F4F" }}
                          onMouseOver={(e) =>
                            ((e.currentTarget as HTMLElement).style.backgroundColor = "#60266A")
                          }
                          onMouseOut={(e) =>
                            ((e.currentTarget as HTMLElement).style.backgroundColor = "#181F4F")
                          }
                        >
                          <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                            Our Methodology
                          </p>
                          <p className="font-sans text-xs font-semibold" style={{ color: "#F85C70" }}>
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
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[280px] rounded-lg overflow-hidden shadow-xl border p-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E5E3EE" }}
                >
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
                      className="flex items-start gap-3 px-4 py-3 rounded transition-colors duration-150"
                      onMouseOver={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                      }
                      onMouseOut={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                      <div>
                        <span className="font-sans text-sm font-semibold block" style={{ color: "#181F4F" }}>
                          {item.name}
                        </span>
                        <span className="font-sans text-xs mt-0.5 block" style={{ color: "#6B6E81" }}>
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
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[280px] rounded-lg overflow-hidden shadow-xl border p-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E5E3EE" }}
                >
                  {companyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-3 rounded transition-colors duration-150"
                      onMouseOver={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                      }
                      onMouseOut={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                      }
                    >
                      <span className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                        {item.name}
                      </span>
                      <span className="font-sans text-xs mt-0.5" style={{ color: "#6B6E81" }}>
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
                <div
                  className="absolute top-full right-0 mt-0 w-[520px] rounded-lg overflow-hidden shadow-xl border"
                  style={{ backgroundColor: "#ffffff", borderColor: "#E5E3EE" }}
                >
                  <div className="grid grid-cols-2 gap-0">
                    {/* By Role */}
                    <div className="p-4 border-r" style={{ borderColor: "#E5E3EE" }}>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-2 mb-2" style={{ color: "#6B6E81" }}>
                        By Role
                      </p>
                      {[
                        { name: "For CIOs", desc: "Technology leadership in regulated organisations", href: "/for-cios" },
                        { name: "For Delivery Directors", desc: "Programme accountability and AI governance", href: "/for-delivery-directors" },
                        { name: "For Digital Leads", desc: "Implementation, tooling, and team capability", href: "/for-digital-leads" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-2 py-2.5 rounded transition-colors duration-150"
                          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")}
                          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")}
                        >
                          <span className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>{item.name}</span>
                          <span className="font-sans text-xs mt-0.5" style={{ color: "#6B6E81" }}>{item.desc}</span>
                        </Link>
                      ))}
                    </div>

                    {/* By Sector */}
                    <div className="p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-2 mb-2" style={{ color: "#6B6E81" }}>
                        By Sector
                      </p>
                      {[
                        { name: "Infrastructure", desc: "Major programmes and capital delivery", href: "/sectors/infrastructure" },
                        { name: "Financial Services", desc: "FCA, SMCR, and regulated AI", href: "/sectors/financial-services" },
                        { name: "Energy & Utilities", desc: "OFGEM-compliant AI governance", href: "/sectors/energy-utilities" },
                        { name: "Public Sector", desc: "GDS, DDaT and accountable delivery", href: "/sectors/public-sector" },
                        { name: "Technology & Private Sector", desc: "AI governance for scale-ups and commercial enterprises", href: "/sectors/technology" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-2 py-2.5 rounded transition-colors duration-150"
                          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")}
                          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")}
                        >
                          <span className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>{item.name}</span>
                          <span className="font-sans text-xs mt-0.5" style={{ color: "#6B6E81" }}>{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />

            <Link href="/contact">
              <button
                className="amp-focus-ring font-sans text-sm font-semibold px-5 h-9 rounded border-2 transition-all duration-200"
                style={{
                  color: "#F85C70",
                  borderColor: "#F85C70",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.backgroundColor = "#F85C70";
                  btn.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.backgroundColor = "transparent";
                  btn.style.color = "#F85C70";
                }}
                data-testid="button-get-in-touch"
              >
                Contact →
              </button>
            </Link>
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
                <div className="flex flex-col h-full" style={{ backgroundColor: "#ffffff" }}>
                  <div
                    className="flex items-center justify-between p-6 border-b"
                    style={{ borderColor: "#E5E3EE" }}
                  >
                    <Image
                      src={amplifiedLogo}
                      alt="Amplified"
                      sizes="120px"
                      className="!h-8 !w-auto"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Featured: Engagements */}
                    <Link
                      href="/engagements"
                      className="block p-4 rounded transition-colors"
                      style={{ backgroundColor: "#181F4F" }}
                      onClick={() => setIsOpen(false)}
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#F85C70" }}>
                        Engagements · Productised
                      </p>
                      <p className="font-sans text-sm font-semibold text-white mb-0.5">
                        Squad Blueprint · The Forge · Delivery Compass
                      </p>
                      <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Three named engagements. Scoped to outcome and timed.
                      </p>
                    </Link>

                    {/* Consulting */}
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Consulting
                      </p>
                      <div className="space-y-1">
                        {consultingServices.map((item) => (
                          <Link
                            key={item.tag}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded transition-colors"
                            style={{ backgroundColor: "transparent" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                            }
                            onMouseOut={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                            }
                          >
                            <span className="font-mono text-xs pt-0.5 w-12 flex-shrink-0" style={{ color: "#F85C70" }}>
                              {item.tag}
                            </span>
                            <div>
                              <div className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                                {item.name}
                              </div>
                              <div className="font-sans text-xs" style={{ color: "#6B6E81" }}>
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Build & Coach */}
                    <div className="border-t pt-4" style={{ borderColor: "#E5E3EE" }}>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Build &amp; Coach
                      </p>
                      <div className="space-y-1">
                        {buildAndCoachServices.map((item) => (
                          <Link
                            key={item.tag}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded transition-colors"
                            style={{ backgroundColor: "transparent" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                            }
                            onMouseOut={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                            }
                          >
                            <span className="font-mono text-xs pt-0.5 w-12 flex-shrink-0" style={{ color: "#F85C70" }}>
                              {item.tag}
                            </span>
                            <div>
                              <div className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                                {item.name}
                              </div>
                              <div className="font-sans text-xs" style={{ color: "#6B6E81" }}>
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Our Work */}
                    <div className="border-t pt-4" style={{ borderColor: "#E5E3EE" }}>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
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
                            className="flex items-start gap-3 p-3 rounded transition-colors"
                            style={{ backgroundColor: "transparent" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                            }
                            onMouseOut={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                            }
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                            <div>
                              <div className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                                {item.name}
                              </div>
                              <div className="font-sans text-xs" style={{ color: "#6B6E81" }}>
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Company links */}
                    <div className="border-t pt-4" style={{ borderColor: "#E5E3EE" }}>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Company
                      </p>
                      <div className="space-y-1">
                        {companyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded transition-colors"
                            style={{ color: "#181F4F" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")
                            }
                            onMouseOut={(e) =>
                              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                            }
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Who We Work With */}
                    <div className="border-t pt-4" style={{ borderColor: "#E5E3EE" }}>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Who We Work With
                      </p>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-3 mb-1 mt-2" style={{ color: "#60266A" }}>
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
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded transition-colors"
                            style={{ color: "#181F4F" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")}
                            onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] px-3 mb-1" style={{ color: "#60266A" }}>
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
                            className="block px-3 py-2.5 font-sans text-sm font-medium rounded transition-colors"
                            style={{ color: "#181F4F" }}
                            onClick={() => setIsOpen(false)}
                            onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F2F0F7")}
                            onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Methodology badge */}
                    <Link href="/how-we-work" onClick={() => setIsOpen(false)}>
                      <div className="mx-0 p-4 rounded" style={{ backgroundColor: "#181F4F" }}>
                        <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                          Our Methodology
                        </p>
                        <p className="font-sans text-sm font-semibold" style={{ color: "#F85C70" }}>
                          Assess → Implement → Amplify
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="p-6 border-t" style={{ borderColor: "#E5E3EE" }}>
                    <Link href="/contact">
                      <button
                        className="w-full h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                        style={{ backgroundColor: "#F85C70", color: "#ffffff" }}
                        onClick={() => setIsOpen(false)}
                        data-testid="button-mobile-get-in-touch"
                      >
                        Start a Conversation →
                      </button>
                    </Link>
                    <p className="font-sans text-xs text-center mt-3" style={{ color: "#6B6E81" }}>
                      No pitch. No deck. Just a 30-minute call.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navigation;
