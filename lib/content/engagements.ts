import {
  engagements as fallbackEngagements,
  type Engagement,
} from '../../client/src/lib/engagements';
import { sanityFetch } from '../sanity/client';
import {
  ENGAGEMENTS_QUERY,
  ENGAGEMENT_BY_SLUG_QUERY,
  type SanityEngagement,
} from '../sanity/queries';

const DEFAULT_PRICE = 'Scoped to engagement, discussed during initial conversation.';

function mapEngagement(d: SanityEngagement): Engagement {
  return {
    slug: d.slug as string,
    name: d.name,
    tagline: d.tagline ?? '',
    buyerSentence: d.buyerSentence ?? '',
    problem: d.problem ?? [],
    included: d.included ?? [],
    duration: d.duration ?? '',
    price: d.price ?? DEFAULT_PRICE,
    outcome: d.outcome ?? '',
    caseStudyId: d.caseStudyId ?? '',
    caseStudyName: d.caseStudyName ?? '',
    caseStudySector: d.caseStudySector ?? '',
    caseStudyOutcome: d.caseStudyOutcome ?? '',
    notForYouIf: d.notForYouIf ?? [],
    forBuyer: d.forBuyer ?? '',
    qualifiers: d.qualifiers ?? [],
    timeline: (d.timeline ?? []).map((t) => ({
      label: t.label ?? '',
      focus: t.focus ?? '',
      detail: t.detail ?? '',
    })),
    oneLineOutcome: d.oneLineOutcome ?? '',
  };
}

/**
 * All engagements. Prefers Sanity; falls back to the bundled list when Sanity
 * is not configured or empty.
 */
export async function getAllEngagements(): Promise<Engagement[]> {
  const docs = await sanityFetch<SanityEngagement[]>(ENGAGEMENTS_QUERY);
  if (docs && docs.length > 0) {
    return docs.filter((d) => d.slug && d.name).map(mapEngagement);
  }
  return fallbackEngagements;
}

export async function getEngagementBySlug(slug: string): Promise<Engagement | null> {
  const doc = await sanityFetch<SanityEngagement | null>(ENGAGEMENT_BY_SLUG_QUERY, { slug });
  if (doc && doc.slug && doc.name) {
    return mapEngagement(doc);
  }
  return fallbackEngagements.find((e) => e.slug === slug) ?? null;
}
