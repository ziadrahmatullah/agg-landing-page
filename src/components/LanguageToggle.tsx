'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div
      className="flex items-center bg-[#111111] border border-[#D4AF37]/30 rounded-full p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language selection"
    >
      <button
        onClick={() => toggle('en')}
        className={`relative px-3 py-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 focus:ring-offset-black ${
          language === 'en' ? 'text-black' : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        {language === 'en' && (
          <motion.div
            layoutId="langPill"
            className="absolute inset-0 bg-[#D4AF37] rounded-full"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => toggle('id')}
        className={`relative px-3 py-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 focus:ring-offset-black ${
          language === 'id' ? 'text-black' : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-pressed={language === 'id'}
        aria-label="Ganti ke Bahasa Indonesia"
      >
        {language === 'id' && (
          <motion.div
            layoutId="langPill"
            className="absolute inset-0 bg-[#D4AF37] rounded-full"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>
    </div>
  );
}
