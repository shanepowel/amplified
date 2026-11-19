import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Public Sector | GDS Aligned | bmkrs',
  description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  openGraph: {
    title: 'AI Governance for Public Sector | GDS Aligned | bmkrs',
    description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
    url: 'https://bmkrs.com/sectors/public-sector',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Public Sector | GDS Aligned | bmkrs',
    description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/sectors/public-sector',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorPublicSector from '../../../client/src/pages/sectors/public-sector';

export default function Page() {
  return <PageWrapper component={SectorPublicSector} />;
}
