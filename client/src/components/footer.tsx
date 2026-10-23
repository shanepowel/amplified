'use client';

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { Linkedin, Mail } from "lucide-react";
import { SiInstagram, SiYoutube, SiPinterest } from "react-icons/si";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import { Container, Eyebrow, Grid, Stack, Text } from "@/components/system";

const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-[#60266A]/40 bg-[#181F4F] font-sans">
      <Container className="py-12">
        <Grid
          cols="12"
          gap="lg"
          equal={false}
          className="mb-10 border-b border-[#60266A]/30 pb-10 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <Image
              src={amplifiedLogo}
              alt="Amplified"
              sizes="160px"
              className="mb-4 !h-10 !w-auto object-contain brightness-200"
              data-testid="footer-logo"
            />
            <Text variant="small" className="mb-2 text-white/60">
              Built for industries where rigour is not optional.
            </Text>
            <Text variant="small" className="mb-1 text-white/40">
              London, UK
            </Text>
            <a
              href="mailto:hello@amplified.co.uk"
              className="text-sm text-white/40 transition-colors hover:text-[#F85C70]"
            >
              hello@amplified.co.uk
            </a>
          </div>

          <div>
            <Eyebrow className="mb-4">Services</Eyebrow>
            <ul className="space-y-2">
              {[
                { label: "AI Governance", href: "/ai-governance" },
                { label: "AI Implementation", href: "/ai-implementation" },
                { label: "Structured Delivery", href: "/structured-delivery" },
                { label: "Capability Building", href: "/capability" },
                { label: "Autonomous Organisations", href: "/org-design" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white/90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-4">Company</Eyebrow>
            <ul className="space-y-2">
              {[
                { label: "How We Work", href: "/how-we-work" },
                { label: "Our Work", href: "/our-work" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white/90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-4">Who We Work With</Eyebrow>
            <ul className="space-y-2">
              {[
                { label: "For CIOs", href: "/for-cios" },
                { label: "For Delivery Directors", href: "/for-delivery-directors" },
                { label: "For Digital Leads", href: "/for-digital-leads" },
                { label: "Infrastructure", href: "/sectors/infrastructure" },
                { label: "Financial Services", href: "/sectors/financial-services" },
                { label: "Energy & Utilities", href: "/sectors/energy-utilities" },
                { label: "Public Sector", href: "/sectors/public-sector" },
                { label: "Technology & Private Sector", href: "/sectors/technology" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white/90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Grid>

        <Stack direction="row-responsive" gap="md" justify="between" align="center" className="flex-wrap">
          <Text variant="caption" className="text-white/30">
            © 2026 Amplified Ltd · London, UK · Company No. 08589016
          </Text>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Modern Slavery", href: "/modern-slavery" },
              { label: "Press", href: "/press" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/70"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="ml-2 flex items-center gap-3">
              {[
                { href: "https://linkedin.com/company/amplifiedlimited/", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { href: "https://www.instagram.com/amplifiedguide", label: "Instagram", icon: <SiInstagram className="h-4 w-4" /> },
                { href: "https://www.youtube.com/@amplifiedguide", label: "YouTube", icon: <SiYoutube className="h-4 w-4" /> },
                { href: "https://uk.pinterest.com/AmplifiedGuide/", label: "Pinterest", icon: <SiPinterest className="h-4 w-4" /> },
                { href: "mailto:hello@amplified.co.uk", label: "Email", icon: <Mail className="h-4 w-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="text-white/30 transition-colors hover:text-[#F85C70]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </footer>
  );
});

export default Footer;
