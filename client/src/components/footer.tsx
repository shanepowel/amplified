'use client';

import Link from "next/link";
import { memo } from "react";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiPinterest } from "react-icons/si";
import { Separator } from "@/components/ui/separator";
import { Container, Grid, Stack, Text } from "@/components/system";

const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-[#E0DBD2] bg-[#EFEBE3] font-sans">
      <Container className="py-16 lg:py-20">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Text variant="h2" className="mb-3">
              Let&apos;s talk.
            </Text>
            <Text variant="body" tone="muted">
              Whether you&apos;re starting an AI strategy or untangling a delivery model, we&apos;ll give you a straight answer on where to begin.
            </Text>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 font-sans text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#C75B39] hover:text-[#C75B39]"
            data-testid="footer-link-get-in-touch"
          >
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <Separator className="mb-12 bg-[#E0DBD2]" />

        <Grid
          cols="12"
          gap="lg"
          equal={false}
          className="mb-12 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-4 inline-block font-sans text-lg font-semibold tracking-tight text-[#1A1A1A]"
              data-testid="footer-logo"
            >
              amplified
            </Link>
            <Text variant="small" tone="muted" className="mb-2 max-w-xs">
              A productised digital consultancy for leaders accountable for AI, delivery, and change that has to land.
            </Text>
            <Text variant="small" tone="subtle" className="mb-1">
              London, UK
            </Text>
            <a
              href="mailto:hello@amplified.co.uk"
              className="text-sm text-[#5C584F] transition-colors hover:text-[#C75B39]"
            >
              hello@amplified.co.uk
            </a>
          </div>

          <div>
            <Text variant="eyebrow" tone="subtle" className="mb-4">
              Services
            </Text>
            <ul className="space-y-2">
              {[
                { label: "AI Governance", href: "/ai-governance" },
                { label: "AI Implementation", href: "/ai-implementation" },
                { label: "Structured Delivery", href: "/structured-delivery" },
                { label: "Capability Building", href: "/capability" },
                { label: "Autonomous Organisations", href: "/org-design" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#5C584F] transition-colors hover:text-[#1A1A1A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="eyebrow" tone="subtle" className="mb-4">
              Company
            </Text>
            <ul className="space-y-2">
              {[
                { label: "How We Work", href: "/how-we-work" },
                { label: "Our Work", href: "/our-work" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#5C584F] transition-colors hover:text-[#1A1A1A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="eyebrow" tone="subtle" className="mb-4">
              Who We Work With
            </Text>
            <ul className="space-y-2">
              {[
                { label: "For CIOs", href: "/for-cios" },
                { label: "For Delivery Directors", href: "/for-delivery-directors" },
                { label: "For Digital Leads", href: "/for-digital-leads" },
                { label: "Infrastructure", href: "/sectors/infrastructure" },
                { label: "Financial Services", href: "/sectors/financial-services" },
                { label: "Energy & Utilities", href: "/sectors/energy-utilities" },
                { label: "Public Sector", href: "/sectors/public-sector" },
                { label: "Technology", href: "/sectors/technology" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#5C584F] transition-colors hover:text-[#1A1A1A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Grid>

        <Separator className="mb-8 bg-[#E0DBD2]" />

        <Stack direction="row-responsive" gap="md" justify="between" align="center" className="flex-wrap">
          <Text variant="caption" tone="subtle">
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
                className="text-xs text-[#7A7468] transition-colors hover:text-[#1A1A1A]"
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
                  className="text-[#7A7468] transition-colors hover:text-[#C75B39]"
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
