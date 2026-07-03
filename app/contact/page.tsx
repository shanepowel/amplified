import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Amplified | London and Porto Offices',
  description: 'Get in touch with the Amplified partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
  openGraph: {
    title: 'Contact Amplified | London and Porto Offices',
    description: 'Get in touch with the Amplified partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
    url: 'https://amplified.co.uk/contact',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Amplified | London and Porto Offices',
    description: 'Get in touch with the Amplified partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/contact',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Contact from '../../client/src/pages/contact';

export default function Page() {
  return <PageWrapper component={Contact} />;
}
