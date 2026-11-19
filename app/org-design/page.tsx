import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Organisations | Self-Managing, AI-Powered | bmkrs',
  description: 'Replace slow hierarchies with self-managing, product-led operating models powered by AI. Holacracy, product org design, and AI integration as one system.',
  openGraph: {
    title: 'Autonomous Organisations | Self-Managing, AI-Powered | bmkrs',
    description: 'Replace slow hierarchies with self-managing, product-led operating models powered by AI. Holacracy, product org design, and AI integration as one system.',
    url: 'https://bmkrs.com/org-design',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous Organisations | Self-Managing, AI-Powered | bmkrs',
    description: 'Replace slow hierarchies with self-managing, product-led operating models powered by AI. Holacracy, product org design, and AI integration as one system.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/org-design',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import OrgDesign from '../../client/src/pages/org-design';

export default function Page() {
  return <PageWrapper component={OrgDesign} />;
}
