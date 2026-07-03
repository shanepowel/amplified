import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Amplified | Our Story, Values, and Why We Exist',
  description: 'Amplified was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
  openGraph: {
    title: 'About Amplified | Our Story, Values, and Why We Exist',
    description: 'Amplified was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
    url: 'https://amplified.co.uk/about',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Amplified | Our Story, Values, and Why We Exist',
    description: 'Amplified was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/about',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import About from '../../client/src/pages/about';

export default function Page() {
  return <PageWrapper component={About} />;
}
