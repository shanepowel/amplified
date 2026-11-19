import type { Metadata } from 'next';
import { PageWrapper } from '../../client/src/components/page-wrapper';
import Services from '../../client/src/pages/services';

export const metadata: Metadata = {
  title: 'Services | AI Governance, Implementation & Structured Delivery | bmkrs',
  description:
    'bmkrs services span AI governance, AI implementation, structured delivery, capability building, coaching, and tech build for regulated industries.',
  openGraph: {
    title: 'Services | bmkrs',
    description:
      'AI governance, AI implementation, structured delivery, capability building, coaching, and tech build for leaders accountable for delivery.',
    url: 'https://bmkrs.com/services',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | bmkrs',
    description:
      'AI governance, AI implementation, structured delivery, capability building, coaching, and tech build for regulated industries.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/services',
  },
};

export default function Page() {
  return <PageWrapper component={Services} />;
}
