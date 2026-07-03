import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Amp Model | Our Methodology | Amplified',
  description: 'Assess, Implement, Amplify. The Amp Model is Amplified\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
  openGraph: {
    title: 'The Amp Model | Our Methodology | Amplified',
    description: 'Assess, Implement, Amplify. The Amp Model is Amplified\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
    url: 'https://amplified.co.uk/about/methodology',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Amp Model | Our Methodology | Amplified',
    description: 'Assess, Implement, Amplify. The Amp Model is Amplified\'s structured methodology for embedding new technologies and building lasting capability in regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/about/methodology',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import AboutMethodology from '../../../client/src/pages/about-methodology';

export default function Page() {
  return <PageWrapper component={AboutMethodology} />;
}
