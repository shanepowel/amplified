import type { Metadata } from 'next';
import { PageWrapper } from '../../client/src/components/page-wrapper';
import ForCIOs from '../../client/src/pages/for-cios';

export const metadata: Metadata = {
  title: 'AI Governance for Chief Information Officers | Amplified',
  description:
    'Amplified helps CIOs in regulated industries govern AI safely, satisfy board and regulatory scrutiny, and build delivery accountability frameworks that hold up under pressure.',
  openGraph: {
    title: 'AI Governance for Chief Information Officers | Amplified',
    description:
      'Amplified helps CIOs in regulated industries govern AI safely, satisfy board and regulatory scrutiny, and build delivery accountability frameworks that hold up under pressure.',
    url: 'https://amplified.co.uk/for-cios',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Chief Information Officers | Amplified',
    description:
      'Amplified helps CIOs in regulated industries govern AI safely, satisfy board and regulatory scrutiny, and build delivery accountability frameworks that hold up under pressure.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/for-cios',
  },
};

export default function Page() {
  return <PageWrapper component={ForCIOs} />;
}
