'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";

interface AboutTeamProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const partners = [
  {
    initial: "A",
    role: "Operations & Governance Partner",
    focus: "AMP 01 / AMP 03",
    bio: "Twenty years building and running delivery functions inside regulated organisations. Brings a PMO director's instinct for accountability to every AI engagement. Believes that governance is not a constraint on delivery. It is what makes delivery trustworthy.",
    philosophy: "We build the governance structure before anyone writes a line of code. Every other sequence is just optimism.",
    specialties: ["Governance Framework Design", "PMO Transformation", "AI Readiness Assessment", "Regulatory Alignment"],
    accentClass: "bg-[#181F4F]",
    quoteBorderClass: "border-[#60266A]",
  },
  {
    initial: "B",
    role: "Technology & AI Partner",
    focus: "AMP 02",
    bio: "Hands-on technical leader with deep experience in AI implementation across financial services and energy sectors. Brings the rigour of a regulated-industry background to every architectural decision. Knows that AI systems that cannot be explained cannot be trusted.",
    philosophy: "AI without accountability is just risk wearing a suit. We build systems that can answer for themselves.",
    specialties: ["AI Implementation", "Cloud-Native Architecture", "Responsible AI Design", "Technical Due Diligence"],
    accentClass: "bg-[#60266A]",
    quoteBorderClass: "border-[#60266A]",
  },
  {
    initial: "C",
    role: "Structured Delivery Partner",
    focus: "AMP 03",
    bio: "Career programme director with a track record across major infrastructure and public sector programmes. Designed the hybrid agile model that sits at the heart of Amplified's structured delivery practice. Has run delivery at scale under some of the toughest governance environments in the UK.",
    philosophy: "Speed without structure is expensive chaos. The organisations we respect most move fast inside a governance envelope that never breaks.",
    specialties: ["Hybrid Delivery Design", "Agile at Scale", "Programme Governance", "Stage Gate Management"],
    accentClass: "bg-[#F85C70]",
    quoteBorderClass: "border-[#F85C70]",
  },
  {
    initial: "D",
    role: "Capability & Change Partner",
    focus: "AMP 04",
    bio: "Organisation development specialist who has built internal capability programmes for some of the UK's largest regulated employers. Focuses on the human side of AI adoption: the knowledge, the confidence, and the culture that organisations need to govern AI themselves.",
    philosophy: "The measure of a good engagement is whether you need us twelve months later. We build capability, not dependency.",
    specialties: ["Capability Programme Design", "AI Literacy", "Leadership Development", "Change Management"],
    accentClass: "bg-[#181F4F]",
    quoteBorderClass: "border-[#60266A]",
  },
];

const values = [
  { label: "Rigorous", desc: "We do not cut corners. Especially not in governance." },
  { label: "Trusting", desc: "We say what we think, even when it is not what you hoped to hear." },
  { label: "People-Centred", desc: "Technology serves people. Not the other way around." },
  { label: "Pragmatic", desc: "We work in the real world, with real constraints." },
  { label: "Curious", desc: "We keep learning so our clients stay ahead." },
  { label: "Technically Excellent", desc: "We practise what we preach on AI and delivery." },
];

