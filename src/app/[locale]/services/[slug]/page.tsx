import { notFound } from 'next/navigation';
import ServicePageClient from '@/components/sections/ServicePageClient';

const VALID_SERVICES = [
  'peinture-interieure',
  'peinture-exterieure',
  'peinture-airless',
  'peinture-isolante',
  'beton-cire',
  'revetement-sol',
  'revetement-mural'
];

export function generateStaticParams() {
  return VALID_SERVICES.map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  if (!VALID_SERVICES.includes(slug)) {
    notFound();
  }

  return <ServicePageClient locale={locale} slug={slug} />;
}
