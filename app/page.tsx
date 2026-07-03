import type { Metadata } from 'next';
import { getAllEngagements } from '../lib/content/engagements';
import { HomePageClient } from '../client/src/components/home-page-client';

export const metadata: Metadata = {
  title: 'Amplified | Rigour for serious change',
  description:
    'A productised digital consultancy for leaders accountable for AI, delivery, and the change that has to land. Three named engagements: Squad Blueprint, The Forge, Delivery Compass.',
  openGraph: {
    title: 'Amplified | Rigour for serious change',
    description:
      'A productised digital consultancy for leaders accountable for AI, delivery, and the change that has to land. Three named engagements: Squad Blueprint, The Forge, Delivery Compass.',
    url: 'https://amplified.co.uk/',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplified | Rigour for serious change',
    description:
      'A productised digital consultancy for leaders accountable for AI, delivery, and the change that has to land. Scoped to the engagement.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/',
  },
};

export default async function Page() {
  const engagements = await getAllEngagements();
  return <HomePageClient engagements={engagements} />;
}
