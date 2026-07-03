import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Amplified',
  description: 'Terms and conditions governing use of the Amplified website and services.',
  openGraph: {
    title: 'Terms of Use | Amplified',
    description: 'Terms and conditions governing use of the Amplified website and services.',
    url: 'https://amplified.co.uk/terms',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Amplified',
    description: 'Terms and conditions governing use of the Amplified website and services.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/terms',
  },
};

import Terms from '../../client/src/pages/terms';

export default function Page() {
  return <Terms />;
}
