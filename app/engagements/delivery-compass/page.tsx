import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEngagementBySlug } from '../../../lib/content/engagements';
import EngagementDetailClient from '../../../client/src/components/engagement-detail-client';

export const metadata: Metadata = {
  title: 'Delivery Compass | AI Governance and Delivery | Amplified',
  description: 'An eight-week engagement aligning AI governance with delivery in regulated industries. Inventory, risk classification, framework, and 90-day plan.',
  openGraph: {
    title: 'Delivery Compass | AI Governance and Delivery | Amplified',
    description: 'An eight-week engagement aligning AI governance with delivery in regulated industries. Inventory, risk classification, framework, and 90-day plan.',
    url: 'https://amplified.co.uk/engagements/delivery-compass',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delivery Compass | AI governance and delivery alignment | Amplified',
    description: 'An eight-week engagement aligning AI governance with delivery in regulated industries. Inventory, risk classification, governance framework, 90-day action plan.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/engagements/delivery-compass',
  },
};

export default async function Page() {
  const engagement = await getEngagementBySlug('delivery-compass');
  if (!engagement) notFound();
  return <EngagementDetailClient engagement={engagement} />;
}
