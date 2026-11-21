import { bmkPages } from "../client/src/content/bmk-pages";
import type { BmkBlock, BmkPageContent } from "../client/src/content/bmk-types";

/** Flatten one block of page content to plain text for the assistant's context. */
function blockText(b: BmkBlock): string {
  switch (b.type) {
    case "grid":
      return `${b.title}\n${b.items.map((i) => `- ${i.title}: ${i.body}`).join("\n")}`;
    case "steps":
      return `${b.title}\n${b.items.map((i) => `- ${i.title}: ${i.body}`).join("\n")}`;
    case "split":
      return `${b.title}\n${b.paragraphs.join(" ")}${b.list ? `\n${b.list.map((l) => `- ${l}`).join("\n")}` : ""}`;
    case "ledger":
      return `${b.title}${b.footnote ? ` (${b.footnote})` : ""}\n${b.items.map((i) => `- ${i.title}: ${i.body}${i.meta ? ` Result: ${i.meta}.` : ""}`).join("\n")}`;
    case "callout":
      return `${b.title} ${b.body}`;
    case "statement":
      return `${b.text} ${b.accent ?? ""}`;
    case "faq":
      return b.items.map((i) => `Q: ${i.q}\nA: ${i.a}`).join("\n");
    case "links":
      return "";
  }
}

function pageText(p: BmkPageContent): string {
  return [
    `=== PAGE: ${p.hero.eyebrow} (${p.path}) ===`,
    `${p.hero.title} ${p.hero.accent ?? ""}`.trim(),
    p.hero.lead,
    ...(p.hero.facts ?? []).map((f) => `${f.label}: ${f.value}`),
    ...p.blocks.map(blockText).filter(Boolean),
  ].join("\n");
}

export async function buildKnowledgeContext(focusPath?: string): Promise<string> {
  const pages = Object.values(bmkPages);
  const focused = focusPath ? pages.filter((p) => p.path === focusPath) : [];
  const others = pages.filter((p) => !focused.includes(p));
  const parts: string[] = [];
  if (focused.length) parts.push("# PAGE THE VISITOR IS VIEWING\n" + focused.map(pageText).join("\n\n"));
  parts.push("# BMKRS SITE CONTENT\n" + others.map(pageText).join("\n\n"));
  return parts.join("\n\n");
}

/** Kept for API compatibility; bmkrs no longer has named engagements. */
export async function getEngagementName(_slug?: string): Promise<string | undefined> {
  return undefined;
}
