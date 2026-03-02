'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import DevisModal from '@/components/ui/DevisModal';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('common');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav_services'), anchor: '#services' },
    { href: '/realisations', label: t('nav_projects') },
    { href: '/contact', label: t('nav_contact') },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              P
            </div>
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-500',
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-x border-slate-200/20 px-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname}
                  locale={lang.code as any}
                  className={cn(
                    'text-xs font-bold px-2 py-1 rounded transition-colors',
                    locale === lang.code
                      ? 'bg-brand-500 text-white'
                      : isScrolled ? 'text-slate-500 hover:bg-slate-100' : 'text-white/70 hover:bg-white/10'
                  )}
                >
                  {lang.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsDevisModalOpen(true)}
              className="bg-brand-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-500/20 hover:scale-105 transition-transform active:scale-95"
            >
              {t('cta_quote')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 top-[64px] bg-white z-40 transition-transform duration-300 md:hidden',
            isMobileMenuOpen ? 'translate-x-0' : locale === 'ar' ? '-translate-x-full' : 'translate-x-full'
          )}
        >
          <div className="p-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 py-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname}
                  locale={lang.code as any}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-sm font-bold px-4 py-2 rounded-lg border',
                    locale === lang.code
                      ? 'bg-brand-500 text-white border-brand-500'
                      : 'text-slate-600 border-slate-200'
                  )}
                >
                  {lang.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDevisModalOpen(true);
              }}
              className="w-full bg-brand-gradient text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-brand-500/20"
            >
              {t('cta_quote')}
            </button>
          </div>
        </div>
      </header>

      <DevisModal isOpen={isDevisModalOpen} onClose={() => setIsDevisModalOpen(false)} locale={locale} />
    </>
  );
}
