import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEngagementBySlug } from '../../../lib/content/engagements';
import EngagementDetailClient from '../../../client/src/components/engagement-detail-client';

export const metadata: Metadata = {
  title: 'The Forge | Four-week programme launch intensive for SROs | Amplified',
  description: 'The Forge is a four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
  openGraph: {
    title: 'The Forge | Four-week programme launch intensive for SROs | Amplified',
    description: 'A four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
    url: 'https://amplified.co.uk/engagements/the-forge',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Forge | Four-week programme launch intensive | Amplified',
    description: 'A four-week launch intensive for programme directors and SROs starting major digital transformation programmes in regulated industries and government.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/engagements/the-forge',
  },
};

export default async function Page() {
  const engagement = await getEngagementBySlug('the-forge');
  if (!engagement) notFound();
  return <EngagementDetailClient engagement={engagement} />;
}
