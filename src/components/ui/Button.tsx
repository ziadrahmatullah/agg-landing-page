'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'filled',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    filled:
      'bg-[#D4AF37] text-black font-semibold hover:bg-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]',
    outlined:
      'border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black',
  };

  const baseClasses = `inline-flex items-center justify-center rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
