'use client';

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-intersection-observer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import strategicThinkingImage from "@assets/50_1760470599806.webp";
import networkImage from "@assets/46_1760470581285.webp";
import aboutHeroImage from "@assets/56_1760470571209.webp";
import modernWorkImage from "@assets/35_1760470608291.webp";
import type { Engagement } from "@/lib/engagements";
import { engagements as fallbackEngagements } from "@/lib/engagements";
import {
  Container,
  Grid,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";

interface HomeProps {
  onOpenConsultation: (serviceType?: string) => void;
  engagements?: Engagement[];
}

const partners = [
  { initial: "A", name: "Operations Partner", role: "Founder & Governance" },
  { initial: "B", name: "Technology Partner", role: "AI & Architecture" },
  { initial: "C", name: "Delivery Partner", role: "Structured Delivery" },
  { initial: "D", name: "Capability Partner", role: "Change & Coaching" },
];

const insightRows = [
  {
    date: "12 Mar 2026",
    title: "The AI Governance Gap in Infrastructure Delivery",
    category: "Governance",
    href: "/insights/ai-governance-gap-infrastructure",
  },
  {
    date: "28 Feb 2026",
    title: "Structured Agile: What It Actually Means for PM-Heavy Industries",
    category: "Delivery",
    href: "/insights/structured-agile-pm-industries",
  },
  {
    date: "14 Feb 2026",
    title: "Before You Implement AI: A Readiness Checklist for Regulated Industries",
    category: "AI",
    href: "/insights/ai-readiness-checklist-regulated-industries",
  },
  {
    date: "02 Feb 2026",
    title: "Building lasting capability inside the engagement",
    category: "Capability",
    href: "/capability",
  },
];

const Home = memo(function Home({ onOpenConsultation, engagements: engagementsProp }: HomeProps) {
  const engagements = engagementsProp ?? fallbackEngagements;
  const featuredEngagement = engagements[0];
  const [heroRef, heroVisible] = useReveal(0.05);
  const [storyRef, storyVisible] = useReveal();
  const [workRef, workVisible] = useReveal();
  const [teamRef, teamVisible] = useReveal();
  const [journalRef, journalVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <PageShell className="bg-[#F5F2EA]">
      {/* HERO — brand, headline, support, CTA, dominant image */}
      <section ref={heroRef} className="relative overflow-hidden">
        <Container className="pb-16 pt-10 lg:pb-24 lg:pt-16">
          <div
            className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <Stack gap="lg" className="lg:col-span-6">
              <Text
                as="p"
                className="font-display text-5xl leading-[1.02] tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-[4.25rem]"
                data-testid="text-home-brand"
              >
                Amplified
              </Text>
              <Text
                variant="h1"
                className="max-w-[18ch] text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]"
                data-testid="text-home-headline"
              >
                Rigour for serious change, in the work and in the room.
              </Text>
              <Text variant="lead" tone="muted" className="max-w-[34rem]">
                We partner with leaders accountable for AI, delivery, and the change that has to land in front of a board.
              </Text>
              <div className="pt-1">
                <Button
                  asChild
                  className="h-12 rounded-none bg-[#C75B39] px-7 text-base font-medium text-white hover:bg-[#A8482C]"
                  data-testid="button-hero-talk-to-us"
                >
                  <Link href="/contact">
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Stack>

            <div
              className="lg:col-span-6"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
              }}
            >
              <AspectRatio ratio={4 / 5} className="overflow-hidden bg-[#EFEBE3]">
                <Image
                  src={strategicThinkingImage}
                  alt="Amplified practitioners at work"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  data-testid="img-home-hero"
                />
              </AspectRatio>
            </div>
          </div>
        </Container>
      </section>

      <Separator className="bg-[#E0DBD2]" />

      {/* OUR STORY */}
      <Section
        ref={storyRef}
        tone="white"
        padding="lg"
        style={{
          opacity: storyVisible ? 1 : 0,
          transform: storyVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Grid cols="2-lg" gap="xl" equal={false} className="items-start">
          <Stack gap="md">
            <Text variant="h2">Our story</Text>
            <Text variant="body" tone="muted">
              Amplified was founded by delivery practitioners who had seen the same pattern repeat across infrastructure programmes, energy organisations, financial services firms, and public sector bodies.
            </Text>
            <Text variant="body" tone="muted">
              Good people, unclear governance, and external consultancies who had never actually operated inside a regulated environment advising on how to run one. We exist to close that gap — specialists who have operated under the same pressure our clients face every day.
            </Text>
            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-0.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#C75B39] hover:text-[#C75B39]"
            >
              Read more about us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Stack>
          <AspectRatio ratio={4 / 3} className="overflow-hidden bg-[#EFEBE3]">
            <Image
              src={aboutHeroImage}
              alt="Amplified partnership collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              data-testid="img-home-story"
            />
          </AspectRatio>
        </Grid>
      </Section>

      <Separator className="bg-[#E0DBD2]" />

      {/* WORK / ENGAGEMENTS — case-study editorial */}
      <Section
        ref={workRef}
        id="how-we-work"
        tone="white"
        padding="lg"
        style={{
          opacity: workVisible ? 1 : 0,
          transform: workVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Stack gap="sm" className="mb-12 max-w-2xl">
          <Text variant="eyebrow" tone="subtle">
            Work / Engagements
          </Text>
          <Text variant="h2">
            Three productised engagements. Named, scoped, and designed to leave something concrete in hand.
          </Text>
        </Stack>

        {featuredEngagement && (
          <div className="mb-16">
            <Text variant="eyebrow" tone="subtle" className="mb-4">
              Featured
            </Text>
            <Link
              href={`/engagements/${featuredEngagement.slug}`}
              className="group block"
              data-testid={`link-featured-engagement-${featuredEngagement.slug}`}
            >
              <Grid cols="2-lg" gap="xl" equal={false} className="items-start">
                <AspectRatio ratio={16 / 10} className="overflow-hidden bg-[#EFEBE3]">
                  <Image
                    src={networkImage}
                    alt={featuredEngagement.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </AspectRatio>
                <Stack gap="md" className="lg:pt-4">
                  <Text variant="h1" className="text-5xl lg:text-6xl">
                    {featuredEngagement.name}
                  </Text>
                  <Text variant="lead" tone="muted">
                    {featuredEngagement.oneLineOutcome || featuredEngagement.outcome}
                  </Text>
                  <Text variant="eyebrow" tone="subtle">
                    {featuredEngagement.duration}
                  </Text>
                  <span className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-[#C75B39] transition-all group-hover:gap-3">
                    View engagement <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Stack>
              </Grid>
            </Link>
          </div>
        )}

        <div className="space-y-0">
          {engagements.map((eng, index) => (
            <div key={eng.slug}>
              {index > 0 && <Separator className="bg-[#E0DBD2]" />}
              <Link
                href={`/engagements/${eng.slug}`}
                className="group grid grid-cols-1 items-baseline gap-3 py-7 md:grid-cols-12 md:gap-6"
                data-testid={`link-engagement-row-${eng.slug}`}
              >
                <Text as="span" variant="eyebrow" tone="subtle" className="md:col-span-2">
                  {eng.duration}
                </Text>
                <Text
                  as="span"
                  variant="h3"
                  className="text-2xl transition-colors group-hover:text-[#C75B39] md:col-span-5"
                >
                  {eng.name}
                </Text>
                <Text as="span" variant="small" tone="muted" className="md:col-span-5" clamp={2}>
                  {eng.oneLineOutcome || eng.outcome}
                </Text>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-0.5 text-sm font-medium transition-colors hover:border-[#C75B39] hover:text-[#C75B39]"
          >
            See case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      <Separator className="bg-[#E0DBD2]" />

      {/* THE TEAM */}
      <Section
        ref={teamRef}
        tone="mist"
        padding="lg"
        style={{
          opacity: teamVisible ? 1 : 0,
          transform: teamVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Stack gap="sm" className="mb-12 max-w-2xl">
          <Text variant="h2">The team</Text>
          <Text variant="body" tone="muted">
            A partnership of seasoned practitioners united by deep experience inside regulated organisations and a refusal to apply off-the-shelf thinking to complex problems.
          </Text>
        </Stack>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          {partners.map((p) => (
            <Link
              key={p.initial}
              href="/about/team"
              className="group block"
              data-testid={`link-team-${p.initial}`}
            >
              <AspectRatio ratio={1} className="mb-4 overflow-hidden bg-[#E0DBD2]">
                <div className="flex h-full w-full items-center justify-center bg-[#1A1A1A] transition-colors duration-300 group-hover:bg-[#C75B39]">
                  <span className="font-display text-5xl text-white/90">{p.initial}</span>
                </div>
              </AspectRatio>
              <Text variant="h4" className="mb-1 text-xl">
                {p.name}
              </Text>
              <Text variant="eyebrow" tone="subtle">
                {p.role}
              </Text>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C75B39] transition-all hover:gap-3"
          >
            Meet the partnership <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      <Separator className="bg-[#E0DBD2]" />

      {/* JOURNAL PREVIEW */}
      <Section
        ref={journalRef}
        tone="white"
        padding="lg"
        style={{
          opacity: journalVisible ? 1 : 0,
          transform: journalVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Stack gap="sm" className="max-w-xl">
            <Text variant="h2">Journal</Text>
            <Text variant="body" tone="muted">
              Practical thinking for delivery-led organisations — research, frameworks, and analysis from practitioners.
            </Text>
          </Stack>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C75B39] transition-all hover:gap-3"
          >
            All insights <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <Grid cols="2-lg" gap="xl" equal={false} className="mb-12 items-start">
          <AspectRatio ratio={4 / 3} className="overflow-hidden bg-[#EFEBE3]">
            <Image
              src={modernWorkImage}
              alt="Featured insight"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AspectRatio>
          <Stack gap="md" className="lg:pt-2">
            <Text variant="eyebrow" tone="coral">
              Featured
            </Text>
            <Text variant="h3" className="max-w-[20ch]">
              The AI Governance Gap in Infrastructure Delivery
            </Text>
            <Text variant="body" tone="muted">
              Why complex delivery organisations need a different AI governance framework entirely, and why most AI consultancies won&apos;t tell you that.
            </Text>
            <Link
              href="/insights/ai-governance-gap-infrastructure"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C75B39] transition-all hover:gap-3"
            >
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Stack>
        </Grid>

        <div>
          {insightRows.map((row, index) => (
            <div key={row.href}>
              {index > 0 && <Separator className="bg-[#E0DBD2]" />}
              <Link
                href={row.href}
                className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 py-5 sm:grid-cols-[7rem_1fr_6rem] sm:gap-6"
              >
                <Text as="span" variant="caption" tone="subtle">
                  {row.date}
                </Text>
                <Text
                  as="span"
                  variant="body"
                  className="font-display text-lg transition-colors group-hover:text-[#C75B39] sm:text-xl"
                >
                  {row.title}
                </Text>
                <Text as="span" variant="eyebrow" tone="subtle" className="justify-self-end">
                  {row.category}
                </Text>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Separator className="bg-[#E0DBD2]" />

      {/* CTA */}
      <Section
        ref={ctaRef}
        tone="white"
        padding="xl"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Stack gap="sm" className="max-w-xl">
            <Text variant="h2">Let&apos;s talk.</Text>
            <Text variant="body" tone="muted">
              No pitch. No deck. Just a 30-minute call to give you a straight answer on where to begin.
            </Text>
          </Stack>
          <Button
            type="button"
            onClick={() => onOpenConsultation()}
            className="h-12 rounded-none bg-[#C75B39] px-7 text-base font-medium text-white hover:bg-[#A8482C]"
            data-testid="button-final-cta-conversation"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </PageShell>
  );
});

export default Home;
