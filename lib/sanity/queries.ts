// GROQ queries and the raw shapes Sanity returns for each document type.

const INSIGHT_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  "image": image.asset->url,
  imageUrl,
  date,
  readTime,
  author,
  keyTakeaways,
  body,
  sources,
  _updatedAt,
  _createdAt
`;

export const INSIGHTS_QUERY = `*[_type == "insight"] | order(date desc){${INSIGHT_FIELDS}}`;

export const INSIGHT_BY_SLUG_QUERY = `*[_type == "insight" && slug.current == $slug][0]{${INSIGHT_FIELDS}}`;

const ENGAGEMENT_FIELDS = `
  name,
  "slug": slug.current,
  order,
  tagline,
  forBuyer,
  buyerSentence,
  problem,
  included,
  duration,
  price,
  outcome,
  oneLineOutcome,
  qualifiers,
  notForYouIf,
  timeline[]{label, focus, detail},
  caseStudyId,
  caseStudyName,
  caseStudySector,
  caseStudyOutcome
`;

export const ENGAGEMENTS_QUERY = `*[_type == "engagement"] | order(order asc){${ENGAGEMENT_FIELDS}}`;

export const ENGAGEMENT_BY_SLUG_QUERY = `*[_type == "engagement" && slug.current == $slug][0]{${ENGAGEMENT_FIELDS}}`;

const CASE_STUDY_FIELDS = `
  "id": slug.current,
  order,
  company,
  sector,
  service,
  summary,
  challenge,
  solution,
  results,
  stats[]{value, label, icon},
  outcome
`;

export const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(order asc){${CASE_STUDY_FIELDS}}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  beliefs[]{number, headline, body}
}`;

export interface SanityInsight {
  _id: string;
  title: string;
  slug: string | null;
  category?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  date?: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  body?: string;
  sources?: string;
  _updatedAt?: string;
  _createdAt?: string;
}

export interface SanityEngagement {
  name: string;
  slug: string | null;
  order?: number;
  tagline?: string;
  forBuyer?: string;
  buyerSentence?: string;
  problem?: string[];
  included?: string[];
  duration?: string;
  price?: string;
  outcome?: string;
  oneLineOutcome?: string;
  qualifiers?: string[];
  notForYouIf?: string[];
  timeline?: { label?: string; focus?: string; detail?: string }[];
  caseStudyId?: string;
  caseStudyName?: string;
  caseStudySector?: string;
  caseStudyOutcome?: string;
}

export interface SanityCaseStudy {
  id: string | null;
  order?: number;
  company: string;
  sector?: string;
  service?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  stats?: { value?: string; label?: string; icon?: string }[];
  outcome?: string;
}

export interface SanitySiteSettings {
  beliefs?: { number?: string; headline?: string; body?: string[] }[];
}
