import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Amplified',
  description: 'Amplified\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | Amplified',
    description: 'Amplified\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
    url: 'https://amplified.co.uk/privacy',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Amplified',
    description: 'Amplified\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/privacy',
  },
};

import Privacy from '../../client/src/pages/privacy';

export default function Page() {
  return <Privacy />;
}
