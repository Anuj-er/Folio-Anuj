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
      e.preventDefault();
      const element = document.getElementById(href.replace('/', '').replace('#', ''));
      if (element) {
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
