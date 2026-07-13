'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Globe, Github, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/projects';

// The CV PDF lives in `public/`. The `download` attribute forces a real file
// download with the chosen filename (works in Chrome, Edge, Firefox, and
// Safari for same-origin files).
const CV_PDF_PATH = '/Mohamed-Allam-CV.pdf';
const CV_PDF_FILENAME = 'Mohamed-Allam-CV.pdf';

export default function CVPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-6 print:hidden"
        >
          <a
            href={CV_PDF_PATH}
            download={CV_PDF_FILENAME}
            title="Download CV as PDF"
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* CV Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden print:shadow-none print:rounded-none"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-8 print:bg-gray-800">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-28 h-28 rounded-2xl bg-white/20 flex items-center justify-center text-4xl font-bold border-2 border-white/30">
                MA
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">Mohamed Allam</h1>
                <p className="text-lg text-primary-100 mt-1">Front-End Developer</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-primary-100">
                  <a href="mailto:mohamedfrontenddev-byte@gmail.com" className="flex items-center gap-1 hover:text-white">
                    <Mail className="w-4 h-4" /> mohamedfrontenddev-byte@gmail.com
                  </a>
                  <a href="tel:+201027511205" className="flex items-center gap-1 hover:text-white">
                    <Phone className="w-4 h-4" /> +20 102 751 1205
                  </a>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> El Beheira, Egypt
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dedicated Front-End Developer with expertise in building modern, scalable, and high-performance web applications.
                Proficient in React, Next.js, JavaScript, and Tailwind CSS. Passionate about creating clean, maintainable code
                and delivering exceptional user experiences through responsive design and performance optimization.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'HTML5',
                      'CSS3',
                      'JavaScript (ES6+)',
                      'React',
                      'Next.js',
                      'Tailwind CSS',
                      'React Hook Form',
                      'Axios',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tools & Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Git',
                      'GitHub',
                      'Vercel',
                      'Figma',
                      'Responsive Design',
                      'API Integration',
                      'Performance Optimization',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <ProjectEntry key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">
                  Faculty of Computers and Artificial Intelligence, Tanta University
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2024 - 2026</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <a
                  href="mailto:mohamedfrontenddev-byte@gmail.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Mail className="w-4 h-4" /> mohamedfrontenddev-byte@gmail.com
                </a>
                <a
                  href="tel:+201027511205"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Phone className="w-4 h-4" /> +20 102 751 1205
                </a>
                <a
                  href="https://github.com/mohamedfrontenddev-byte"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Github className="w-4 h-4" /> github.com/mohamedfrontenddev-byte
                </a>
                <a
                  href="https://wa.me/201027511205"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Globe className="w-4 h-4" /> WhatsApp: +20 102 751 1205
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
      <h3 className="font-bold text-gray-800 dark:text-gray-200">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {project.technologies.join(', ')}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-3 mt-3 text-xs">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline break-all"
        >
          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline break-all"
        >
          <Github className="w-3.5 h-3.5 flex-shrink-0" />
          Source
        </a>
      </div>
    </div>
  );
}
