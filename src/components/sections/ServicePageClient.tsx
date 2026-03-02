'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  HelpCircle, 
  Info,
  ImageIcon
} from 'lucide-react';
import PlaceholderMedia from '@/components/PlaceholderMedia';
import DevisModal from '@/components/ui/DevisModal';
import ServiceModal from '@/components/ui/ServiceModal';
import { useState } from 'react';

interface ServicePageClientProps {
  locale: string;
  slug: string;
}

export default function ServicePageClient({ locale, slug }: ServicePageClientProps) {
  const t = useTranslations('services');
  const tc = useTranslations('common');
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const serviceKey = slug.replace('-', '_');

  const getList = (key: string) => {
    try {
      return t.raw(`${serviceKey}.${key}`) as string[];
    } catch (e) {
      return [];
    }
  };

  const includes = getList('includes_list');
  const when = getList('when_list');

  const faqs = [
    { q: "Combien de temps dure le projet ?", a: "La durée dépend de la surface et de l'état des supports. Un salon standard prend généralement 3 à 5 jours." },
    { q: "Quelles marques de peinture utilisez-vous ?", a: "Nous travaillons exclusivement avec des marques professionnelles haut de gamme (Zolpan, Seigneurie, Farrow & Ball) pour garantir une tenue optimale." },
    { q: "Le devis est-il vraiment gratuit ?", a: "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer précisément vos besoins." }
  ];

  return (
    <div className="pt-20">
      {/* Mini Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderMedia aspectRatio="hero" className="w-full h-full rounded-none opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500 text-xs font-bold uppercase tracking-[0.2em]">
              Service Expert
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
              {t(`${serviceKey}.title`)}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              {t(`${serviceKey}.desc`)}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsDevisModalOpen(true)}
                className="bg-brand-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-500/20 hover:scale-105 transition-transform active:scale-95"
              >
                {tc('cta_quote')}
              </button>
              <button
                onClick={() => setIsServiceModalOpen(true)}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                {t('view_details')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Info size={24} />
                  </div>
                  Présentation du service
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t(`${serviceKey}.full_desc`)}
                </p>
              </div>

              {/* Includes */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900">{t('includes')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {includes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery Preview */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <ImageIcon size={24} />
                  </div>
                  Galerie Avant / Après
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <PlaceholderMedia aspectRatio="video" className="rounded-[2.5rem] shadow-lg" />
                    <p className="text-center font-black text-slate-400 uppercase tracking-widest text-xs">État Initial</p>
                  </div>
                  <div className="space-y-4">
                    <PlaceholderMedia aspectRatio="video" className="rounded-[2.5rem] shadow-xl" />
                    <p className="text-center font-black text-brand-500 uppercase tracking-widest text-xs">Résultat Final</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* When to choose */}
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white space-y-6">
                <h3 className="text-xl font-bold">{t('when_to_choose')}</h3>
                <ul className="space-y-4">
                  {when.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="p-8 rounded-[2.5rem] bg-brand-50 border border-brand-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-600" />
                  {t('faq_title')}
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-sm font-bold text-slate-900">{faq.q}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Sidebar */}
              <div className="p-8 rounded-[2.5rem] bg-brand-gradient text-white text-center space-y-6 shadow-xl shadow-brand-500/20">
                <h3 className="text-xl font-bold">Besoin d'un expert ?</h3>
                <p className="text-sm text-white/80">Recevez votre devis gratuit en moins de 24h via WhatsApp.</p>
                <button
                  onClick={() => setIsDevisModalOpen(true)}
                  className="w-full bg-white text-brand-600 py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95"
                >
                  {tc('cta_quote')}
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <DevisModal isOpen={isDevisModalOpen} onClose={() => setIsDevisModalOpen(false)} locale={locale} initialService={slug} />
      <ServiceModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} slug={slug} />
    </div>
  );
}
