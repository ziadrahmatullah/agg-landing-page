'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';

const summaryItems = [
  {
    key: 'about' as const,
    href: '/about',
    icon: '✦',
    gradient: 'from-[#D4AF37]/20 to-transparent',
  },
  {
    key: 'products' as const,
    href: '/products',
    icon: '◈',
    gradient: 'from-[#FFD700]/20 to-transparent',
  },
  {
    key: 'techStack' as const,
    href: '/tech-stack',
    icon: '⬡',
    gradient: 'from-[#D4AF37]/15 to-transparent',
  },
];

export default function HomeSummary() {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8" aria-labelledby="summary-title">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={t.home.summary.title}
          id="summary-title"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {summaryItems.map(({ key, href, icon, gradient }, index) => {
            const item = t.home.summary[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8 overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                {/* Gradient background */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-3xl text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:gap-3 transition-all duration-200 group/link focus:outline-none focus:underline"
                  >
                    {item.link}
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
