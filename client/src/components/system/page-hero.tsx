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
  /** `ink` = charcoal band; `paper` = editorial light hero */
  tone?: "ink" | "paper";
}

/** Marketing hero: eyebrow, display title, optional lead, CTA slot. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  children,
  className,
  contentClassName,
  padding = "xl",
  tone = "paper",
}: PageHeroProps) {
  const isPaper = tone === "paper";

  return (
    <Section
      tone={isPaper ? "white" : "navy"}
      padding={padding}
      className={cn("relative", className)}
    >
      <Stack gap="lg" className={cn("max-w-[920px]", contentClassName)}>
        {eyebrow ? (
          <Eyebrow tone={isPaper ? "subtle" : undefined}>{eyebrow}</Eyebrow>
        ) : null}
        <Text variant="display" tone={isPaper ? "ink" : "white"}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            variant="h3"
            tone={isPaper ? "muted" : "coral"}
            className="max-w-[760px] font-sans text-xl font-normal md:text-2xl"
          >
            {subtitle}
          </Text>
        ) : null}
        {lead ? (
          <Text
            variant="lead"
            tone={isPaper ? "muted" : "white-75"}
            className="max-w-[680px]"
          >
            {lead}
          </Text>
        ) : null}
        {children}
      </Stack>
    </Section>
  );
}
