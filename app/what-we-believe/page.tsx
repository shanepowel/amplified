import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What we believe | Five claims about how delivery should work | Amplified',
  description: 'Five plain-English claims about how digital transformation, AI governance, and delivery should work in regulated industries. Written down so you know what you are buying before you buy it.',
  openGraph: {
    title: 'What we believe | Five claims about how delivery should work | Amplified',
    description: 'Five plain-English claims about how digital transformation, AI governance, and delivery should work in regulated industries.',
    url: 'https://amplified.co.uk/what-we-believe',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What we believe | Five claims about how delivery should work | Amplified',
    description: 'Five plain-English claims about how digital transformation, AI governance, and delivery should work in regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/what-we-believe',
  },
};

import WhatWeBelieveClient from '../../client/src/components/what-we-believe-client';
import { getManifestoClaims } from '../../lib/content/site-settings';

export default async function Page() {
  const items = await getManifestoClaims();
  return <WhatWeBelieveClient items={items} />;
}
