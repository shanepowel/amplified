import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { AnalyticsScripts, GoogleTagManagerNoScript } from '../client/src/components/analytics-scripts';
import { Providers } from '../client/src/components/providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-fraunces',
});

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://amplified.co.uk/#organisation',
      name: 'Amplified',
      legalName: 'Amplified Ltd',
      url: 'https://amplified.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://amplified.co.uk/favicon.png',
        width: 200,
        height: 60,
      },
      description:
        'Amplified helps organisations embed AI and run complex change without losing the accountability frameworks that make delivery stick. AI governance, structured delivery, and capability building.',
      foundingDate: '2020',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7 Bell Yard',
        addressLocality: 'London',
        postalCode: 'WC2A 2JR',
        addressCountry: 'GB',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@amplified.co.uk',
        contactType: 'customer service',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      knowsAbout: [
        'AI Governance',
        'AI Implementation',
        'Responsible AI',
        'EU AI Act',
        'Technology Implementation',
        'Agile Delivery',
        'Programme Management',
        'Operating Model Design',
        'Capability Building',
        'Structured Delivery',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Amplified Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Governance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Implementation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Delivery' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Capability Building' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coaching' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tech Build' } },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/company/amplified-consultancy',
        'https://www.instagram.com/amplifiedco',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://amplified.co.uk/#website',
      url: 'https://amplified.co.uk',
      name: 'Amplified',
      description: 'AI Governance & Technology Delivery for Complex Change',
      publisher: { '@id': 'https://amplified.co.uk/#organisation' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://amplified.co.uk/insights?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amplified.co.uk'),
  title: 'Amplified | Rigour for serious change',
  description:
    'Amplified is a productised digital consultancy for leaders responsible for delivery. We help organisations embed AI and run complex change with the accountability frameworks that make delivery stick.',
  openGraph: {
    title: 'Amplified | Rigour for serious change',
    description:
      'A productised digital consultancy for leaders responsible for delivery. AI implementation and governance, structured delivery, and capability building.',
    url: 'https://amplified.co.uk',
    siteName: 'Amplified',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplified | Rigour for serious change',
    description:
      'A productised digital consultancy for leaders responsible for delivery. AI implementation and governance, structured delivery, and capability building.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <Providers>{children}</Providers>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
