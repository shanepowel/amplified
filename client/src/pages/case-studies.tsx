'use client';

import Link from "next/link";
import { memo } from "react";
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp, Award, type LucideIcon } from "lucide-react";
import { caseStudies as caseStudiesFallback, type CaseStudy, type CaseStudyIconKey } from "@/lib/case-studies";
import {
  AmpButton,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface CaseStudiesProps {
  onOpenConsultation: (serviceType?: string) => void;
  items?: CaseStudy[];
}

const STAT_ICONS: Record<CaseStudyIconKey, LucideIcon> = {
  users: Users,
  clock: Clock,
  trending: TrendingUp,
  award: Award,
};

function StatIcon({ name, className }: { name: CaseStudyIconKey; className?: string }) {
  const Icon = STAT_ICONS[name];
  return <Icon className={className} />;
}

export default memo(function CaseStudies({ onOpenConsultation, items }: CaseStudiesProps) {
  const caseStudies = items && items.length > 0 ? items : caseStudiesFallback;
  return (
    <PageShell>
      <PageHero
        eyebrow="Case Studies"
        title={
          <span data-testid="text-ourwork-title">
            Delivered in the field.<br />Measured at board level.
          </span>
        }
        lead={
          <>
            Real engagements with named outcomes. Every case study below reflects work that
            was scoped, delivered, and handed over by Amplified practitioners operating inside
            the client organisation.
          </>
        }
        contentClassName="max-w-[720px]"
      />

      <Section tone="white" padding="lg" className="py-24 lg:py-32">
        <Stack gap="none">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              className="grid grid-cols-1 border-b border-[#E5E3EE] lg:grid-cols-5"
              data-testid={`card-case-study-${study.id}`}
            >
              <Surface
                variant={i % 2 === 0 ? "navy" : "purple"}
                padding="xl"
                className="lg:col-span-2"
              >
                <Text as="span" variant="mono" tone="white-45" className="mb-2 block tracking-[0.12em]">
                  {study.sector}
                </Text>
                <Text
                  variant="h2"
                  tone="white"
                  className="mb-3"
                  data-testid={`text-case-study-${study.id}-title`}
                >
                  {study.company}
                </Text>
                <Eyebrow className="mb-10">{study.service}</Eyebrow>

                <Stack gap="lg" className="border-t border-white/10 pt-6">
                  {study.stats.map((stat) => (
                    <Stack key={stat.label} direction="row" gap="md" align="center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10">
                        <StatIcon name={stat.icon} className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <Text variant="h4" tone="white">{stat.value}</Text>
                        <Text variant="caption" tone="white-45">{stat.label}</Text>
                      </div>
                    </Stack>
                  ))}
                </Stack>
              </Surface>

              <Surface variant="plain" padding="xl" className="lg:col-span-3">
                <Stack gap="lg">
                  <div>
                    <Eyebrow tone="subtle" className="mb-3">The challenge</Eyebrow>
                    <Text variant="body" tone="muted">{study.challenge}</Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-3">What we did</Eyebrow>
                    <Text variant="body" tone="muted">{study.solution}</Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-4">Results</Eyebrow>
                    <ul className="space-y-3">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F85C70]" />
                          <Text variant="small">{result}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Surface variant="mist" padding="sm" className="border-l-2 border-l-[#F85C70]">
                    <Text variant="small" tone="muted" className="italic">{study.outcome}</Text>
                  </Surface>
                </Stack>
              </Surface>
            </div>
          ))}
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Grid cols="2-lg" gap="xl" className="items-center">
          <Stack gap="md">
            <Eyebrow>Start a conversation</Eyebrow>
            <Text variant="h2" tone="white">Ready to discuss your engagement?</Text>
          </Stack>
          <Stack gap="md">
            <Text variant="body" tone="white-70">
              Every engagement starts with a structured discovery conversation. No slide decks,
              no proposals before we understand your situation. Just a straight conversation
              about what you are trying to do and whether we are the right fit.
            </Text>
            <Stack direction="row-responsive" gap="md" className="pt-2">
              <AmpButton
                size="md"
                onClick={() => onOpenConsultation()}
                data-testid="button-case-studies-consultation"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </AmpButton>
              <AmpButton asChild variant="outlineLight" size="md" data-testid="button-case-studies-our-work">
                <Link href="/our-work">See all our work</Link>
              </AmpButton>
            </Stack>
          </Stack>
        </Grid>
      </Section>
    </PageShell>
  );
});
