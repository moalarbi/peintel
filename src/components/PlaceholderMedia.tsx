'use client';

import { cn } from '@/lib/utils';

interface PlaceholderMediaProps {
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'hero' | 'hero-mobile';
  className?: string;
  label?: string;
}

export default function PlaceholderMedia({
  aspectRatio = 'video',
  className,
  label
}: PlaceholderMediaProps) {
  const ratios = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    hero: 'aspect-[16/9]', // 1600x900
    'hero-mobile': 'aspect-[1080/1350]', // 1080x1350
  };

  return (
    <div
      className={cn(
        'bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center',
        ratios[aspectRatio],
        className
      )}
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0c91eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      {label && <span className="sr-only">{label}</span>}
      <div className="w-12 h-12 rounded-full bg-white/50 blur-xl"></div>
    </div>
  );
}
