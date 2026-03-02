'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-2xl font-bold tracking-tight">{t('brand')}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour des travaux de peinture et rénovation d'exception. Qualité, rigueur et satisfaction client.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-500 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('nav_services')}</h4>
            <ul className="flex flex-col gap-4">
              {['peinture_interieure', 'peinture_exterieure', 'peinture_airless', 'beton_cire'].map((s) => (
                <li key={s}>
                  <Link href={`/services/${s.replace('_', '-')}`} className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                    {/* Note: In a real app we'd use service titles from i18n */}
                    Service - {s.replace('_', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Entreprise</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/realisations" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                  {t('nav_projects')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                  {t('nav_contact')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>France (National)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>+33 7 74 55 53 11</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>contact@peintel.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs">
          <p>© {currentYear} {t('brand')}. Tous droits réservés.</p>
          <p>Design & Développement par moalarbi</p>
        </div>
      </div>
    </footer>
  );
}
