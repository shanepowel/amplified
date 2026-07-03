import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ampStore | Practitioner-Focused Capability Resources | Amplified',
  description: 'The ampStore is Amplified\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six AMP service lines.',
  openGraph: {
    title: 'ampStore | Practitioner-Focused Capability Resources | Amplified',
    description: 'The ampStore is Amplified\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six AMP service lines.',
    url: 'https://amplified.co.uk/amp-store',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ampStore | Practitioner-Focused Capability Resources | Amplified',
    description: 'The ampStore is Amplified\'s curated capability catalogue. Frameworks, tools, and learning resources aligned to the six AMP service lines.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/amp-store',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import AmpStore from '../../client/src/pages/amp-store';

export default function Page() {
  return <PageWrapper component={AmpStore} />;
}
