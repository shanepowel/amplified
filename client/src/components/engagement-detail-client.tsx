'use client';

import { useConsultation } from '@/lib/consultation-context';
import EngagementDetailContent from '@/components/engagement-detail-content';
import type { Engagement } from '@/lib/engagements';

export default function EngagementDetailClient({ engagement }: { engagement: Engagement }) {
  const { openConsultation } = useConsultation();
  return <EngagementDetailContent engagement={engagement} onOpenConsultation={openConsultation} />;
}
