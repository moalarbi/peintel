import { createNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en', 'ar'] as const;

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales });
