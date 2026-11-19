import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Centre | bmkrs',
  description: 'Press resources, brand assets, and media information for bmkrs.',
  openGraph: {
    title: 'Press Centre | bmkrs',
    description: 'Press resources, brand assets, and media information for bmkrs.',
    url: 'https://bmkrs.com/press',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Centre | bmkrs',
    description: 'Press resources, brand assets, and media information for bmkrs.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/press',
  },
};

import Press from '../../client/src/pages/press';

export default function Page() {
  return <Press />;
}
