import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Amplified | Join the Partnership',
  description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
  openGraph: {
    title: 'Careers at Amplified | Join the Partnership',
    description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
    url: 'https://amplified.co.uk/careers',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Amplified | Join the Partnership',
    description: 'Join a partnership that hires from all walks of life. Seasoned consultants delivering AI governance and structured change for regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/careers',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Careers from '../../client/src/pages/careers';

export default function Page() {
  return <PageWrapper component={Careers} />;
}
