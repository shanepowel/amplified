import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching | BMK 05 | bmkrs',
  description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
  openGraph: {
    title: 'Coaching | BMK 05 | bmkrs',
    description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
    url: 'https://bmkrs.com/coaching',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching | BMK 05 | bmkrs',
    description: 'Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/coaching',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Coaching from '../../client/src/pages/coaching';

export default function Page() {
  return <PageWrapper component={Coaching} />;
}
