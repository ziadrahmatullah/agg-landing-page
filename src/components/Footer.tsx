'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/products', key: 'products' },
  { href: '/tech-stack', key: 'techStack' },
  { href: '/testimonials', key: 'testimonials' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <Image
                src="/logo.png"
                alt="Abdul Ghani Global logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-[#D4AF37] group-hover:text-[#FFD700] transition-colors">
                AG Global
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.links}
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#A0A0A0] hover:text-[#D4AF37] text-sm transition-colors duration-200"
                  >
                    {t.nav[key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.contact.info.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                <span className="text-[#D4AF37] mt-0.5">✉</span>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.contact.info.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                <span className="text-[#D4AF37] mt-0.5">📱</span>
                <a
                  href={`https://wa.me/${t.contact.info.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.contact.info.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                <span className="text-[#D4AF37] mt-0.5">📍</span>
                <span>{t.contact.info.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A0A0A0]">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
