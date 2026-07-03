import type { Metadata } from 'next';
import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorTechnology from '../../../client/src/pages/sectors/technology';

export const metadata: Metadata = {
  title: 'AI Governance and Delivery for Technology | Amplified',
  description:
    'Amplified helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
  openGraph: {
    title: 'AI Governance and Delivery for Technology | Amplified',
    description:
      'Amplified helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
    url: 'https://amplified.co.uk/sectors/technology',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance and Delivery for Technology | Amplified',
    description:
      'Amplified helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/sectors/technology',
  },
};

export default function Page() {
  return <PageWrapper component={SectorTechnology} />;
}
