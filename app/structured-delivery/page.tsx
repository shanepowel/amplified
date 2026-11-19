import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Structured Delivery | Agile Without the Chaos | bmkrs',
  description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
  openGraph: {
    title: 'Structured Delivery | Agile Without the Chaos | bmkrs',
    description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
    url: 'https://bmkrs.com/structured-delivery',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured Delivery | Agile Without the Chaos | bmkrs',
    description: 'Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/structured-delivery',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import StructuredDelivery from '../../client/src/pages/structured-delivery';

export default function Page() {
  return <PageWrapper component={StructuredDelivery} />;
}
