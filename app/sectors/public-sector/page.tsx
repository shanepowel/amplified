import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Public Sector | GDS Aligned | Amplified',
  description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  openGraph: {
    title: 'AI Governance for Public Sector | GDS Aligned | Amplified',
    description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
    url: 'https://amplified.co.uk/sectors/public-sector',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Public Sector | GDS Aligned | Amplified',
    description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/sectors/public-sector',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorPublicSector from '../../../client/src/pages/sectors/public-sector';

export default function Page() {
  return <PageWrapper component={SectorPublicSector} />;
}
