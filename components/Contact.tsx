'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const whatsappText = `*New message from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
    const whatsappLink = `https://wa.me/201027511205?text=${encodeURIComponent(whatsappText)}`;
    
    window.open(whatsappLink, '_blank');
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-gray-50/50 dark:bg-dark-card/50">
      <div className="max-w-7xl mx-auto section-padding">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {t('contact.subtitle')}
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >

            <div className="glass-strong rounded-2xl p-8">

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info')}
              </h3>


              <div className="space-y-4">


                {/* Email */}
                <a
                  href="mailto:mohamedfrontenddev-byte@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all group"
                >

                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-card flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">

                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />

                  </div>

          <div>
             <p className="font-semibold text-gray-800 dark:text-gray-200">
                 Email
           </p>

         <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamed.frontend.dev@gmail.com"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
                >
                   mohamed.frontend.dev@gmail.com
                 </a>
             </div>

          </a>



                {/* WhatsApp */}
                <a
                  href="https://wa.me/201027511205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface hover:bg-green-50 dark:hover:bg-green-500/10 transition-all group"
                >

                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-card flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">

                    <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />

                  </div>


                  <div>

                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      WhatsApp
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      01027511205
                    </p>

                  </div>


                </a>




                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">

                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-card flex items-center justify-center shadow-sm">

                    <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />

                  </div>


                  <div>

                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Location
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('contact.location')}
                    </p>

                  </div>


                </div>


              </div>

            </div>

          </motion.div>



          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >

            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t('contact.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {t('contact.error')}
                </p>
              )}
            </form>

          </motion.div>


        </div>

      </div>

    </section>
  );
}