import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Structured Delivery | Agile Without the Chaos | Amplified',
  description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
  openGraph: {
    title: 'Structured Delivery | Agile Without the Chaos | Amplified',
    description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
    url: 'https://amplified.co.uk/structured-delivery',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured Delivery | Agile Without the Chaos | Amplified',
    description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/structured-delivery',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import StructuredDelivery from '../../client/src/pages/structured-delivery';

export default function Page() {
  return <PageWrapper component={StructuredDelivery} />;
}
