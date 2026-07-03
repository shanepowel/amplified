import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Centre | Amplified',
  description: 'Press resources, brand assets, and media information for Amplified.',
  openGraph: {
    title: 'Press Centre | Amplified',
    description: 'Press resources, brand assets, and media information for Amplified.',
    url: 'https://amplified.co.uk/press',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Centre | Amplified',
    description: 'Press resources, brand assets, and media information for Amplified.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/press',
  },
};

import Press from '../../client/src/pages/press';

export default function Page() {
  return <Press />;
}