const AboutTeam = memo(function AboutTeam({ onOpenConsultation }: AboutTeamProps) {
  return (
    <PageShell className="bg-[#FAFAF9]">
      <Section tone="navy" padding="hero" className="pt-40 pb-28">
        <Link href="/">
          <span className="mb-12 inline-flex cursor-pointer items-center gap-2 text-sm text-white/45">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </span>
        </Link>

        <Grid cols={2} gap="xl" className="items-end lg:grid-cols-2">
          <Stack gap="lg">
            <Eyebrow>The Partnership</Eyebrow>
            <Text variant="h1" tone="white" className="font-semibold">
              Built by leaders who have done it.
            </Text>
            <Text variant="lead" tone="white-70">
              A partnership of seasoned practitioners from all walks of life. What they share
              is not a background: it is deep experience inside regulated organisations, a commitment
              to rigour, and the ability to adapt to what each client genuinely needs.
            </Text>
          </Stack>
          <div className="border-l border-white/10 lg:pl-16">
            <Stack gap="md">
              {["20+ years combined programme leadership", "Regulated industries only", "Built for accountability, not just delivery", "We practise what we preach on AI"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-[#F85C70]" />
                  <Text variant="body" tone="white-70">{item}</Text>
                </div>
              ))}
            </Stack>
          </div>
        </Grid>
      </Section>

      <Section tone="transparent" padding="lg" className="bg-[#FAFAF9]">
        <Stack gap="lg" className="mb-12">
          <Eyebrow>The partnership</Eyebrow>
          <Text variant="h2" tone="ink" className="font-semibold">
            Senior practitioners,
            <br />
            named accountabilities.
          </Text>
        </Stack>
        <Stack gap="md">
          {partners.map((p, i) => (
            <PartnerCard key={i} partner={p} />
          ))}
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg" className="mb-16">
          <Eyebrow>What we stand for</Eyebrow>
          <Text variant="h2" tone="ink" className="font-semibold">
            Six values.
            <br />
            Zero compromises.
          </Text>
        </Stack>
        <BorderGrid cols={3} className="gap-px bg-[#DDD9EA]">
          {values.map((v, i) => (
            <BorderCell
              key={i}
              className="group bg-[#F2F0F7] p-10 transition-all duration-300 hover:bg-[#181F4F]"
            >
              <p className="val-label mb-3 text-xl font-semibold text-[#181F4F] transition-colors duration-300 group-hover:text-white">
                {v.label}
              </p>
              <p className="val-desc text-sm leading-relaxed text-[#65677B] transition-colors duration-300 group-hover:text-white/65">
                {v.desc}
              </p>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="lg" align="center" className="mx-auto max-w-[800px] text-center">
          <Eyebrow>Our commitment</Eyebrow>
          <blockquote>
            <Text variant="h2" tone="ink" className="leading-relaxed">
              "We are not here to make AI adoption sound easy.
              We are here to make it work, in industries where getting it wrong has consequences."
            </Text>
          </blockquote>
          <div className="mx-auto h-px w-12 bg-[#F85C70]" />
          <Text variant="lead" tone="muted">
            Every engagement we take on is with an organisation that operates under genuine
            governance pressure. Our job is to make AI adoption rigorous enough to survive that pressure.
            Not to persuade you the pressure does not matter.
          </Text>
        </Stack>
      </Section>

      <Section tone="purple" padding="lg">
        <Grid cols={2} gap="xl" className="items-center lg:grid-cols-2">
          <Stack gap="md">
            <Text variant="h2" tone="white" className="font-semibold">
              Ready to meet the team properly?
            </Text>
            <Text variant="lead" tone="white-70">
              Book a first conversation. No pitch deck. Just an honest discussion
              about where you are, what you need, and whether we are the right fit.
            </Text>
          </Stack>
          <div className="lg:flex lg:justify-end">
            <AmpButton
              size="xl"
              onClick={() => onOpenConsultation()}
              data-testid="button-about-team-cta"
              className="gap-3 px-10 py-5"
            >
              Book a conversation
              <ArrowRight className="h-5 w-5" />
            </AmpButton>
          </div>
        </Grid>
      </Section>
    </PageShell>
  );
});

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div
      className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#E8E4F0] bg-white transition-all duration-500 lg:grid-cols-12"
    >
      <div
        className={`relative flex min-h-[280px] items-center justify-center overflow-hidden p-12 lg:col-span-3 ${partner.accentClass}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)] opacity-10"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 text-[2rem] font-bold tracking-tight text-white">
            {partner.initial}
          </div>
          <Text variant="mono" tone="white-45" className="text-center">
            {partner.focus}
          </Text>
        </div>
      </div>

      <div className="flex flex-col justify-between p-10 lg:col-span-9 lg:p-12">
        <div>
          <Text variant="h3" tone="ink" className="mb-6 font-semibold">
            {partner.role}
          </Text>
          <Text variant="body" tone="muted" className="mb-8">
            {partner.bio}
          </Text>
          <blockquote
            className={`mb-8 border-l-[3px] pl-5 text-base italic font-normal text-[#60266A] ${partner.quoteBorderClass}`}
          >
            "{partner.philosophy}"
          </blockquote>
        </div>
        <div className="flex flex-wrap gap-2">
          {partner.specialties.map((s) => (
            <span
              key={s}
              className="rounded-sm bg-[#F2F0F7] px-3 py-1.5 text-xs font-medium tracking-wide text-[#181F4F]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
