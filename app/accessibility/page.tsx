import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Amplified',
  description: 'Amplified\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  openGraph: {
    title: 'Accessibility Statement | Amplified',
    description: 'Amplified\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
    url: 'https://amplified.co.uk/accessibility',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Statement | Amplified',
    description: 'Amplified\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/accessibility',
  },
};

import Accessibility from '../../client/src/pages/accessibility';

export default function Page() {
  return <Accessibility />;
}
