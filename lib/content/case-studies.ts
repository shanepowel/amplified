import {
  caseStudies as fallbackCaseStudies,
  type CaseStudy,
  type CaseStudyIconKey,
} from '../../client/src/lib/case-studies';
import { sanityFetch } from '../sanity/client';
import { CASE_STUDIES_QUERY, type SanityCaseStudy } from '../sanity/queries';

const ICON_KEYS: CaseStudyIconKey[] = ['users', 'clock', 'trending', 'award'];

function toIconKey(value?: string): CaseStudyIconKey {
  return ICON_KEYS.includes(value as CaseStudyIconKey)
    ? (value as CaseStudyIconKey)
    : 'trending';
}

function mapCaseStudy(d: SanityCaseStudy): CaseStudy {
  return {
    id: d.id ?? '',
    sector: d.sector ?? '',
    company: d.company,
    service: d.service ?? '',
    challenge: d.challenge ?? '',
    solution: d.solution ?? '',
    results: d.results ?? [],
    stats: (d.stats ?? []).map((s) => ({
      value: s.value ?? '',
      label: s.label ?? '',
      icon: toIconKey(s.icon),
    })),
    outcome: d.outcome ?? '',
  };
}

/**
 * Case studies for the public pages. Prefers Sanity; falls back to the bundled
 * list when Sanity is not configured or empty.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const docs = await sanityFetch<SanityCaseStudy[]>(CASE_STUDIES_QUERY);
  if (docs && docs.length > 0) {
    return docs.filter((d) => d.id && d.company).map(mapCaseStudy);
  }
  return fallbackCaseStudies;
}

/**
 * Short summaries used by the assistant. Prefers a Sanity `summary` field and
 * falls back to deriving one from the challenge and outcome.
 */
export async function getCaseStudySummaries(): Promise<
  { company: string; sector: string; service: string; summary: string }[]
> {
  const docs = await sanityFetch<SanityCaseStudy[]>(CASE_STUDIES_QUERY);
  if (docs && docs.length > 0) {
    return docs
      .filter((d) => d.company)
      .map((d) => ({
        company: d.company,
        sector: d.sector ?? '',
        service: d.service ?? '',
        summary: d.summary || [d.challenge, d.outcome].filter(Boolean).join(' '),
      }));
  }
  return fallbackCaseStudies.map((c) => ({
    company: c.company,
    sector: c.sector,
    service: c.service,
    summary: [c.challenge, c.outcome].filter(Boolean).join(' '),
  }));
}
