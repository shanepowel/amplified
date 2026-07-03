import type { Metadata } from 'next';
import { getAllEngagements } from '../../lib/content/engagements';
import { EngagementsPageClient } from '../../client/src/components/engagements-page-client';

export const metadata: Metadata = {
  title: 'Engagements | Productised consulting for delivery directors and CIOs | Amplified',
  description: 'Three named engagements: Squad Blueprint, The Forge, and Delivery Compass. Scoped and timed, built for delivery directors, programme leaders, and CIOs in regulated industries.',
  openGraph: {
    title: 'Engagements | Productised consulting for delivery directors and CIOs | Amplified',
    description: 'Three named engagements: Squad Blueprint, The Forge, and Delivery Compass. Scoped and timed.',
    url: 'https://amplified.co.uk/engagements',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engagements | Productised consulting for delivery directors and CIOs | Amplified',
    description: 'Three named engagements: Squad Blueprint, The Forge, and Delivery Compass. Scoped and timed.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/engagements',
  },
};

export default async function Page() {
  const engagements = await getAllEngagements();
  return <EngagementsPageClient engagements={engagements} />;
}
