import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at bmkrs | Join the Partnership',
  description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
  openGraph: {
    title: 'Careers at bmkrs | Join the Partnership',
    description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
    url: 'https://bmkrs.com/careers',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at bmkrs | Join the Partnership',
    description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/careers',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Careers from '../../client/src/pages/careers';

export default function Page() {
  return <PageWrapper component={Careers} />;
}
