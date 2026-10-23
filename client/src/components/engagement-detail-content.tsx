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
        eyebrow={`Engagement ${e.forBuyer}`}
        title={e.name}
        subtitle={`${e.tagline}.`}
        lead={e.buyerSentence}
        contentClassName="max-w-[1200px]"
      >
        <BorderGrid
          cols={3}
          className="mt-4 !border-white/12 [&_.amp-border-cell]:!border-white/12"
        >
          <BorderCell>
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#F85C70]" />
              <Text as="span" variant="mono" tone="white-45">Duration</Text>
            </Stack>
            <Text variant="h4" tone="white">{e.duration}</Text>
          </BorderCell>
          <BorderCell>
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Tag className="h-3.5 w-3.5 shrink-0 text-[#F85C70]" />
              <Text as="span" variant="mono" tone="white-45">Investment</Text>
            </Stack>
            <Text variant="caption" tone="white">{e.price}</Text>
          </BorderCell>
          <BorderCell className="col-span-2 lg:col-span-1">
            <Stack direction="row" gap="xs" align="center" className="mb-2">
              <Users className="h-3.5 w-3.5 shrink-0 text-[#F85C70]" />
              <Text as="span" variant="mono" tone="white-45">Built for</Text>
            </Stack>
            <Text variant="h4" tone="white" className="capitalize">
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
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181F4F]"
                    aria-hidden="true"
                  >
                    <Check className="h-4 w-4 text-[#F85C70]" />
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
              <li key={i} className="flex items-start gap-5 border-b border-[#E5E3EE] pb-5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181F4F] font-mono text-sm font-bold text-[#F85C70]"
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
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F85C70]/15 font-mono text-xs text-[#F85C70]"
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
          <CalendarDays className="h-4 w-4 shrink-0 text-[#F85C70]" aria-hidden="true" />
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
            <Surface variant="mist" padding="lg" className="border-l-4 border-l-[#F85C70]">
              <CheckCircle className="mb-5 h-6 w-6 text-[#F85C70]" />
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
                <ArrowRight className="h-5 w-5 shrink-0 text-[#F85C70]" />
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

      <Section tone="purple" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Eyebrow>Start a conversation</Eyebrow>
          <Text variant="h2" tone="white" className="max-w-[760px]">
            Ready to scope a {e.name} engagement?
          </Text>
          <Text variant="lead" tone="white-75" className="max-w-[640px]">
            We start every engagement with a 30-minute discovery call. Bring the situation,
            we will tell you whether {e.name} is the right fit before we send a proposal.
          </Text>
          <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
            <AmpButton
              size="xl"
              onClick={() => onOpenConsultation(e.name)}
              data-testid={`button-engagement-cta-${e.slug}`}
            >
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </AmpButton>
            <div className="amp-playbook-cta-on-purple">
              <EngagementPlaybookDownload engagement={e} />
            </div>
          </Stack>
          <Text variant="small" tone="white-45">
            No pitch. No deck. Just a 30-minute call — or grab the full playbook as a PDF.
          </Text>

          <div className="mt-16 flex w-full flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-10">
            <Text as="span" variant="mono" tone="white-45">Other engagements</Text>
            <Link
              href="/engagements"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#F85C70]"
            >
              See all three engagements <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </Stack>
      </Section>

      <AskAmplified engagementSlug={e.slug} engagementName={e.name} />
    </PageShell>
  );
}
