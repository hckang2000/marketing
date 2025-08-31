'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_ID } from '@/lib/gtag';

export function GAProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;

    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
