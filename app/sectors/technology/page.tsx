import type { Metadata } from 'next';
import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorTechnology from '../../../client/src/pages/sectors/technology';

export const metadata: Metadata = {
  title: 'AI Governance and Delivery for Technology | bmkrs',
  description:
    'bmkrs helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
  openGraph: {
    title: 'AI Governance and Delivery for Technology | bmkrs',
    description:
      'bmkrs helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
    url: 'https://bmkrs.com/sectors/technology',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance and Delivery for Technology | bmkrs',
    description:
      'bmkrs helps technology companies and scale-ups build AI governance, implement AI at scale, and develop delivery accountability for enterprise scrutiny.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/sectors/technology',
  },
};

export default function Page() {
  return <PageWrapper component={SectorTechnology} />;
}
