import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bmkrs Store | Practitioner-Focused Capability Resources | bmkrs',
  description: 'The bmkrs Store is bmkrs\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six BMK service lines.',
  openGraph: {
    title: 'bmkrs Store | Practitioner-Focused Capability Resources | bmkrs',
    description: 'The bmkrs Store is bmkrs\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six BMK service lines.',
    url: 'https://bmkrs.com/amp-store',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bmkrs Store | Practitioner-Focused Capability Resources | bmkrs',
    description: 'The bmkrs Store is bmkrs\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six BMK service lines.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/amp-store',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import AmpStore from '../../client/src/pages/amp-store';

export default function Page() {
  return <PageWrapper component={AmpStore} />;
}
