import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEngagementBySlug } from '../../../lib/content/engagements';
import EngagementDetailClient from '../../../client/src/components/engagement-detail-client';

export const metadata: Metadata = {
  title: 'Squad Blueprint | Operating Model Engagement | Amplified',
  description: 'A six-week engagement for delivery directors running engineering teams of fifty or more. Operating model redesign with named accountabilities and a 90-day plan.',
  openGraph: {
    title: 'Squad Blueprint | Operating Model Engagement | Amplified',
    description: 'A six-week engagement for delivery directors running engineering teams of fifty or more. Operating model redesign with named accountabilities and a 90-day plan.',
    url: 'https://amplified.co.uk/engagements/squad-blueprint',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squad Blueprint | Six-week operating model engagement | Amplified',
    description: 'A six-week engagement for delivery directors running engineering teams of fifty people or more. Operating model redesign and 90-day adoption plan.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/engagements/squad-blueprint',
  },
};

export default async function Page() {
  const engagement = await getEngagementBySlug('squad-blueprint');
  if (!engagement) notFound();
  return <EngagementDetailClient engagement={engagement} />;
}
