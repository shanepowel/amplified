import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stable Teams | The Team Rebaselining Framework | bmkrs Teams',
  description: 'Stable Teams is a trademarked framework from bmkrs Teams that helps organisations rebaseline their teams and operations to achieve sustained high performance. Not recruitment. Framework-led team transformation.',
  openGraph: {
    title: 'Stable Teams | The Team Rebaselining Framework | bmkrs Teams',
    description: 'Stable Teams is a trademarked framework from bmkrs Teams that helps organisations rebaseline their teams and operations to achieve sustained high performance. Not recruitment. Framework-led team transformation.',
    url: 'https://bmkrs.com/teams',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stable Teams | The Team Rebaselining Framework | bmkrs Teams',
    description: 'Stable Teams is a trademarked framework from bmkrs Teams that helps organisations rebaseline their teams and operations to achieve sustained high performance. Not recruitment. Framework-led team transformation.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/teams',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Teams from '../../client/src/pages/teams';

export default function Page() {
  return <PageWrapper component={Teams} />;
}
