import type { Metadata } from 'next';
import { PageWrapper } from '../../client/src/components/page-wrapper';
import ForDigitalLeads from '../../client/src/pages/for-digital-leads';

export const metadata: Metadata = {
  title: 'AI Capability Building for Digital Leads and Heads of Digital | Amplified',
  description:
    'Amplified helps digital leads, heads of digital, and CDOs in regulated industries build lasting internal AI capability, embed tools at scale, and upskill teams without creating consultant dependency.',
  openGraph: {
    title: 'AI Capability Building for Digital Leads and Heads of Digital | Amplified',
    description:
      'Amplified helps digital leads, heads of digital, and CDOs in regulated industries build lasting internal AI capability, embed tools at scale, and upskill teams without creating consultant dependency.',
    url: 'https://amplified.co.uk/for-digital-leads',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Capability Building for Digital Leads and Heads of Digital | Amplified',
    description:
      'Amplified helps digital leads, heads of digital, and CDOs in regulated industries build lasting internal AI capability, embed tools at scale, and upskill teams without creating consultant dependency.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/for-digital-leads',
  },
};

export default function Page() {
  return <PageWrapper component={ForDigitalLeads} />;
}
