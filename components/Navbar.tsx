'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import {
  Sun,
  Moon,
  Menu,
  X,
  Globe,
  FileText,
  Code2,
} from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#about', key: 'nav.about' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#contact', key: 'nav.contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!mounted) return null;

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="text-xl font-bold gradient-text">
            Mohamed Allam
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-surface transition-all"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="/cv/"
            className="px-4 py-2 rounded-lg text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-surface transition-all flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            {t('nav.cv')}
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors text-gray-600 dark:text-gray-300"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="w-5 h-5" />
            <span className="ml-1 text-sm font-medium">
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors text-gray-600 dark:text-gray-300"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
            className="md:hidden relative z-[60] p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="md:hidden relative z-[60] glass-strong border-t border-gray-200 dark:border-dark-border overflow-hidden"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-dark-surface transition-colors font-medium"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="/cv/"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-surface transition-colors font-medium flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {t('nav.cv')}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
