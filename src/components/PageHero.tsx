'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden" aria-labelledby="page-hero-title">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Gold glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#D4AF37] font-medium text-sm uppercase tracking-widest mb-3"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          id="page-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#A0A0A0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 h-px w-24 mx-auto"
          style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
