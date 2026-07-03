import type { Metadata } from 'next';
import { PageWrapper } from '../../client/src/components/page-wrapper';
import ForDeliveryDirectors from '../../client/src/pages/for-delivery-directors';

export const metadata: Metadata = {
  title: 'Structured Delivery for Delivery Directors and Programme Directors | Amplified',
  description:
    'Amplified helps delivery directors and programme directors in regulated industries govern complex multi-vendor programmes, stabilise teams, and build delivery accountability that holds under scrutiny.',
  openGraph: {
    title: 'Structured Delivery for Delivery Directors and Programme Directors | Amplified',
    description:
      'Amplified helps delivery directors and programme directors in regulated industries govern complex multi-vendor programmes, stabilise teams, and build delivery accountability that holds under scrutiny.',
    url: 'https://amplified.co.uk/for-delivery-directors',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured Delivery for Delivery Directors and Programme Directors | Amplified',
    description:
      'Amplified helps delivery directors and programme directors in regulated industries govern complex multi-vendor programmes, stabilise teams, and build delivery accountability that holds under scrutiny.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/for-delivery-directors',
  },
};

export default function Page() {
  return <PageWrapper component={ForDeliveryDirectors} />;
}
