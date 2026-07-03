import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching | AMP 05 | Amplified',
  description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
  openGraph: {
    title: 'Coaching | AMP 05 | Amplified',
    description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
    url: 'https://amplified.co.uk/coaching',
    siteName: 'Amplified',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching | AMP 05 | Amplified',
    description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
  },
  alternates: {
    canonical: 'https://amplified.co.uk/coaching',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Coaching from '../../client/src/pages/coaching';

export default function Page() {
  return <PageWrapper component={Coaching} />;
}
