import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Energy and Utilities | bmkrs',
  description: 'AI governance and safety-critical delivery frameworks for energy and utilities organisations. Ofgem aligned, with safety management integrated end to end.',
  openGraph: {
    title: 'AI Governance for Energy and Utilities | bmkrs',
    description: 'AI governance and safety-critical delivery frameworks for energy and utilities organisations. Ofgem aligned, with safety management integrated end to end.',
    url: 'https://bmkrs.com/sectors/energy-utilities',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Energy and Utilities | bmkrs',
    description: 'AI governance and safety-critical delivery frameworks for energy and utilities organisations. Ofgem aligned, with safety management integrated end to end.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/sectors/energy-utilities',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorEnergyUtilities from '../../../client/src/pages/sectors/energy-utilities';

export default function Page() {
  return <PageWrapper component={SectorEnergyUtilities} />;
}
