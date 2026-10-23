'use client';

import Link from "next/link";
import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { manifestoClaims as manifestoClaimsFallback, type ManifestoClaim } from "@/lib/manifesto";
import {
  AmpButton,
  BreadcrumbBar,
  Eyebrow,
  PageHero,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
  items?: ManifestoClaim[];
}

export default memo(function WhatWeBelieve({ onOpenConsultation, items }: Props) {
  const claims = items && items.length > 0 ? items : manifestoClaimsFallback;
  return (
    <PageShell>
      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "What we believe" },
        ]}
      />

      <PageHero
        eyebrow="What we believe"
        title="Five claims about how delivery should actually work."
        lead="We have spent more than a decade running technology programmes inside regulated organisations. These are the things we have come to believe, written down so you know what you are buying before you buy it."
      />

      <Section tone="white" padding="lg">
        <div className="border-t border-[#E5E3EE]">
          {claims.map((claim) => (
            <article
              key={claim.number}
              className="grid grid-cols-1 gap-8 border-b border-[#E5E3EE] py-16 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              <div className="lg:col-span-3">
                <Text
                  variant="display"
                  tone="coral"
                  className="text-6xl lg:text-7xl"
                  aria-hidden="true"
                >
                  {claim.number}
                </Text>
              </div>
              <div className="lg:col-span-9">
                <Text variant="h2" tone="ink" className="mb-6">
                  {claim.headline}
                </Text>
                <Stack gap="md">
                  {claim.body.map((para, i) => (
                    <Text key={i} variant="lead" tone="muted">
                      {para}
                    </Text>
                  ))}
                </Stack>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="purple" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Eyebrow>If this resonates</Eyebrow>
          <Text variant="h2" tone="white" className="max-w-[760px]">
            See how we put these beliefs into productised engagements.
          </Text>
          <Stack direction="row-responsive" gap="md" align="center" className="justify-center">
            <AmpButton asChild size="lg" data-testid="button-what-we-believe-engagements">
              <Link href="/engagements">
                View our three engagements <ArrowRight className="h-4 w-4" />
              </Link>
            </AmpButton>
            <AmpButton
              variant="outlineLight"
              size="lg"
              onClick={() => onOpenConsultation()}
              data-testid="button-what-we-believe-consultation"
            >
              Book a Discovery Call
            </AmpButton>
          </Stack>
        </Stack>
      </Section>
    </PageShell>
  );
});
