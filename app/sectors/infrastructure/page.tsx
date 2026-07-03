import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Infrastructure Programmes | Amplified',
  description: 'AI governance and structured delivery for infrastructure and construction organisations. Built for NEC contracts, PMO governance, and capital programmes.',
  openGraph: {
    title: 'AI Governance for Infrastructure Programmes | Amplified',
    description: 'AI governance and structured delivery for infrastructure and construction organisations. Built for NEC contracts, PMO governance, and capital programmes.',
    url: 'https://amplified.co.uk/sectors/infrastructure',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Infrastructure Programmes | Amplified',
    description: 'AI governance and structured delivery for infrastructure and construction organisations. Built for NEC contracts, PMO governance, and capital programmes.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/sectors/infrastructure',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorInfrastructure from '../../../client/src/pages/sectors/infrastructure';

export default function Page() {
  return <PageWrapper component={SectorInfrastructure} />;
}
