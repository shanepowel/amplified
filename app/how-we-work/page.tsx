import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Work | The Amp Model | bmkrs',
  description: 'Three clear phases: Assess, Implement, Embed. Defined outputs, governance checkpoints, and built-in capability transfer in every engagement.',
  openGraph: {
    title: 'How We Work | The Amp Model | bmkrs',
    description: 'Three clear phases: Assess, Implement, Embed. Defined outputs, governance checkpoints, and built-in capability transfer in every engagement.',
    url: 'https://bmkrs.com/how-we-work',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | The Amp Model | bmkrs',
    description: 'Three clear phases: Assess, Implement, Embed. Defined outputs, governance checkpoints, and built-in capability transfer in every engagement.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/how-we-work',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import HowWeWork from '../../client/src/pages/how-we-work';

export default function Page() {
  return <PageWrapper component={HowWeWork} />;
}
