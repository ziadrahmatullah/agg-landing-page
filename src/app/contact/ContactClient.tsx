'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactClient() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async submit
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'w-full bg-[#111111] border border-[#D4AF37]/30 text-white placeholder-[#A0A0A0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors duration-200';

  return (
    <div className="bg-black min-h-screen">
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        description={t.contact.description}
      />

      {/* Background gradient */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[180px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        aria-hidden="true"
      />

      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>

                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <p className="text-[#D4AF37] font-semibold text-lg">{t.contact.form.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-[#A0A0A0] text-xs font-medium mb-1.5 uppercase tracking-wide">
                          {t.contact.form.name}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.name}
                          className={inputClass}
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[#A0A0A0] text-xs font-medium mb-1.5 uppercase tracking-wide">
                          {t.contact.form.email}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.email}
                          className={inputClass}
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-[#A0A0A0] text-xs font-medium mb-1.5 uppercase tracking-wide">
                        {t.contact.form.subject}
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={t.contact.form.subject}
                        className={inputClass}
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-[#A0A0A0] text-xs font-medium mb-1.5 uppercase tracking-wide">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.contact.form.message}
                        className={`${inputClass} resize-none`}
                        aria-required="true"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#D4AF37] text-black font-semibold py-3.5 rounded-lg hover:bg-[#FFD700] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#111111]"
                      aria-busy={status === 'sending'}
                    >
                      {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Info - 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact info card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-2xl p-6"
              >
                <h2 className="text-lg font-bold text-white mb-5">{t.contact.info.title}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                      ✉
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wide mb-0.5">Email</p>
                      <a
                        href={`mailto:${t.contact.info.email}`}
                        className="text-white text-sm hover:text-[#D4AF37] transition-colors"
                      >
                        {t.contact.info.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                      📱
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wide mb-0.5">WhatsApp</p>
                      <a
                        href={`https://wa.me/${t.contact.info.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm hover:text-[#D4AF37] transition-colors"
                      >
                        {t.contact.info.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                      📍
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-white text-sm">{t.contact.info.location}</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-2xl overflow-hidden flex-1"
                style={{ minHeight: '200px' }}
              >
                <div className="p-4 border-b border-[#D4AF37]/10">
                  <p className="text-white text-sm font-semibold">{t.contact.map}</p>
                </div>
                <div
                  className="flex items-center justify-center h-40 bg-[#0A0A0A]"
                  aria-label="Map placeholder"
                  style={{
                    backgroundImage:
                      'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.08,
                  }}
                >
                  <div style={{ opacity: 12.5 }}>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📍</div>
                      <p className="text-[#A0A0A0] text-sm">Indonesia</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
