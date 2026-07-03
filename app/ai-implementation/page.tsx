import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Implementation for Regulated Industries | Amplified',
  description: 'End-to-end AI implementation with governance built in. Use case discovery, proof of concept, production delivery, and capability transfer.',
  openGraph: {
    title: 'AI Implementation for Regulated Industries | Amplified',
    description: 'End-to-end AI implementation with governance built in. Use case discovery, proof of concept, production delivery, and capability transfer.',
    url: 'https://amplified.co.uk/ai-implementation',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Implementation for Regulated Industries | Amplified',
    description: 'End-to-end AI implementation with governance built in. Use case discovery, proof of concept, production delivery, and capability transfer.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/ai-implementation',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import AiImplementation from '../../client/src/pages/ai-implementation';

export default function Page() {
  return <PageWrapper component={AiImplementation} />;
}
