'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Project, projects } from '@/data/translations';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

interface ProjectCardProps {
  project: Project;
  language: 'en' | 'ar';
}

function OtherProjectCard({ project, language }: ProjectCardProps) {
  const isRtl = language === 'ar';
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease }}
      className="group relative h-full"
    >
      <Link
        href={`/projects/${project.id}/`}
        className="block h-full glass-strong rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        aria-label={language === 'ar' ? project.titleAr : project.title}
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={language === 'ar' ? project.titleAr : project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 dark:bg-dark-card/90 dark:text-white backdrop-blur">
            #{project.id}
          </div>
          <div
            className={`absolute top-3 ${
              isRtl ? 'left-3' : 'right-3'
            } w-9 h-9 rounded-full bg-white/90 dark:bg-dark-card/90 backdrop-blur flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-primary-600 group-hover:text-white transition-colors`}
          >
            {isRtl ? (
              <ArrowLeft className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
            {language === 'ar' ? project.titleAr : project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
            {language === 'ar' ? project.descriptionAr : project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectDetailView({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const otherProjects = useMemo(
    () => projects.filter((p) => p.id !== project.id),
    [project.id]
  );

  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <main className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <article className="pt-28 lg:pt-36 pb-20">
        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-7xl mx-auto section-padding"
        >
          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] rounded-3xl overflow-hidden glass-strong shadow-2xl">
            <Image
              src={project.image}
              alt={isRtl ? project.titleAr : project.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  {t('projectDetail.subtitle')} #{project.id}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-400/30 text-primary-100 text-xs font-semibold">
                  {project.technologies.length} {t('projectDetail.technologiesLabel')}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Title + Actions */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="max-w-7xl mx-auto section-padding mt-10 lg:mt-14"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text"
          >
            {isRtl ? project.titleAr : project.title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              {t('projects.liveDemo')}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              {t('projects.github')}
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-dark-surface transition-all duration-300 hover:-translate-y-0.5"
            >
              <BackIcon className="w-4 h-4" />
              {t('projectDetail.backToPortfolio')}
            </Link>
          </motion.div>
        </motion.section>

        {/* Body grid */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="max-w-7xl mx-auto section-padding mt-14 lg:mt-20 grid lg:grid-cols-3 gap-10"
        >
          {/* Overview */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-600" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                {t('projectDetail.overview')}
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {isRtl ? project.descriptionAr : project.description}
            </p>
          </motion.div>

          {/* Sidebar — technologies + links */}
          <motion.aside variants={itemVariants} className="space-y-8">
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {t('projectDetail.technologiesLabel')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {t('projectDetail.links')}
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-500/20 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.liveDemo')}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Github className="w-4 h-4" />
                    {t('projects.github')}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        </motion.section>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="max-w-7xl mx-auto section-padding mt-24 lg:mt-32"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-end justify-between flex-wrap gap-4 mb-10"
            >
              <div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
                  {t('projects.subtitle')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
                  {t('projectDetail.otherProjects')}
                </h2>
              </div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                {t('projectDetail.backToPortfolio')}
                <BackIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <OtherProjectCard key={p.id} project={p} language={language} />
              ))}
            </div>
          </motion.section>
        )}
      </article>

      <Footer />
    </main>
  );
}
