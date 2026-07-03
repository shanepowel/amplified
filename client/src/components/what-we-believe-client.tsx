'use client';

import { useConsultation } from '@/lib/consultation-context';
import WhatWeBelieve from '@/pages/what-we-believe';
import type { ManifestoClaim } from '@/lib/manifesto';

export default function WhatWeBelieveClient({ items }: { items: ManifestoClaim[] }) {
  const { openConsultation } = useConsultation();
  return <WhatWeBelieve items={items} onOpenConsultation={openConsultation} />;
}
