'use client';

import type { Engagement } from '@/lib/engagements';
import Home from '@/pages/home';
import { PageWrapper } from './page-wrapper';

interface HomePageClientProps {
  engagements: Engagement[];
}

function HomeWithData({
  engagements,
  onOpenConsultation,
}: {
  engagements: Engagement[];
  onOpenConsultation: (serviceType?: string) => void;
}) {
  return <Home onOpenConsultation={onOpenConsultation} engagements={engagements} />;
}

export function HomePageClient({ engagements }: HomePageClientProps) {
  const Component = (props: { onOpenConsultation: (serviceType?: string) => void }) => (
    <HomeWithData {...props} engagements={engagements} />
  );

  return <PageWrapper component={Component} />;
}
