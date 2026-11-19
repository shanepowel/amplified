import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact bmkrs | London and Porto Offices',
  description: 'Get in touch with the bmkrs partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
  openGraph: {
    title: 'Contact bmkrs | London and Porto Offices',
    description: 'Get in touch with the bmkrs partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
    url: 'https://bmkrs.com/contact',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact bmkrs | London and Porto Offices',
    description: 'Get in touch with the bmkrs partnership. Offices in London and Porto. We work across infrastructure, energy, financial services, and the public sector.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/contact',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Contact from '../../client/src/pages/contact';

export default function Page() {
  return <PageWrapper component={Contact} />;
}
