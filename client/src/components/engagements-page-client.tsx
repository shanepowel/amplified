'use client';

import type { Engagement } from '@/lib/engagements';
import Engagements from '@/pages/engagements';
import { PageWrapper } from './page-wrapper';

interface EngagementsPageClientProps {
  engagements: Engagement[];
}

function EngagementsWithData({
  engagements,
  onOpenConsultation,
}: {
  engagements: Engagement[];
  onOpenConsultation: (serviceType?: string) => void;
}) {
  return <Engagements onOpenConsultation={onOpenConsultation} engagements={engagements} />;
}

export function EngagementsPageClient({ engagements }: EngagementsPageClientProps) {
  const Component = (props: { onOpenConsultation: (serviceType?: string) => void }) => (
    <EngagementsWithData {...props} engagements={engagements} />
  );

  return <PageWrapper component={Component} />;
}
