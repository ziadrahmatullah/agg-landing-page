'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TechStackClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen">
      <PageHero
        title={t.techStack.title}
        subtitle={t.techStack.subtitle}
        description={t.techStack.description}
      />

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="tech-grid-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="tech-grid-title" className="sr-only">Technology Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.techStack.items.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                  <span className="text-[#D4AF37] text-xl font-bold">{tech.icon}</span>
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Want to know more about our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              approach
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#A0A0A0] mb-8"
          >
            Explore our products to see how we put these technologies to work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#FFD700] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
            >
              View Our Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
