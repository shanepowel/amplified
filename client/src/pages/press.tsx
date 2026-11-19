'use client';

import { Mail, Linkedin, Instagram } from "lucide-react";
import { SiPinterest } from "react-icons/si";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import {
  BreadcrumbBar,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";
import { brand } from "@/lib/brand";

export default function Press() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: brand.social.linkedin,
      icon: Linkedin,
      handle: "bmkrs",
      testId: "link-press-linkedin",
    },
    {
      name: "Instagram",
      href: brand.social.instagram,
      icon: Instagram,
      handle: "@bmkrs.global",
      testId: "link-press-instagram",
    },
  ];

  const companyFacts = [
    ["Legal name", brand.legalName],
    ["Headquarters", brand.location],
    ["Core positioning", brand.description],
    ["Tagline", brand.tagline],
  ];

  const colours = [
    { name: "Deep Navy", hex: "#181F4F", role: "Primary brand colour", swatch: "bg-[#181F4F]" },
    { name: "Coral Red", hex: "#F85C70", role: "Accent and action colour", swatch: "bg-[#F85C70]" },
    { name: "Deep Purple", hex: "#60266A", role: "Secondary accent", swatch: "bg-[#60266A]" },
    { name: "Slate Grey", hex: "#65677B", role: "Body text", swatch: "bg-[#65677B]" },
  ];

  const usageGuidelines = [
    "Use the official logo without modification, cropping, recolouring, or distortion.",
    "Maintain clear space around the logo equivalent to the height of the mark in the wordmark.",
    "Do not place the logo on backgrounds that reduce legibility. Use the reversed (white) version on dark backgrounds.",
    "Use approved brand colours. Do not introduce substitute colours.",
    "Provide attribution when quoting bmkrs materials or spokespeople.",
    "Contact press@bmkrs.com before creating derivative works or using assets in advertising.",
  ];

  return (
    <PageShell>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Press" }]} />

      <PageHero
        eyebrow="Company"
        title={<span data-testid="text-press-title">Press Centre</span>}
        lead="Media resources, company background, and press contact information for journalists and media professionals."
        contentClassName="max-w-[520px]"
      />

      <Section tone="white" padding="lg">
        <Stack gap="2xl">
          <Grid cols="2-lg" gap="xl" equal={false}>
            <Stack gap="md">
              <Eyebrow>About bmkrs</Eyebrow>
              <Text variant="h3">Who we are</Text>
              <Stack gap="md">
                <Text variant="body" tone="muted">
                  bmkrs is a digital product and AI partner for ambitious organisations. We help
                  delivery directors, CIOs, and digital leads ship products and implement AI
                  with the accountability frameworks that make change stick.
                </Text>
                <Text variant="body" tone="muted">
                  We connect strategy, product, design and engineering so ideas ship — and land.
                  Rigour and effective technology adoption are not in tension; we make that the
                  foundation of every engagement.
                </Text>
                <Text variant="body" tone="muted">
                  Our six service lines span AI Governance (BMK 01), AI Implementation (BMK 02),
                  Structured Delivery (BMK 03), Capability Building (BMK 04), Coaching (BMK 05),
                  and Tech Build (BMK 06), supported by two ecosystem offerings: bmkrs Teams
                  (stable, mobilised delivery teams) and bmkrs Store (practitioner learning).
                </Text>
              </Stack>
            </Stack>

            <Stack gap="md">
              <Eyebrow>Press contact</Eyebrow>
              <Text variant="h3">Get in touch</Text>
              <Stack gap="md">
                <Surface variant="mist" padding="md" radius="sm">
                  <Text variant="small" className="mb-1 font-bold">Press enquiries</Text>
                  <a
                    href="mailto:press@bmkrs.com"
                    className="inline-flex items-center gap-2 text-sm text-[#F85C70] transition-colors"
                    data-testid="link-press-email"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    press@bmkrs.com
                  </a>
                  <Text variant="caption" tone="muted" className="mt-2">
                    For urgent media enquiries, include "URGENT" in the subject line. We aim to
                    respond within 4 hours during business hours.
                  </Text>
                </Surface>
                <Surface variant="mist" padding="md" radius="sm">
                  <Text variant="small" className="mb-1 font-bold">General enquiries</Text>
                  <a
                    href="mailto:hello@bmkrs.com"
                    className="inline-flex items-center gap-2 text-sm text-[#F85C70] transition-colors"
                    data-testid="link-general-email"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    hello@bmkrs.com
                  </a>
                  <Text variant="caption" tone="muted" className="mt-2">
                    Response time: within 1 working day.
                  </Text>
                </Surface>
              </Stack>
            </Stack>
          </Grid>

          <Stack gap="lg">
            <Eyebrow>Brand assets</Eyebrow>
            <Text variant="h3">Logo and brand colours</Text>
            <Grid cols="2-lg" gap="lg" equal={false}>
              <Stack gap="md">
                <Text variant="small" tone="muted">Primary logo</Text>
                <Surface variant="mist" padding="lg" radius="sm" className="flex items-center justify-center">
                  <img
                    src={amplifiedLogo.src}
                    alt="bmkrs logo"
                    className="h-20"
                    data-testid="img-press-logo"
                  />
                </Surface>
                <Text variant="caption" className="text-[#9597A5]">
                  To request the full logo package including reversed, monochrome, and symbol-only
                  variants, email press@bmkrs.com.
                </Text>
              </Stack>
              <Stack gap="md">
                <Text variant="small" tone="muted">Brand colours</Text>
                <Stack gap="sm">
                  {colours.map((colour) => (
                    <div key={colour.hex} className="flex items-center gap-4">
                      <div
                        className={`h-10 w-10 flex-shrink-0 rounded border border-[#E5E3EE] ${colour.swatch}`}
                      />
                      <div>
                        <Text variant="small" className="font-semibold">{colour.name}</Text>
                        <Text variant="mono" className="text-[#9597A5]">
                          {colour.hex} &middot; {colour.role}
                        </Text>
                      </div>
                    </div>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Stack>

          <Stack gap="lg">
            <Eyebrow>Company facts</Eyebrow>
            <Text variant="h3">Key information</Text>
            <Grid cols={2} gap="none" equal={false} className="border-l border-t border-[#E5E3EE]">
              {companyFacts.map(([label, value]) => (
                <div key={label} className="border-b border-r border-[#E5E3EE] p-6">
                  <Text variant="caption" className="mb-1 uppercase tracking-[0.08em] text-[#9597A5]">
                    {label}
                  </Text>
                  <Text variant="small">{value}</Text>
                </div>
              ))}
            </Grid>
          </Stack>

          <Stack gap="lg">
            <Eyebrow>Social</Eyebrow>
            <Text variant="h3">Follow bmkrs</Text>
            <Grid cols={3} gap="none" equal={false} className="border-l border-t border-[#E5E3EE] md:grid-cols-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border-b border-r border-[#E5E3EE] p-6 transition-colors hover:bg-[#F9F8FC]"
                  data-testid={link.testId}
                >
                  <Surface variant="mist" padding="sm" radius="sm" className="!flex h-10 w-10 items-center justify-center !p-0">
                    <link.icon className="h-5 w-5 text-[#181F4F]" />
                  </Surface>
                  <div>
                    <Text variant="small" className="font-bold">{link.name}</Text>
                    <Text variant="caption" className="text-[#9597A5]">{link.handle}</Text>
                  </div>
                </a>
              ))}
              <a
                href="https://instagram.com/bmkrs.global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-b border-r border-[#E5E3EE] p-6 transition-colors hover:bg-[#F9F8FC]"
                data-testid="link-press-pinterest"
              >
                <Surface variant="mist" padding="sm" radius="sm" className="!flex h-10 w-10 items-center justify-center !p-0">
                  <SiPinterest className="h-5 w-5 text-[#181F4F]" />
                </Surface>
                <div>
                  <Text variant="small" className="font-bold">Pinterest</Text>
                  <Text variant="caption" className="text-[#9597A5]">bmkrs.global</Text>
                </div>
              </a>
            </Grid>
          </Stack>

          <Stack gap="md">
            <Eyebrow>Usage guidelines</Eyebrow>
            <Text variant="h3">Using our brand assets</Text>
            <Text variant="body" tone="muted">
              We welcome media coverage and are happy to provide assets and information to support
              your story. When using bmkrs brand assets, please observe the following:
            </Text>
            <ul className="space-y-3">
              {usageGuidelines.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F85C70]" />
                  <Text as="span" variant="body" tone="muted">{item}</Text>
                </li>
              ))}
            </ul>
          </Stack>
        </Stack>
      </Section>
    </PageShell>
  );
}
