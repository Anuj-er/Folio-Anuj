'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useCallback } from 'react';

export const Item = ({
  children,
  href,
  className,
}: Readonly<{ children: React.ReactNode; href: string; className?: string }>) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Find target element by ID (e.g., from "/#about" to "about")
      const targetId = href.replace('/', '').replace('#', '');
      const element = targetId ? document.getElementById(targetId) : null;

      // Only prevent default if element exists on current page for smooth scroll
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [href],
  );

  return (
    <Link
      className={cn('font-semibold transition-all duration-300 hover:cursor-pointer hover:text-[#f0f0f0]', className)}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
