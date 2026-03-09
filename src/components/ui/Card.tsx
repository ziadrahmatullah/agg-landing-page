'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  animate?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  glowOnHover = true,
  animate = true,
  delay = 0,
}: CardProps) {
  const baseClasses = `bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${
    glowOnHover
      ? 'hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]'
      : ''
  } ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
        whileHover={glowOnHover ? { y: -4 } : {}}
        className={baseClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
