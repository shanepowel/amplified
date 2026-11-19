import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Amp Model | Our Methodology | bmkrs',
  description: 'Assess, Implement, Amplify. The Amp Model is bmkrs\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
  openGraph: {
    title: 'The Amp Model | Our Methodology | bmkrs',
    description: 'Assess, Implement, Amplify. The Amp Model is bmkrs\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
    url: 'https://bmkrs.com/about/methodology',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Amp Model | Our Methodology | bmkrs',
    description: 'Assess, Implement, Amplify. The Amp Model is bmkrs\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/about/methodology',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import AboutMethodology from '../../../client/src/pages/about-methodology';

export default function Page() {
  return <PageWrapper component={AboutMethodology} />;
}
