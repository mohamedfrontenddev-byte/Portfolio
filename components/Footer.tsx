'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Heart, Github, Linkedin, ArrowUp } from 'lucide-react';

// TODO: Replace LinkedIn URL with your real profile link
// e.g. https://linkedin.com/in/mohamed-allam-frontend
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/mohamedfrontenddev-byte',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mohamedfrontenddevdev',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">{t('footer.name')}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('footer.role')}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-surface flex items-center justify-center
                           text-gray-600 dark:text-gray-400
                           hover:bg-primary-50 dark:hover:bg-primary-500/10
                           hover:text-primary-600 dark:hover:text-primary-400
                           hover:scale-110 hover:shadow-md hover:shadow-primary-500/20
                           transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-surface flex items-center justify-center
                       text-gray-600 dark:text-gray-400
                       hover:bg-primary-50 dark:hover:bg-primary-500/10
                       hover:text-primary-600 dark:hover:text-primary-400
                       hover:scale-110 hover:shadow-md hover:shadow-primary-500/20
                       transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.copyright')}
            <span className="mx-1">{t('footer.madeWith')}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
