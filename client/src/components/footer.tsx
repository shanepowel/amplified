'use client';

import Link from "next/link";
import { memo } from "react";
import { Linkedin, Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Container, Eyebrow, Grid, Stack, Text } from "@/components/system";
import { brand } from "@/lib/brand";

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
            <Link
              href="/"
              className="mb-4 inline-block font-sans text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#F85C70]"
              data-testid="footer-logo"
            >
              {brand.nameDisplay}
            </Link>
            <Text variant="small" className="mb-2 text-white/60">
              {brand.tagline}
            </Text>
            <Text variant="small" className="mb-1 text-white/40">
              {brand.location}
            </Text>
            <a
              href={`mailto:${brand.email}`}
              className="text-sm text-white/40 transition-colors hover:text-[#F85C70]"
            >
              {brand.email}
            </a>
          </div>

          <div>
            <Eyebrow className="mb-4">Services</Eyebrow>
            <ul className="space-y-2">
              {[
                { label: "Brand and identity", href: "/services/brand" },
                { label: "Websites and platforms", href: "/services/websites" },
                { label: "Digital products", href: "/services/products" },
                { label: "AI and automation", href: "/ai" },
                { label: "AI tokenomics", href: "/ai/tokenomics" },
                { label: "EmberNest", href: "/ai/embernest" },
                { label: "Growth and content", href: "/services/growth" },
                { label: "Delivery leadership", href: "/services/delivery" },
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
                { label: "About", href: "/about" },
                { label: "How we work", href: "/how-we-work" },
                { label: "What we've made", href: "/our-work" },
                { label: "Track record", href: "/case-studies" },
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
            <Eyebrow className="mb-4">Who we work with</Eyebrow>
            <ul className="space-y-2">
              {[
                { label: "Founders and start-ups", href: "/for/founders" },
                { label: "Growing businesses", href: "/for/scale-ups" },
                { label: "Marketing teams", href: "/for/marketing-teams" },
                { label: "CTOs and digital leads", href: "/for/ctos" },
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
            © 2026 {brand.legalName} · London, UK
          </Text>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Modern Slavery", href: "/modern-slavery" },
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
                { href: brand.social.linkedin, label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { href: brand.social.instagram, label: "Instagram", icon: <SiInstagram className="h-4 w-4" /> },
                { href: `mailto:${brand.email}`, label: "Email", icon: <Mail className="h-4 w-4" /> },
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
