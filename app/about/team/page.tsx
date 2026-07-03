import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partnership Team | Amplified',
  description: 'Meet the partnership team behind Amplified. Four expert partners with deep experience in AI governance, structured delivery, and capability building for regulated industries.',
  openGraph: {
    title: 'Our Partnership Team | Amplified',
    description: 'Meet the partnership team behind Amplified. Four expert partners with deep experience in AI governance, structured delivery, and capability building for regulated industries.',
    url: 'https://amplified.co.uk/about/team',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partnership Team | Amplified',
    description: 'Meet the partnership team behind Amplified. Four expert partners with deep experience in AI governance, structured delivery, and capability building for regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/about/team',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import AboutTeam from '../../../client/src/pages/about-team';

export default function Page() {
  return <PageWrapper component={AboutTeam} />;
}
