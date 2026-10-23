'use client';

import { memo } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle, Users, Zap, BookOpen } from "lucide-react";
import peopleWorkingImage from "@assets/68_1760470836673.webp";
import modernWorkImage from "@assets/35_1760470608291.webp";
import {
  AmpButton,
  ContentCard,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface CareersProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const values = [
  {
    word: "Rigorous",
    body: "We hold ourselves and our clients to high standards because shortcuts compound into bigger problems.",
  },
  {
    word: "Trusting",
    body: "We build cultures where people are empowered to make decisions, not paralysed by approval chains.",
  },
  {
    word: "People-Centred",
    body: "Organisations succeed when their people are truly at the centre of strategy, not an afterthought.",
  },
  {
    word: "Pragmatic",
    body: "We deliver excellence in what matters most and resist the perfectionism that prevents progress.",
  },
  {
    word: "Curious",
    body: "We stay ahead of change by learning constantly and challenging our own assumptions.",
  },
  {
    word: "Tech Excellence",
    body: "We deeply understand AI, data, and security, using technology responsibly as a smart solution, not a new problem.",
  },
];

const traits = [
  "Combine expertise with intellectual humility. You are the expert and the student.",
  "Think systemically. You see how decisions ripple through organisations.",
  "Work with ambiguity. You are energised by 'we need to figure this out'.",
  "Have intellectual integrity. You will challenge clients respectfully.",
  "Care about real outcomes, not just impressive-looking analysis.",
  "Bring diverse perspectives. Different backgrounds make better thinking.",
];

const successItems = [
  "You are doing work that genuinely moves the needle, not just generating invoices",
  "You are learning constantly with people who push your thinking",
  "You have autonomy and trust, not bureaucracy and oversight",
  "You are compensated fairly with clarity on progression",
  "You can build a sustainable career here, not a sprint to burnout",
];

const ecosystemPaths = [
  {
    tag: "Consulting",
    title: "AMP 01 to AMP 06",
    body: "Governance, implementation, structured delivery, capability building, coaching, and tech build across five sectors.",
    cta: "See the services",
    href: "/how-we-work",
  },
  {
    tag: "Stable Teams",
    title: "AmplifiedTeams",
    body: "Roles delivering the Stable Teams framework inside client organisations. Helping teams rebaseline and achieve sustained high performance.",
    cta: "Visit AmplifiedTeams",
    href: "https://amplifiedteams.co.uk",
    external: true,
  },
  {
    tag: "Learning",
    title: "ampStore",
    body: "Curriculum design, learning experience development, and practitioner coaching for regulated-industry capability programmes.",
    cta: "Explore ampStore",
    href: "/amp-store",
  },
];

const talentHRJobsUrl = "https://jobs.talenthr.io/amplified/";

const Careers = memo(function Careers({ onOpenConsultation }: CareersProps) {
  return (
    <PageShell className="bg-[#FAFAF9]">
      <Section tone="navy" padding="hero" className="pt-32 lg:pt-40">
        <Grid cols="2-lg" gap="xl" equal={false} className="items-center">
          <Stack gap="lg">
            <Eyebrow>Join the Partnership</Eyebrow>
            <Text variant="display" tone="white" data-testid="text-careers-title">
              This is what
              <br />
              we are building.
            </Text>
            <Text variant="lead" tone="white-70">
              A management consultancy that works across infrastructure, energy, financial services,
              public sector, and technology organisations. Specialists in AI governance, structured
              delivery, coaching, tech build, and capability development.
            </Text>
            <Text variant="body" tone="white-45" className="italic">
              If it resonates, let&apos;s talk.
            </Text>
            <Stack direction="row" gap="md" className="flex-wrap">
              <AmpButton
                size="md"
                onClick={() => window.open(talentHRJobsUrl, "_blank")}
                data-testid="button-view-roles-hero"
              >
                <ExternalLink className="h-4 w-4" />
                View Open Roles
              </AmpButton>
              <AmpButton
                size="md"
                variant="outlineLight"
                onClick={() => onOpenConsultation("careers")}
                data-testid="button-careers-consultation"
              >
                Start a Conversation
              </AmpButton>
            </Stack>
          </Stack>
          <div className="hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded">
              <img
                src={peopleWorkingImage.src}
                alt="Amplified team members at work"
                className="h-full w-full object-cover"
                data-testid="img-careers-hero"
              />
            </div>
          </div>
        </Grid>
      </Section>

      <Section tone="white" padding="lg" className="border-b border-[#E5E3EE]">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow>What We Are Building</Eyebrow>
            <Text variant="h2">
              Every walk of life.
              <br />
              One standard of rigour.
            </Text>
            <Text variant="body" tone="muted">
              We are not a one-size-fits-all consultancy, and we do not hire one-size-fits-all people.
              We bring together practitioners from every sector, every background, and every career path.
              Former civil servants, infrastructure programme directors, startup founders, technical architects,
              coaches, and organisational designers. What matters is whether your experience or your ambitions
              match the work we do, not where you started.
            </Text>
            <Text variant="body" tone="muted">
              We work across infrastructure and construction, energy and utilities, financial services,
              public sector, and technology and private sector organisations. Rigour is not optional in
              any of them.
            </Text>
            <Text variant="body" tone="muted" className="italic">
              We measure our impact not in billable hours, but in sustained behaviour change and
              organisational capability that outlasts our involvement.
            </Text>
          </Stack>
          <Stack gap="lg">
            <img
              src={modernWorkImage.src}
              alt="Thoughtful strategy and delivery"
              className="w-full rounded"
              loading="lazy"
            />
            <Grid cols={2} gap="none" equal={false} className="border-l border-t border-[#DDD9EA]">
              {[
                { icon: Users, label: "AmplifiedTeams", desc: "Stable Teams and Ops as a Service" },
                { icon: BookOpen, label: "ampStore", desc: "Curated learning and capability programmes" },
                { icon: Zap, label: "Six AMP Lines", desc: "Governance, delivery, coaching, build" },
                { icon: CheckCircle, label: "Five Sectors", desc: "Infrastructure, energy, finance, public, private" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Surface key={i} variant="plain" padding="sm" className="border-b border-r border-[#DDD9EA] !p-5">
                    <Icon className="mb-3 h-4 w-4 text-[#F85C70]" />
                    <Text variant="small" className="mb-1 font-semibold">{item.label}</Text>
                    <Text variant="caption" tone="muted">{item.desc}</Text>
                  </Surface>
                );
              })}
            </Grid>
          </Stack>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg" className="mb-16 max-w-[560px]">
          <Eyebrow>Our Values</Eyebrow>
          <Text variant="h2">These are operational, not aspirational</Text>
          <Text variant="body" tone="muted">
            They shape how we hire, how we work with clients, and how we hold ourselves accountable.
          </Text>
        </Stack>

        <Grid cols={3} gap="none" equal className="border-l border-t border-[#C8C4D8] lg:grid-cols-3">
          {values.map((v) => {
            const slug = v.word.toLowerCase().replace(/\s+/g, "-");
            return (
              <Surface
                key={v.word}
                variant="plain"
                padding="lg"
                className="border-b border-r border-[#C8C4D8]"
                data-testid={`card-value-${slug}`}
              >
                <Text variant="h3" className="mb-4" data-testid={`text-value-title-${slug}`}>
                  {v.word}
                </Text>
                <Text variant="small" tone="muted" data-testid={`text-value-description-${slug}`}>
                  {v.body}
                </Text>
              </Surface>
            );
          })}
        </Grid>
      </Section>

      <Section tone="white" padding="lg" className="border-t border-[#E5E3EE]">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow>The Fit</Eyebrow>
            <Text variant="h3">
              Who we are
              <br />
              looking for
            </Text>
            <ul className="space-y-5">
              {traits.map((trait, i) => (
                <li key={i} className="flex items-start gap-4" data-testid={`item-trait-${i}`}>
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F85C70]" />
                  <Text variant="body" tone="muted">{trait}</Text>
                </li>
              ))}
            </ul>
          </Stack>

          <Stack gap="md">
            <Eyebrow>Success</Eyebrow>
            <Text variant="h3">
              What success
              <br />
              looks like here
            </Text>
            <ul className="space-y-5">
              {successItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4" data-testid={`card-success-${i}`}>
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#60266A]" />
                  <Text variant="body" tone="muted">{item}</Text>
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg" className="border-t border-[#DDD9EA]">
        <Stack gap="md" className="mb-14 max-w-[540px]">
          <Eyebrow>Where You Could Work</Eyebrow>
          <Text variant="h2">The Amplified Ecosystem</Text>
          <Text variant="body" tone="muted">
            Roles span our six AMP consulting service lines, our Stable Teams capability through AmplifiedTeams,
            and learning design through the ampStore.
          </Text>
        </Stack>

        <Grid cols={3} gap="none" equal className="border-l border-t border-[#C8C4D8]">
          {ecosystemPaths.map((col) => (
            <ContentCard
              key={col.tag}
              eyebrow={col.tag}
              title={col.title}
              description={col.body}
              variant="plain"
              padding="lg"
              className="flex flex-col border-b border-r border-[#C8C4D8] !rounded-none"
              footer={
                col.external ? (
                  <a
                    href={col.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amp-focus-ring-on-light inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                  >
                    {col.cta} <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={col.href}
                    className="amp-focus-ring-on-light inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                  >
                    {col.cta} <ArrowRight className="h-3 w-3" />
                  </Link>
                )
              }
            />
          ))}
        </Grid>
      </Section>

      <Section tone="white" padding="lg" className="border-t border-[#E5E3EE]">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow>Current Opportunities</Eyebrow>
            <Text variant="h2">See what is open</Text>
            <Text variant="body" tone="muted">
              We are always looking for exceptional people who share our values and want to do work that matters.
              Browse current openings or reach out directly if nothing fits, we keep a watch list for the right people.
            </Text>
            <Stack direction="row" gap="md" className="flex-wrap">
              <AmpButton
                variant="navy"
                size="md"
                onClick={() => window.open(talentHRJobsUrl, "_blank")}
                data-testid="button-view-jobs"
              >
                <ExternalLink className="h-4 w-4" />
                View Open Roles
              </AmpButton>
              <AmpButton
                variant="outlineDark"
                size="md"
                onClick={() => onOpenConsultation("careers")}
                data-testid="button-start-conversation"
              >
                Start a Conversation
              </AmpButton>
            </Stack>
          </Stack>

          <Surface variant="navy" padding="xl" radius="sm">
            <Eyebrow className="mb-6">We practice what we preach</Eyebrow>
            <Text variant="h3" tone="white" className="mb-6">
              We are honest about how hard change is. We build capability so clients do not need us forever. We walk away from work that does not fit our values.
            </Text>
            <Text variant="body" tone="white-45" className="italic">
              If this resonates with you, let&apos;s talk.
            </Text>
          </Surface>
        </Grid>
      </Section>
    </PageShell>
  );
});

export default Careers;
