'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Braces,
  Atom,
  SquareStack,
  Wind,
  GitBranch,
  Github,
  Rocket,
  Figma,
  Smartphone,
  Plug,
  Zap,
  Monitor,

} from 'lucide-react';
import { SiMui } from 'react-icons/si';

const skillCategories = [
  {
    title: 'skills.frontend',
    titleAr: 'واجهة أمامية',
    skills: [
      { name: 'HTML', icon: FileCode2, color: 'text-orange-500' },
      { name: 'CSS', icon: Code2, color: 'text-blue-500' },
      { name: 'JavaScript', icon: Braces, color: 'text-yellow-500' },
       { name: 'TypeScript', icon: Braces, color: 'text-yellow-500' },
      { name: 'React', icon: Atom, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SquareStack, color: 'text-gray-800 dark:text-gray-200' },
      { name: ' Bootstrap', icon: Wind, color: 'text-sky-400' },
      { name: 'Tailwind CSS', icon: Code2, color: 'text-blue-500' },
    ],
  },
  {
    title: 'skills.tools',
    titleAr: 'أدوات',
    skills: [
      { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
      { name: 'GitHub', icon: Github, color: 'text-gray-800 dark:text-white' },
      { name: 'Vercel', icon: Rocket, color: 'text-black dark:text-white' },
      { name: 'Figma', icon: Figma, color: 'text-purple-500' },
       { name: 'Material UI', icon: SiMui, color: 'text-orange-600' },
    ],
  },
  {
    title: 'skills.concepts',
    titleAr: 'مفاهيم',
    skills: [
      { name: 'Responsive Design', icon: Smartphone, color: 'text-green-500' },
      { name: 'API Integration', icon: Plug, color: 'text-indigo-500' },
      { name: 'Performance Optimization', icon: Zap, color: 'text-amber-500' },
    ],
  },
];

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
                {language === 'ar' ? category.titleAr : t(category.title)}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-primary-200 dark:hover:border-primary-500/30 transition-all cursor-default group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gray-50 dark:bg-dark-card flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
