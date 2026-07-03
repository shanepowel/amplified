import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Build | AMP 06 | Amplified',
  description: 'Hands-on technology build from engineers and architects who embed inside your teams. Custom software, AI-native systems, platform engineering, and legacy modernisation for regulated industries.',
  openGraph: {
    title: 'Tech Build | AMP 06 | Amplified',
    description: 'Hands-on technology build from engineers and architects who embed inside your teams. Custom software, AI-native systems, platform engineering, and legacy modernisation for regulated industries.',
    url: 'https://amplified.co.uk/transformation',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Build | AMP 06 | Amplified',
    description: 'Hands-on technology build from engineers and architects who embed inside your teams. Custom software, AI-native systems, platform engineering, and legacy modernisation for regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/transformation',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Transformation from '../../client/src/pages/transformation';

export default function Page() {
  return <PageWrapper component={Transformation} />;
}
