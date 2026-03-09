'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProductsClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen">
      <PageHero
        title={t.products.title}
        subtitle={t.products.subtitle}
        description={t.products.description}
      />

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="products-list-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="products-list-title" className="sr-only">
            Products List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.products.items.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group"
              >
                <Link
                  href={`/products/${item.slug}`}
                  className="block bg-[#111111] border border-[#D4AF37]/20 rounded-2xl p-8 md:p-10 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black h-full"
                  aria-label={`View details for ${item.title}`}
                >
                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#A0A0A0] leading-relaxed mb-8">
                    {item.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all duration-200">
                    {t.products.cta}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
