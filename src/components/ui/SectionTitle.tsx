'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
  id,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[#D4AF37] font-medium text-sm uppercase tracking-widest mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-0.5 w-16 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
