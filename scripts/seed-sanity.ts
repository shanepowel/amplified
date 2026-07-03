/**
 * Seeds the Sanity dataset with the bundled engagements, insights, case
 * studies, and manifesto so the new CMS starts populated.
 *
 * Requirements (set in .env.local before running):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET            (defaults to "production")
 *   SANITY_API_WRITE_TOKEN                (Editor/Write token)
 *   DATABASE_URL                          (only needed to migrate insights)
 *
 * Run with:  npm run seed:sanity
 */
import { createClient } from '@sanity/client';
import { engagements } from '../client/src/lib/engagements';
import { manifestoClaims } from '../client/src/lib/manifesto';
import { caseStudies } from '../client/src/lib/case-studies';
import { storage } from '../lib/storage';
import type { ContentItem } from '../shared/schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Aborting.');
  process.exit(1);
}
if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN (needs Editor/Write access). Aborting.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function seedEngagements() {
  console.log(`Seeding ${engagements.length} engagements...`);
  for (let i = 0; i < engagements.length; i++) {
    const e = engagements[i];
    await client.createOrReplace({
      _id: `engagement-${e.slug}`,
      _type: 'engagement',
      name: e.name,
      slug: { _type: 'slug', current: e.slug },
      order: i,
      tagline: e.tagline,
      forBuyer: e.forBuyer,
      buyerSentence: e.buyerSentence,
      problem: e.problem,
      included: e.included,
      duration: e.duration,
      price: e.price,
      outcome: e.outcome,
      oneLineOutcome: e.oneLineOutcome,
      qualifiers: e.qualifiers,
      notForYouIf: e.notForYouIf,
      timeline: e.timeline.map((t, idx) => ({
        _key: `t${idx}`,
        label: t.label,
        focus: t.focus,
        detail: t.detail,
      })),
      caseStudyId: e.caseStudyId,
      caseStudyName: e.caseStudyName,
      caseStudySector: e.caseStudySector,
      caseStudyOutcome: e.caseStudyOutcome,
    });
    console.log(`  - ${e.name}`);
  }
}

async function seedCaseStudies() {
  console.log(`Seeding ${caseStudies.length} case studies...`);
  for (let i = 0; i < caseStudies.length; i++) {
    const c = caseStudies[i];
    const summary = [c.challenge, c.outcome].filter(Boolean).join(' ');
    await client.createOrReplace({
      _id: `caseStudy-${c.id}`,
      _type: 'caseStudy',
      company: c.company,
      slug: { _type: 'slug', current: c.id },
      order: i,
      sector: c.sector,
      service: c.service,
      summary,
      challenge: c.challenge,
      solution: c.solution,
      results: c.results,
      stats: c.stats.map((s, idx) => ({
        _key: `s${idx}`,
        value: s.value,
        label: s.label,
        icon: s.icon,
      })),
      outcome: c.outcome,
    });
    console.log(`  - ${c.company}`);
  }
}

async function seedSiteSettings() {
  console.log('Seeding site settings (manifesto)...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Site settings',
    beliefs: manifestoClaims.map((b, idx) => ({
      _key: `b${idx}`,
      number: b.number,
      headline: b.headline,
      body: b.body,
    })),
  });
}

async function seedInsights() {
  let items: ContentItem[] = [];
  try {
    items = await storage.getContentItemsByType('insight');
  } catch (error) {
    console.warn('Could not read insights from the database (set DATABASE_URL to migrate them). Skipping insights.');
    return;
  }

  if (items.length === 0) {
    console.warn('No insights found in the database. Skipping insights.');
    return;
  }

  console.log(`Seeding ${items.length} insights...`);
  for (const item of items) {
    const content = (item.content || {}) as Record<string, unknown>;
    const slug = item.slug || slugify(item.title);
    await client.createOrReplace({
      _id: `insight-${slug}`,
      _type: 'insight',
      title: item.title,
      slug: { _type: 'slug', current: slug },
      category: (content.type as string) || undefined,
      description: (content.description as string) || undefined,
      imageUrl: (content.image as string) || undefined,
      date: (content.date as string) || undefined,
      readTime: (content.readTime as string) || undefined,
      author: (content.author as string) || undefined,
      keyTakeaways: (content.keyTakeaways as string[]) || undefined,
      body: (content.body as string) || undefined,
      sources: (content.sources as string) || undefined,
    });
    console.log(`  - ${item.title}`);
  }
}

async function main() {
  console.log(`Seeding Sanity project "${projectId}" (dataset "${dataset}")...\n`);
  await seedEngagements();
  await seedCaseStudies();
  await seedSiteSettings();
  await seedInsights();
  console.log('\nDone.');
}

main().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
