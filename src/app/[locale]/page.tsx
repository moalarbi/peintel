'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Euro, 
  Star, 
  Users, 
  Calendar,
  ChevronRight,
  PlayCircle,
  MessageCircle
} from 'lucide-react';
import PlaceholderMedia from '@/components/PlaceholderMedia';
import ServiceCard from '@/components/ui/ServiceCard';
import { useState } from 'react';
import DevisModal from '@/components/ui/DevisModal';
import { Link } from '@/lib/navigation';

import { use } from 'react';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('home');
  const ts = useTranslations('services');
  const tc = useTranslations('common');
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);

  const services = [
    'peinture-interieure',
    'peinture-exterieure',
    'peinture-airless',
    'peinture-isolante',
    'beton-cire',
    'revetement-sol',
    'revetement-mural'
  ];

  const benefits = [
    { icon: ShieldCheck, title: t('benefit_1_title'), desc: t('benefit_1_desc') },
    { icon: Star, title: t('benefit_2_title'), desc: t('benefit_2_desc') },
    { icon: Clock, title: t('benefit_3_title'), desc: t('benefit_3_desc') },
    { icon: Euro, title: t('benefit_4_title'), desc: t('benefit_4_desc') },
  ];

  const stats = [
    { value: '500+', label: t('stats_projects') },
    { value: '100%', label: t('stats_clients') },
    { value: '15+', label: t('stats_experience') },
  ];

  const process = [
    { title: t('process_step_1'), icon: MessageCircle },
    { title: t('process_step_2'), icon: ClipboardListIcon },
    { title: t('process_step_3'), icon: PaintbrushIcon },
    { title: t('process_step_4'), icon: CheckCircle2 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <PlaceholderMedia aspectRatio="hero" className="w-full h-full rounded-none brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-white"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Star size={14} className="fill-brand-400" />
                Expertise Peintel
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                {t('hero_title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => setIsDevisModalOpen(true)}
                  className="w-full sm:w-auto bg-brand-gradient text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-brand-500/40 hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-3"
                >
                  {tc('cta_quote')}
                  <ArrowRight size={20} />
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  {tc('cta_services')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-brand-50 hover:border-brand-100 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <PlaceholderMedia aspectRatio="square" className="rounded-[3rem] shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Qualité</p>
                    <p className="text-lg font-bold text-slate-900">100% Garantie</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t('about_title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('about_text')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {['Peintres certifiés', 'Conseils personnalisés', 'Finitions premium', 'Nettoyage inclus'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{t('services_title')}</h2>
            <div className="w-20 h-1.5 bg-brand-gradient mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((slug, i) => (
              <ServiceCard
                key={slug}
                slug={slug}
                index={i}
                title={ts(`${slug.replace('-', '_')}.title`)}
                desc={ts(`${slug.replace('-', '_')}.desc`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Showcase */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {t('before_after_title')}
              </h2>
              <p className="text-xl text-slate-400">
                {t('before_after_subtitle')}
              </p>
              <ul className="space-y-6">
                {[
                  'Rénovation complète de salons',
                  'Traitement de façades anciennes',
                  'Application de béton ciré moderne',
                  'Peinture Airless haute précision'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      <CheckCircle2 size={20} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Before/After split section: 1600x900 */}
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <PlaceholderMedia aspectRatio="portrait" className="rounded-l-[3rem] brightness-75" />
                  <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">Avant</span>
                </div>
                <div className="relative">
                  <PlaceholderMedia aspectRatio="portrait" className="rounded-r-[3rem]" />
                  <span className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-500 text-[10px] font-bold uppercase tracking-widest">Après</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-brand-600 flex items-center justify-center shadow-2xl">
                <PlayCircle size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t('process_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative group">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 -z-10"></div>
                )}
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 rounded-[2rem] bg-brand-50 flex items-center justify-center text-brand-600 mx-auto group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <step.icon size={32} />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-500 uppercase tracking-[0.2em] mb-2 block">Étape 0{i + 1}</span>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-gradient text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl md:text-7xl font-black tracking-tighter">{stat.value}</p>
                <p className="text-lg font-bold text-white/70 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t('projects_preview_title')}</h2>
              <div className="w-20 h-1.5 bg-brand-gradient rounded-full"></div>
            </div>
            <Link href="/realisations" className="flex items-center gap-2 text-brand-600 font-bold hover:gap-4 transition-all">
              Voir tous les projets
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((p) => (
              <div key={p} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <PlaceholderMedia aspectRatio="video" className="group-hover:scale-105 transition-transform duration-700" />
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Projet Résidentiel {p}</h3>
                  <p className="text-slate-500 text-sm">Rénovation complète et peinture haut de gamme.</p>
                  <button className="text-brand-600 font-bold text-sm flex items-center gap-2 group/btn">
                    Détails du projet
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 container">
        <div className="relative rounded-[3rem] bg-slate-950 overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 z-0">
            <PlaceholderMedia aspectRatio="wide" className="w-full h-full rounded-none opacity-30" />
            <div className="absolute inset-0 bg-brand-gradient mix-blend-multiply opacity-60"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">{t('cta_banner_title')}</h2>
            <p className="text-xl text-white/80">{t('cta_banner_subtitle')}</p>
            <button
              onClick={() => setIsDevisModalOpen(true)}
              className="bg-white text-brand-600 px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-transform active:scale-95"
            >
              {tc('cta_quote')}
            </button>
          </div>
        </div>
      </section>

      <DevisModal isOpen={isDevisModalOpen} onClose={() => setIsDevisModalOpen(false)} locale={locale} />
    </div>
  );
}

// Dummy icons for process
function ClipboardListIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
  )
}

function PaintbrushIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.622 17.897-10.68-10.68a2 2 0 1 1 2.83-2.83l10.713 10.713"/><path d="M18.386 12.905a2.15 2.15 0 1 1 2.927-3.134 2.15 2.15 0 1 1-3.134 2.927"/><path d="m18 12-1.5 1.5"/><path d="m15 15-1.5 1.5"/><path d="M13.5 16.5 12 18"/><path d="M12 19.5 10.5 21"/><path d="M18 12c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3Z"/></svg>
  )
}
