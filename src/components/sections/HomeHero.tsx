'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

function FloatingOrb({
  size,
  x,
  y,
  duration,
  delay,
  color,
}: {
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  color: string;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color}40, transparent)`,
        filter: 'blur(40px)',
      }}
      animate={
        prefersReduced
          ? {}
          : {
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  );
}

export default function HomeHero() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const words = t.home.hero.headline.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <FloatingOrb size={400} x="10%" y="20%" duration={8} delay={0} color="#D4AF37" />
      <FloatingOrb size={300} x="70%" y="50%" duration={10} delay={2} color="#FFD700" />
      <FloatingOrb size={200} x="40%" y="10%" duration={7} delay={4} color="#D4AF37" />
      <FloatingOrb size={250} x="80%" y="10%" duration={9} delay={1} color="#FFD700" />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-[#D4AF37] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" aria-hidden="true" />
          Abdul Ghani Global
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={prefersReduced ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          aria-label={t.home.hero.headline}
        >
          {prefersReduced ? (
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 40%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.home.hero.headline}
            </span>
          ) : (
            words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
                style={
                  i < 3
                    ? {
                        background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }
                    : { color: '#ffffff' }
                }
              >
                {word}
              </motion.span>
            ))
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#A0A0A0] text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t.home.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#FFD700] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
          >
            {t.home.hero.ctaPrimary}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
          >
            {t.home.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label={t.home.hero.scrollHint}
      >
        <p className="text-[#A0A0A0] text-xs uppercase tracking-widest">{t.home.hero.scrollHint}</p>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-9 border-2 border-[#D4AF37]/40 rounded-full flex items-start justify-center pt-1.5"
          aria-hidden="true"
        >
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
