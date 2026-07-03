import type { ContentItem } from '@shared/schema';
import { sanityFetch } from '../sanity/client';
import {
  INSIGHTS_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  type SanityInsight,
} from '../sanity/queries';
import { cmsService } from '../services/cms';

function mapInsight(doc: SanityInsight): ContentItem {
  const date = doc.date || doc._createdAt;
  return {
    id: doc._id,
    type: 'insight',
    title: doc.title,
    slug: doc.slug ?? doc._id,
    content: {
      type: doc.category,
      description: doc.description,
      body: doc.body,
      image: doc.image || doc.imageUrl,
      date,
      readTime: doc.readTime,
      author: doc.author,
      keyTakeaways: doc.keyTakeaways,
      sources: doc.sources,
    },
    status: 'published',
    modifiedBy: 'sanity',
    version: 1,
    lastModified: doc._updatedAt ? new Date(doc._updatedAt) : new Date(),
    createdAt: date ? new Date(date) : new Date(),
  } as unknown as ContentItem;
}

/**
 * Insights for the listing page. Prefers Sanity; falls back to the bundled
 * Postgres-backed content when Sanity is not configured or has no documents.
 */
export async function getInsights(): Promise<ContentItem[]> {
  const docs = await sanityFetch<SanityInsight[]>(INSIGHTS_QUERY);
  if (docs && docs.length > 0) {
    return docs.filter((d) => d.slug).map(mapInsight);
  }
  return cmsService.getContentByType('insight', 'published');
}

export async function getInsightBySlug(slug: string): Promise<ContentItem | null> {
  const doc = await sanityFetch<SanityInsight | null>(INSIGHT_BY_SLUG_QUERY, { slug });
  if (doc && doc.slug) {
    return mapInsight(doc);
  }
  return cmsService.getContentBySlug(slug);
}
