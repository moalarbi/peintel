'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, ChevronRight } from 'lucide-react';
import PlaceholderMedia from '@/components/PlaceholderMedia';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function RealisationsPage() {
  const t = useTranslations('projects');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Projet Résidentiel ${i + 1}`,
    location: 'Paris, France',
    date: '2023',
    desc: "Rénovation complète des murs et plafonds avec une finition mate premium. Application de béton ciré dans la cuisine pour un aspect moderne et épuré.",
    category: i % 2 === 0 ? 'Intérieur' : 'Extérieur'
  }));

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">{t('title')}</h1>
            <p className="text-xl text-slate-500 leading-relaxed">{t('subtitle')}</p>
            <div className="w-20 h-1.5 bg-brand-gradient rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedProject(project.id)}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative">
                  <PlaceholderMedia aspectRatio="video" className="group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black text-brand-600 uppercase tracking-widest shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                  <button className="flex items-center gap-2 text-brand-600 font-bold text-sm group/btn">
                    {t('view_project')}
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-lg hover:bg-brand-500 hover:text-white transition-all active:scale-95"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-brand-600 text-sm font-black uppercase tracking-widest">
                        <Calendar size={18} />
                        Projet réalisé en {projects[selectedProject - 1].date}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        {projects[selectedProject - 1].title}
                      </h2>
                      <div className="flex items-center gap-2 text-slate-400 font-bold">
                        <MapPin size={18} />
                        {projects[selectedProject - 1].location}
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      {projects[selectedProject - 1].desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Durée</p>
                        <p className="text-lg font-bold text-slate-900">12 Jours</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Surface</p>
                        <p className="text-lg font-bold text-slate-900">140 m²</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-8 space-y-4 bg-slate-50">
                    <PlaceholderMedia aspectRatio="video" className="rounded-[2rem] shadow-lg" />
                    <div className="grid grid-cols-2 gap-4">
                      <PlaceholderMedia aspectRatio="square" className="rounded-[1.5rem]" />
                      <PlaceholderMedia aspectRatio="square" className="rounded-[1.5rem]" />
                    </div>
                    <PlaceholderMedia aspectRatio="wide" className="rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
