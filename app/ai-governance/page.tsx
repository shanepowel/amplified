import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance for Regulated Industries | Amplified',
  description: 'Responsible AI governance frameworks, policies, and assurance for regulated industries. EU AI Act, FCA, and GDS aligned, board-ready structures.',
  openGraph: {
    title: 'AI Governance for Regulated Industries | Amplified',
    description: 'Responsible AI governance frameworks, policies, and assurance for regulated industries. EU AI Act, FCA, and GDS aligned, board-ready structures.',
    url: 'https://amplified.co.uk/ai-governance',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance for Regulated Industries | Amplified',
    description: 'Responsible AI governance frameworks, policies, and assurance for regulated industries. EU AI Act, FCA, and GDS aligned, board-ready structures.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/ai-governance',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import AiGovernance from '../../client/src/pages/ai-governance';

export default function Page() {
  return <PageWrapper component={AiGovernance} />;
}
