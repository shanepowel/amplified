'use client';

import { useConsultation } from '@/lib/consultation-context';
import CaseStudies from '@/pages/case-studies';
import type { CaseStudy } from '@/lib/case-studies';

export default function CaseStudiesClient({ items }: { items: CaseStudy[] }) {
  const { openConsultation } = useConsultation();
  return <CaseStudies items={items} onOpenConsultation={openConsultation} />;
}
