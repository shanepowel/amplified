import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Financial Services | Amplified',
  description: 'FCA-aligned AI governance, EU AI Act compliance, and model risk management for banks, insurers, and regulated financial services firms.',
  openGraph: {
    title: 'AI Governance for Financial Services | Amplified',
    description: 'FCA-aligned AI governance, EU AI Act compliance, and model risk management for banks, insurers, and regulated financial services firms.',
    url: 'https://amplified.co.uk/sectors/financial-services',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Financial Services | Amplified',
    description: 'FCA-aligned AI governance, EU AI Act compliance, and model risk management for banks, insurers, and regulated financial services firms.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/sectors/financial-services',
  },
};

import { PageWrapper } from '../../../client/src/components/page-wrapper';
import SectorFinancialServices from '../../../client/src/pages/sectors/financial-services';

export default function Page() {
  return <PageWrapper component={SectorFinancialServices} />;
}
