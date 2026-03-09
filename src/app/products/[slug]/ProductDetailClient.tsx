'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/lib/products';
import PageHero from '@/components/PageHero';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const { t, language } = useLanguage();

  const title = language === 'id' ? product.titleId : product.title;
  const description = language === 'id' ? product.descriptionId : product.description;
  const features = language === 'id' ? product.featuresId : product.features;
  const useCases = language === 'id' ? product.useCasesId : product.useCases;

  return (
    <div className="bg-black min-h-screen">
      <PageHero title={title} />

      {/* Description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="product-desc-title">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#D4AF37] text-sm hover:text-[#FFD700] transition-colors mb-10 group focus:outline-none focus:underline"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {t.products.backToProducts}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-6xl">{product.icon}</div>
            <h2 id="product-desc-title" className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#A0A0A0] text-base md:text-lg leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Tech chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {product.techUsed.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" aria-labelledby="features-title">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Key Features" subtitle="What We Offer" id="features-title" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card key={feature.title} delay={index * 0.08}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#D4AF37] text-xs font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="usecases-title">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Use Cases" subtitle="Real-World Applications" id="usecases-title" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <h3 className="text-white font-bold mb-3">{useCase.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" aria-labelledby="product-cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            id="product-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Ready to get started with{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
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
            Let&apos;s discuss how we can tailor this solution for your specific needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/contact" variant="filled" size="lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
