'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, FileText, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[150dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {t('hero.available')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="block text-gray-900 dark:text-white">{t('hero.name')}</span>
              <span className="block gradient-text mt-2">{t('hero.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                <ArrowDown className="w-4 h-4" />
                {t('hero.viewProjects')}
              </a>
              <a href="/cv/" className="btn-outline flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                {t('hero.viewCV')}
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 opacity-20 blur-2xl animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-surface shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <Image 
                      src="/protfolio.png" 
                            alt="Mohamed Allam" 
                            width={500} 
                            height={500} 
                            className="object-cover" 
                        />
                </div>
                566
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">React</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-xl glass shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Next.js</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
