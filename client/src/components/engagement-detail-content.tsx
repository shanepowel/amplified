'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Tag, XCircle, Users, Check, CalendarDays } from "lucide-react";
import type { Engagement } from "@/lib/engagements";
import AskAmplified from "@/components/ask-amplified";
import EngagementPlaybookDownload from "@/components/engagement-playbook-download";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
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

interface Props {
  engagement: Engagement;
  onOpenConsultation: (serviceType?: string) => void;
}

export default function EngagementDetailContent({ engagement, onOpenConsultation }: Props) {
  const e = engagement;

  return (
    <PageShell>
      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Engagements", href: "/engagements" },
          { label: e.name },
        ]}
      />

      <PageHero
        tone="paper"
        eyebrow={`Work / Case study`}
        title={e.name}
        subtitle={`${e.tagline}.`}
        lead={e.buyerSentence}
        contentClassName="max-w-[1200px]"
        className="pt-10 lg:pt-14"
      >
        <BorderGrid cols={3} className="mt-2 border-[#E0DBD2] [&_.amp-border-cell]:border-[#E0DBD2]">
          <BorderCell className="bg-transparent p-5">
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#C75B39]" />
              <Text as="span" variant="mono" tone="subtle">Duration</Text>
            </Stack>
            <Text variant="h4">{e.duration}</Text>
          </BorderCell>
          <BorderCell className="bg-transparent p-5">
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Tag className="h-3.5 w-3.5 shrink-0 text-[#C75B39]" />
              <Text as="span" variant="mono" tone="subtle">Investment</Text>
            </Stack>
            <Text variant="caption">{e.price}</Text>
          </BorderCell>
          <BorderCell className="col-span-2 bg-transparent p-5 lg:col-span-1">
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Users className="h-3.5 w-3.5 shrink-0 text-[#C75B39]" />
              <Text as="span" variant="mono" tone="subtle">Built for</Text>
            </Stack>
            <Text variant="h4" className="capitalize">
              {e.forBuyer.replace("for ", "")}
            </Text>
          </BorderCell>
        </BorderGrid>
      </PageHero>

      <Section tone="mist" padding="md">
        <Grid cols="12" gap="xl">
          <Stack gap="md" className="lg:col-span-4">
            <Eyebrow>Is this you?</Eyebrow>
            <Text variant="h2">Three quick checks before you read on.</Text>
            <Text variant="body" tone="muted">
              If two or three of these describe your situation today, {e.name} is likely the right
              engagement to scope. If none of them do, talk to us anyway and we will point you to
              a better fit.
            </Text>
          </Stack>
          <ul className="space-y-3 lg:col-span-7 lg:col-start-6" data-testid={`list-engagement-qualifiers-${e.slug}`}>
            {e.qualifiers.map((item, i) => (
              <li key={i}>
                <Surface variant="bordered" padding="md" className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A1A1A]"
                    aria-hidden="true"
                  >
                    <Check className="h-4 w-4 text-[#C75B39]" />
                  </span>
                  <Text variant="body">{item}</Text>
                </Surface>
              </li>
            ))}
          </ul>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Grid cols="12" gap="xl">
          <Stack gap="md" className="lg:col-span-4">
            <Eyebrow>01 · The problem we solve</Eyebrow>
            <Text variant="h2">Why this engagement exists.</Text>
          </Stack>
          <Stack gap="lg" className="lg:col-span-7 lg:col-start-6">
            {e.problem.map((para, i) => (
              <Text key={i} variant="lead" tone="muted">{para}</Text>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="12" gap="xl">
          <Stack gap="md" className="lg:col-span-4">
            <Eyebrow>02 · What is included</Eyebrow>
            <Text variant="h2">Deliverables, by name.</Text>
            <Text variant="body" tone="muted">
              Every engagement is scoped to a fixed list of artefacts and decisions. Nothing implied,
              nothing left until the closeout meeting.
            </Text>
          </Stack>
          <ol className="space-y-5 lg:col-span-7 lg:col-start-6">
            {e.included.map((item, i) => (
              <li key={i} className="flex items-start gap-5 border-b border-[#E0DBD2] pb-5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A1A1A] font-mono text-sm font-bold text-[#C75B39]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Text variant="body" className="pt-0.5">{item}</Text>
              </li>
            ))}
          </ol>
        </Grid>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="xl" className="max-w-[820px]">
          <Stack gap="md">
            <Eyebrow>How the weeks unfold</Eyebrow>
            <Text variant="h2" tone="white">{e.duration}, paced like this.</Text>
            <Text variant="body" tone="white-70">
              No open-ended retainer. The work is sequenced so you have visibility of what is being
              produced each week, and named handover points along the way.
            </Text>
          </Stack>
        </Stack>

        <ol
          className="relative mt-14 grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3"
          data-testid={`list-engagement-timeline-${e.slug}`}
        >
          {e.timeline.map((step, i) => (
            <li
              key={i}
              className="flex flex-col border-r border-b border-white/10 p-7 lg:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C75B39]/15 font-mono text-xs text-[#C75B39]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Text as="span" variant="mono" tone="white-45" className="tracking-[0.12em]">
                  {step.label}
                </Text>
              </div>
              <Text variant="h4" tone="white" className="mb-3">{step.focus}</Text>
              <Text variant="small" tone="white-70">{step.detail}</Text>
            </li>
          ))}
        </ol>

        <Stack direction="row" gap="sm" align="center" className="mt-10">
          <CalendarDays className="h-4 w-4 shrink-0 text-[#C75B39]" aria-hidden="true" />
          <Text variant="small" tone="white-45">
            Start date is agreed during the discovery call and held in the diary before contract sign-off.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Grid cols="12" gap="xl">
          <Stack gap="md" className="lg:col-span-4">
            <Eyebrow>03 · What you have at the end</Eyebrow>
            <Text variant="h2">The handover, in one paragraph.</Text>
          </Stack>
          <div className="lg:col-span-7 lg:col-start-6">
            <Surface variant="mist" padding="lg" className="border-l-4 border-l-[#C75B39]">
              <CheckCircle className="mb-5 h-6 w-6 text-[#C75B39]" />
              <Text variant="h3">{e.outcome}</Text>
            </Surface>
          </div>
        </Grid>
      </Section>

      <Section tone="navy" padding="lg">
        <Eyebrow className="mb-4">04 · Case study</Eyebrow>
        <Text variant="h2" tone="white" className="mb-12">
          Where this engagement has been delivered.
        </Text>

        <Link href={`/case-studies#${e.caseStudyId}`} className="block">
          <Surface
            variant="inset"
            padding="xl"
            className="cursor-pointer transition-colors duration-200 hover:bg-white/5"
          >
            <Grid cols="5-hero" gap="lg" className="items-center">
              <Stack gap="xs">
                <Text as="span" variant="mono" tone="white-45">{e.caseStudySector}</Text>
                <Text variant="h3" tone="white">{e.caseStudyName}</Text>
              </Stack>
              <Stack direction="row" gap="lg" align="center" className="lg:col-span-3">
                <Text variant="body" tone="white-80" className="flex-1">
                  {e.caseStudyOutcome}
                </Text>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#C75B39]" />
              </Stack>
            </Grid>
          </Surface>
        </Link>
      </Section>

      <Section tone="white" padding="lg">
        <Grid cols="12" gap="xl">
          <Stack gap="md" className="lg:col-span-4">
            <Eyebrow>05 · Not for you if</Eyebrow>
            <Text variant="h2">We work better when we are honest about fit.</Text>
            <Text variant="body" tone="muted">
              The fastest way to waste a client&apos;s money is to take on work we are not built for.
              If any of the following describes you, this engagement is not the right one. Talk to
              us anyway, we will point you to the right thing.
            </Text>
          </Stack>
          <ul className="space-y-4 lg:col-span-7 lg:col-start-6">
            {e.notForYouIf.map((item, i) => (
              <li key={i}>
                <Surface variant="mist" padding="md" className="flex items-start gap-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#65677B]" />
                  <Text variant="body">{item}</Text>
                </Surface>
              </li>
            ))}
          </ul>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg" className="border-t border-[#E0DBD2]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Stack gap="sm" className="max-w-xl">
            <Text variant="h2">Next project</Text>
            <Text variant="body" tone="muted">
              Ready to scope a {e.name} engagement? We start with a 30-minute discovery call — no pitch, no deck.
            </Text>
          </Stack>
          <Stack direction="row-responsive" gap="md" align="center" className="flex-wrap">
            <AmpButton
              size="lg"
              onClick={() => onOpenConsultation(e.name)}
              data-testid={`button-engagement-cta-${e.slug}`}
            >
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </AmpButton>
            <Link
              href="/engagements"
              className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-0.5 text-sm font-medium transition-colors hover:border-[#C75B39] hover:text-[#C75B39]"
            >
              See all engagements <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Stack>
        </div>
        <div className="mt-10">
          <EngagementPlaybookDownload engagement={e} />
        </div>
      </Section>

      <AskAmplified engagementSlug={e.slug} engagementName={e.name} />
    </PageShell>
  );
}
