import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEngagementBySlug } from '../../../lib/content/engagements';
import EngagementDetailClient from '../../../client/src/components/engagement-detail-client';

export const metadata: Metadata = {
  title: 'The Forge | Four-week programme launch intensive for SROs | bmkrs',
  description: 'The Forge is a four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
  openGraph: {
    title: 'The Forge | Four-week programme launch intensive for SROs | bmkrs',
    description: 'A four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
    url: 'https://bmkrs.com/engagements/the-forge',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Forge | Four-week programme launch intensive | bmkrs',
    description: 'A four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/engagements/the-forge',
  },
};

export default async function Page() {
  const engagement = await getEngagementBySlug('the-forge');
  if (!engagement) notFound();
  return <EngagementDetailClient engagement={engagement} />;
}
