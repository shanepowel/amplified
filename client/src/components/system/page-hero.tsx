import * as React from "react";
import { Section } from "./section";
import { Stack } from "./stack";
import { Text, Eyebrow } from "./text";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  padding?: "lg" | "xl" | "hero";
}

/** Standard navy marketing hero: eyebrow, display title, optional lead, CTA slot. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  children,
  className,
  contentClassName,
  padding = "xl",
}: PageHeroProps) {
  return (
    <Section tone="navy" padding={padding} className={cn("relative", className)}>
      <Stack gap="lg" className={cn("max-w-[920px]", contentClassName)}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Text variant="display" tone="white">
          {title}
        </Text>
        {subtitle ? (
          <Text variant="h3" tone="coral" className="max-w-[760px]">
            {subtitle}
          </Text>
        ) : null}
        {lead ? (
          <Text variant="lead" tone="white-75" className="max-w-[680px]">
            {lead}
          </Text>
        ) : null}
        {children}
      </Stack>
    </Section>
  );
}
