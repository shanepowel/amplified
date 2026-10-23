'use client';

import type { Engagement } from "@/lib/engagements";
import { engagements as fallbackEngagements } from "@/lib/engagements";
import Link from "next/link";
import { memo } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import {
  AmpButton,
  BreadcrumbBar,
  Eyebrow,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
  engagements?: Engagement[];
}

const accentBgs = ["navy", "purple", "navy"] as const;

export default memo(function Engagements({ onOpenConsultation, engagements: engagementsProp }: Props) {
  const engagements = engagementsProp ?? fallbackEngagements;

  return (
    <PageShell>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Engagements" }]} />

      <Section tone="navy" padding="xl">
        <Stack gap="lg" className="max-w-[920px]">
          <Eyebrow>Engagements</Eyebrow>
          <Text variant="display" tone="white">
            Named work. Scoped to outcome, and delivered to a deadline.
          </Text>
          <Text variant="lead" tone="white-75" className="max-w-[680px]">
            Three productised engagements for the leaders accountable for delivery in regulated industries.
            Each one has a fixed scope, a fixed timeline, and a fixed list of artefacts you take with you
            at the end. We do not run open-ended retainers.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <div className="divide-y divide-[#E5E3EE] border-t border-[#E5E3EE]">
          {engagements.map((engagement, index) => (
            <article
              key={engagement.slug}
              className="grid min-w-0 grid-cols-1 lg:grid-cols-12"
              data-testid={`card-engagement-${engagement.slug}`}
            >
              <Surface
                variant={accentBgs[index % accentBgs.length]}
                padding="xl"
                className="flex min-h-[280px] flex-col justify-between lg:col-span-4"
              >
                <Stack gap="md">
                  <Eyebrow>
                    0{index + 1} {engagement.forBuyer}
                  </Eyebrow>
                  <Text variant="h2" tone="white" clamp={3}>
                    {engagement.name}
                  </Text>
                  <Text variant="body" tone="white-70" clamp={4}>
                    {engagement.tagline}
                  </Text>
                </Stack>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                  <div className="min-w-0">
                    <Stack direction="row" gap="xs" align="center" className="mb-1">
                      <Clock className="h-3 w-3 shrink-0 text-[#F85C70]" />
                      <Text as="span" variant="mono" tone="white-45">
                        Duration
                      </Text>
                    </Stack>
                    <Text variant="h4" tone="white" className="text-lg">
                      {engagement.duration}
                    </Text>
                  </div>
                  <div className="min-w-[200px] flex-1">
                    <Stack direction="row" gap="xs" align="center" className="mb-1">
                      <Tag className="h-3 w-3 shrink-0 text-[#F85C70]" />
                      <Text as="span" variant="mono" tone="white-45">
                        Investment
                      </Text>
                    </Stack>
                    <Text variant="caption" tone="white" clamp={3}>
                      {engagement.price}
                    </Text>
                  </div>
                </div>
              </Surface>

              <Surface
                variant="plain"
                padding="xl"
                className="flex min-w-0 flex-col lg:col-span-8"
              >
                <Stack gap="lg" className="flex-1">
                  <div>
                    <Eyebrow tone="subtle" className="mb-3">
                      Who it is for
                    </Eyebrow>
                    <Text variant="body" clamp={4}>
                      {engagement.buyerSentence}
                    </Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-3">
                      The problem we solve
                    </Eyebrow>
                    <Text variant="body" tone="muted" clamp={4}>
                      {engagement.problem[0]}
                    </Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-3">
                      What you have at the end
                    </Eyebrow>
                    <Text variant="body" className="font-medium" clamp={4}>
                      {engagement.outcome}
                    </Text>
                  </div>
                </Stack>

                <Stack
                  direction="row-responsive"
                  gap="md"
                  align="center"
                  className="mt-auto flex-wrap border-t border-[#E5E3EE] pt-6"
                >
                  <AmpButton asChild size="md" data-testid={`button-engagement-detail-${engagement.slug}`}>
                    <Link href={`/engagements/${engagement.slug}`}>
                      See full engagement <ArrowRight className="h-4 w-4" />
                    </Link>
                  </AmpButton>
                  <AmpButton
                    variant="ghostDark"
                    size="md"
                    onClick={() => onOpenConsultation(engagement.name)}
                    data-testid={`button-engagement-discovery-${engagement.slug}`}
                  >
                    Or book a 30-minute discovery call
                  </AmpButton>
                </Stack>
              </Surface>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Eyebrow>Not sure which engagement fits?</Eyebrow>
          <Text variant="h2" tone="white" className="max-w-[760px]">
            Bring the situation. We will tell you which engagement is right, or whether you need something else entirely.
          </Text>
          <AmpButton
            size="xl"
            onClick={() => onOpenConsultation()}
            data-testid="button-engagements-cta"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </AmpButton>
        </Stack>
      </Section>
    </PageShell>
  );
});
