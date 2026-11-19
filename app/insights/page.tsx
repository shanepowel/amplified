import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | AI Governance & Structured Delivery Research | bmkrs',
  description: 'Practical thinking for delivery-led organisations. Expert insights on AI governance, structured delivery, and capability building across infrastructure, energy, financial services, public and private sector.',
  openGraph: {
    title: 'Insights | AI Governance & Structured Delivery Research | bmkrs',
    description: 'Practical thinking for delivery-led organisations. Expert insights on AI governance, structured delivery, and capability building across infrastructure, energy, financial services, public and private sector.',
    url: 'https://bmkrs.com/insights',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | AI Governance & Structured Delivery Research | bmkrs',
    description: 'Practical thinking for delivery-led organisations. Expert insights on AI governance, structured delivery, and capability building across infrastructure, energy, financial services, public and private sector.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/insights',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Insights from '../../client/src/pages/insights';

export default function Page() {
  return <PageWrapper component={Insights} />;
}
