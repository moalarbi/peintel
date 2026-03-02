'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PlaceholderMedia from '@/components/PlaceholderMedia';
import ServiceModal from '@/components/ui/ServiceModal';
import DevisModal from '@/components/ui/DevisModal';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  slug: string;
  title: string;
  desc: string;
  index: number;
}

export default function ServiceCard({ slug, title, desc, index }: ServiceCardProps) {
  const t = useTranslations('services');
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-500 flex flex-col h-full"
      >
        <div className="relative mb-6 rounded-2xl overflow-hidden">
          <PlaceholderMedia aspectRatio="video" label={title} className="group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-600 shadow-sm">
            <CheckCircle2 size={20} />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{desc}</p>
          
          <div className="mt-auto pt-6 flex flex-col gap-3">
            <button
              onClick={() => setIsServiceModalOpen(true)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-brand-50 hover:text-brand-600 transition-all group/btn"
            >
              {t('view_details')}
              <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsDevisModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-sm hover:bg-brand-gradient hover:text-white hover:border-brand-500 transition-all shadow-sm active:scale-95"
            >
              {t('request_quote')}
            </button>
          </div>
        </div>
      </motion.div>

      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        slug={slug}
      />
      <DevisModal
        isOpen={isDevisModalOpen}
        onClose={() => setIsDevisModalOpen(false)}
        locale="fr" // This will be handled by the context in a real app
        initialService={slug}
      />
    </>
  );
}
