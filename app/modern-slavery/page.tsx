import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement | Amplified',
  description: 'Amplified\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  openGraph: {
    title: 'Modern Slavery Statement | Amplified',
    description: 'Amplified\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
    url: 'https://amplified.co.uk/modern-slavery',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Slavery Statement | Amplified',
    description: 'Amplified\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/modern-slavery',
  },
};

import ModernSlavery from '../../client/src/pages/modern-slavery';

export default function Page() {
  return <ModernSlavery />;
}
