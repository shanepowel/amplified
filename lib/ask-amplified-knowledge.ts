import type { Engagement } from "../client/src/lib/engagements";
import { getAllEngagements } from "./content/engagements";
import { getCaseStudySummaries } from "./content/case-studies";
import { getManifestoClaims } from "./content/site-settings";

function engagementBlock(e: Engagement): string {
  return [
    `=== ENGAGEMENT: ${e.name} (slug: ${e.slug}) ===`,
    `Tagline: ${e.tagline}`,
    `Built for: ${e.forBuyer.replace(/^for /, "")}`,
    `Buyer profile: ${e.buyerSentence}`,
    `Duration: ${e.duration}`,
    `Investment: ${e.price}`,
    `Problem solved: ${e.problem.join(" ")}`,
    `What is included: ${e.included.map((i) => `- ${i}`).join("\n")}`,
    `Timeline: ${e.timeline.map((t) => `${t.label} — ${t.focus}: ${t.detail}`).join(" | ")}`,
    `What you have at the end: ${e.outcome}`,
    `Qualifiers (is this you?): ${e.qualifiers.map((q) => `- ${q}`).join("\n")}`,
    `Not for you if: ${e.notForYouIf.map((n) => `- ${n}`).join("\n")}`,
    `Reference case study: ${e.caseStudyName} (${e.caseStudySector}) — ${e.caseStudyOutcome}`,
    `One-line outcome: ${e.oneLineOutcome}`,
  ].join("\n");
}

export async function buildKnowledgeContext(focusSlug?: string): Promise<string> {
  const [engagements, manifesto, caseStudies] = await Promise.all([
    getAllEngagements(),
    getManifestoClaims(),
    getCaseStudySummaries(),
  ]);
  const focused = focusSlug ? engagements.filter((e) => e.slug === focusSlug) : [];
  const others = focusSlug ? engagements.filter((e) => e.slug !== focusSlug) : engagements;

  const parts: string[] = [];

  if (focused.length) {
    parts.push("# CURRENT ENGAGEMENT THE BUYER IS VIEWING\n" + focused.map(engagementBlock).join("\n\n"));
  }

  parts.push(
    (focusSlug ? "# OTHER ENGAGEMENTS (for comparison)\n" : "# ENGAGEMENTS\n") +
      others.map(engagementBlock).join("\n\n"),
  );

  parts.push(
    "# WHAT WE BELIEVE (manifesto)\n" +
      manifesto.map((m) => `## ${m.headline}\n${m.body.join(" ")}`).join("\n\n"),
  );

  parts.push(
    "# CASE STUDIES\n" +
      caseStudies
        .map((c) => `## ${c.company}, ${c.sector} (${c.service})\n${c.summary}`)
        .join("\n\n"),
  );

  return parts.join("\n\n");
}

export async function getEngagementName(slug?: string): Promise<string | undefined> {
  if (!slug) return undefined;
  const engagements = await getAllEngagements();
  return engagements.find((e) => e.slug === slug)?.name;
}
