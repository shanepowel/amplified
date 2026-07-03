import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capability Building | Build It In, Not Bolted On | Amplified',
  description: 'Product Owner development, Centres of Excellence, AI literacy programmes, agile practitioner training. We transfer real skills to your teams so you can run it yourselves.',
  openGraph: {
    title: 'Capability Building | Build It In, Not Bolted On | Amplified',
    description: 'Product Owner development, Centres of Excellence, AI literacy programmes, agile practitioner training. We transfer real skills to your teams so you can run it yourselves.',
    url: 'https://amplified.co.uk/capability',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capability Building | Build It In, Not Bolted On | Amplified',
    description: 'Product Owner development, Centres of Excellence, AI literacy programmes, agile practitioner training. We transfer real skills to your teams so you can run it yourselves.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/capability',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Capability from '../../client/src/pages/capability';

export default function Page() {
  return <PageWrapper component={Capability} />;
}
