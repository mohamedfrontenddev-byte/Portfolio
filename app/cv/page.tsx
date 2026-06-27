'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Globe, Github } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-6"
        >
          <button
            onClick={() => window.print()}
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
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
                    <MapPin className="w-4 h-4" /> Cairo, Egypt
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
                    {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tools & Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Vercel', 'Figma', 'Responsive Design', 'API Integration', 'Performance Optimization'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
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
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">E-Commerce Dashboard</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">React, Next.js, Tailwind CSS, Chart.js</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Real Estate Platform</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">React, Next.js, TypeScript, Mapbox</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">A modern property listing platform with advanced search, filters, and interactive map integration.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Portfolio Generator</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Next.js, Tailwind CSS, Framer Motion</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">A dynamic portfolio builder allowing developers to create stunning portfolios with customizable themes.</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Front-End Developer</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Freelance</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Developed responsive and interactive web applications using React and Next.js</li>
                    <li>Implemented modern UI designs with Tailwind CSS and custom animations</li>
                    <li>Optimized application performance and ensured cross-browser compatibility</li>
                    <li>Collaborated with clients to deliver projects on time and within specifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Bachelor of Computer Science</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cairo University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <a href="mailto:mohamedfrontenddev-byte@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  <Mail className="w-4 h-4" /> mohamedfrontenddev-byte@gmail.com
                </a>
                <a href="tel:+201027511205" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  <Phone className="w-4 h-4" /> +20 102 751 1205
                </a>
                <a href="https://github.com/mohamedfrontenddev-byte" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  <Github className="w-4 h-4" /> github.com/mohamedfrontenddev-byte
                </a>
                <a href="https://wa.me/201027511205" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
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
