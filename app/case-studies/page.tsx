import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Digital Transformation Case Studies | Amplified',
  description: 'Real digital transformation case studies from Amplified. See how we deliver structured, accountable change for organisations in regulated industries.',
  openGraph: {
    title: 'Our Work | Digital Transformation Case Studies | Amplified',
    description: 'Real digital transformation case studies from Amplified. See how we deliver structured, accountable change for organisations in regulated industries.',
    url: 'https://amplified.co.uk/case-studies',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Digital Transformation Case Studies | Amplified',
    description: 'Real digital transformation case studies from Amplified. See how we deliver structured, accountable change for organisations in regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/case-studies',
  },
};

import CaseStudiesClient from '../../client/src/components/case-studies-client';
import { getCaseStudies } from '../../lib/content/case-studies';

export default async function Page() {
  const items = await getCaseStudies();
  return <CaseStudiesClient items={items} />;
}
