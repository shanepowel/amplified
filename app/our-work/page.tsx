import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Client Projects, Apps, Digital Transformation | Amplified',
  description: 'Amplified\'s portfolio: website builds, apps, digital transformation projects, ampStore, sustainability commitments, and charitable efforts.',
  openGraph: {
    title: 'Our Work | Client Projects, Apps, Digital Transformation | Amplified',
    description: 'Amplified\'s portfolio: website builds, apps, digital transformation projects, ampStore, sustainability commitments, and charitable efforts.',
    url: 'https://amplified.co.uk/our-work',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Client Projects, Apps, Digital Transformation | Amplified',
    description: 'Amplified\'s portfolio: website builds, apps, digital transformation projects, ampStore, sustainability commitments, and charitable efforts.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/our-work',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import OurWork from '../../client/src/pages/our-work';

export default function Page() {
  return <PageWrapper component={OurWork} />;
}
