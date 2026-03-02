'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Send, Phone, MapPin, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  initialService?: string;
}

export default function DevisModal({ isOpen, onClose, locale, initialService }: DevisModalProps) {
  const t = useTranslations('devis');
  const [formData, setFormData] = useState({
    service: initialService || '',
    address: '',
    phone: '',
    details: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const services = [
    'peinture_interieure',
    'peinture_exterieure',
    'peinture_airless',
    'peinture_isolante',
    'beton_cire',
    'revetement_sol',
    'revetement_mural'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = t('whatsapp_template', {
      service: formData.service,
      address: formData.address,
      phone: formData.phone,
      details: formData.details || 'N/A'
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/33774555311?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-brand-gradient p-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-2">{t('title')}</h3>
              <p className="text-white/80 text-sm">Remplissez ce formulaire pour recevoir un devis personnalisé via WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <ClipboardList size={16} className="text-brand-500" />
                  {t('service_label')}
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none bg-slate-50"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-500" />
                  {t('address_label')}
                </label>
                <input
                  required
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Ex: 123 Rue de la Paix, Paris"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Phone size={16} className="text-brand-500" />
                  {t('phone_label')}
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ex: 06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  {t('details_label')}
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Décrivez brièvement votre projet..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gradient text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-500/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t('submit')}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
