'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {t('projects.subtitle')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-strong rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={language === 'ar' ? project.titleAr : project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Project hint */}
                <div
                  className={`absolute top-3 ${
                    isRtl ? 'left-3' : 'right-3'
                  } flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-gray-900 dark:bg-dark-card/90 dark:text-white backdrop-blur opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300`}
                >
                  {t('projectDetail.viewProject')}
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 pointer-events-none">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {language === 'ar' ? project.titleAr : project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {language === 'ar' ? project.descriptionAr : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons (must stay above the stretched card link) */}
                <div className="flex gap-3 pointer-events-auto relative z-20">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.liveDemo')}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.github')}
                  </a>
                </div>
              </div>

              {/* Stretched link — clicking the card navigates to the project page.
                  The buttons above sit at z-20 and stay clickable thanks to
                  pointer-events-auto. */}
              <Link
                href={`/projects/${project.id}/`}
                aria-label={language === 'ar' ? project.titleAr : project.title}
                className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-bg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

