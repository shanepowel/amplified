import type { Metadata } from 'next';
import SEOOptimizer from '../../client/src/pages/seo-optimizer';

export const metadata: Metadata = {
  title: 'SEO Keyword Optimizer | Amplified',
  description:
    'Internal SEO analysis tool for Amplified content. Analyse keyword coverage, gaps, and recommendations for AI consultancy and digital transformation copy.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <SEOOptimizer />;
}
