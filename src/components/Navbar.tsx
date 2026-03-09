'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/products', key: 'products' },
  { href: '/tech-stack', key: 'techStack' },
  { href: '/testimonials', key: 'testimonials' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-md"
              aria-label="Abdul Ghani Global - Home"
            >
              <Image
                src="/logo.png"
                alt="Abdul Ghani Global logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-base md:text-lg font-bold text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-200 tracking-tight">
                Abdul Ghani Global
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    isActive(href)
                      ? 'text-[#D4AF37]'
                      : 'text-[#A0A0A0] hover:text-white'
                  }`}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {t.nav[key as keyof typeof t.nav]}
                  {isActive(href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <LanguageToggle />
              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-md"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block"
                />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 md:hidden overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(href)
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
