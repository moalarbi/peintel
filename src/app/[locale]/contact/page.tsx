'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import DevisModal from '@/components/ui/DevisModal';

import { use } from 'react';

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('contact');
  const tc = useTranslations('common');
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour Peintel, j'aimerais discuter d'un projet de rénovation.");
    window.open(`https://wa.me/33774555311?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
                >
                  {t('title')}
                </motion.h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  {t('subtitle')}
                </p>
                <div className="w-20 h-1.5 bg-brand-gradient rounded-full"></div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Téléphone</p>
                    <p className="text-xl font-bold text-slate-900">+33 7 74 55 53 11</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="text-xl font-bold text-slate-900">contact@peintel.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Horaires</p>
                    <p className="text-xl font-bold text-slate-900">Lun - Ven: 8h - 19h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 p-12 rounded-[3rem] bg-slate-950 text-white space-y-10 shadow-2xl">
                <div className="space-y-4 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto">
                    <MessageCircle size={40} />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Discutons de votre projet</h2>
                  <p className="text-slate-400">{t('whatsapp_text')}</p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-brand-gradient text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-brand-500/20 hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={24} />
                    {tc('cta_whatsapp')}
                  </button>
                  <button
                    onClick={() => setIsDevisModalOpen(true)}
                    className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                  >
                    <Send size={24} />
                    {tc('cta_quote')}
                  </button>
                </div>

                <div className="pt-6 border-t border-white/10 text-center">
                  <p className="text-slate-500 text-sm">Réponse moyenne en moins de 2 heures.</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <DevisModal isOpen={isDevisModalOpen} onClose={() => setIsDevisModalOpen(false)} locale={locale} />
    </div>
  );
}
