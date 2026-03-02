'use client';

import { useTranslations } from 'next-intl';
import { X, CheckCircle2, Info, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderMedia from '@/components/PlaceholderMedia';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
}

export default function ServiceModal({ isOpen, onClose, slug }: ServiceModalProps) {
  const t = useTranslations('services');
  const serviceKey = slug.replace('-', '_');
  
  // Helper to get array from i18n
  const getList = (key: string) => {
    try {
      return t.raw(`${serviceKey}.${key}`) as string[];
    } catch (e) {
      return [];
    }
  };

  const includes = getList('includes_list');
  const when = getList('when_list');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-lg hover:bg-brand-500 hover:text-white transition-all active:scale-95"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto flex-1">
              <div className="relative">
                <PlaceholderMedia aspectRatio="hero" label={t(`${serviceKey}.title`)} className="rounded-none h-[300px] md:h-[400px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-widest mb-4">
                    Service Premium
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t(`${serviceKey}.title`)}</h2>
                </div>
              </div>

              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                        <Info size={18} />
                      </div>
                      Description
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {t(`${serviceKey}.full_desc`)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{t('includes')}</h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm">
                          <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{t('when_to_choose')}</h3>
                    <ul className="space-y-3">
                      {when.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                        <ImageIcon size={18} />
                      </div>
                      Galerie Avant / Après
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Before/After images (per service): 1200x900 (4:3) */}
                      <div className="space-y-2">
                        <PlaceholderMedia aspectRatio="square" className="rounded-2xl" />
                        <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">Avant</p>
                      </div>
                      <div className="space-y-2">
                        <PlaceholderMedia aspectRatio="square" className="rounded-2xl" />
                        <p className="text-[10px] text-center font-bold text-brand-500 uppercase tracking-widest">Après</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
