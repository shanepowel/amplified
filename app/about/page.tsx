import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About bmkrs | Our Story, Values, and Why We Exist',
  description: 'bmkrs was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
  openGraph: {
    title: 'About bmkrs | Our Story, Values, and Why We Exist',
    description: 'bmkrs was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
    url: 'https://bmkrs.com/about',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About bmkrs | Our Story, Values, and Why We Exist',
    description: 'bmkrs was founded by delivery practitioners who had seen the same pattern repeat across regulated industries. We embed new technologies effectively, with AI at the forefront, for organisations where rigour is not optional.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/about',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import About from '../../client/src/pages/about';

export default function Page() {
  return <PageWrapper component={About} />;
}
