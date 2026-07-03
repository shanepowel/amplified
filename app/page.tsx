import type { Metadata } from 'next';

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

import { PageWrapper } from '../client/src/components/page-wrapper';
import Home from '../client/src/pages/home';

export default function Page() {
  return <PageWrapper component={Home} />;
}
