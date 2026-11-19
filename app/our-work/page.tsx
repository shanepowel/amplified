import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Client Projects, Apps, Digital Transformation | bmkrs',
  description: 'bmkrs\'s portfolio: website builds, apps, digital transformation projects, bmkrs Store, sustainability commitments, and charitable efforts.',
  openGraph: {
    title: 'Our Work | Client Projects, Apps, Digital Transformation | bmkrs',
    description: 'bmkrs\'s portfolio: website builds, apps, digital transformation projects, bmkrs Store, sustainability commitments, and charitable efforts.',
    url: 'https://bmkrs.com/our-work',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Client Projects, Apps, Digital Transformation | bmkrs',
    description: 'bmkrs\'s portfolio: website builds, apps, digital transformation projects, bmkrs Store, sustainability commitments, and charitable efforts.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/our-work',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import OurWork from '../../client/src/pages/our-work';

export default function Page() {
  return <PageWrapper component={OurWork} />;
}
