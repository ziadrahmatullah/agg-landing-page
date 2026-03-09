'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-[#D4AF37]' : 'text-[#333333]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen">
      <PageHero
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
        description={t.testimonials.description}
      />

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-grid-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="testimonials-grid-title" className="sr-only">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.article
                key={testimonial.name + index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="text-[#D4AF37]/30 text-5xl font-serif leading-none mb-3" aria-hidden="true">
                  &ldquo;
                </div>

                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Text */}
                <blockquote className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[#D4AF37]/10 pt-4">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#D4AF37]/50 bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37] text-xs font-bold flex-shrink-0"
                    aria-label={`${testimonial.name} avatar`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-[#A0A0A0] text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Ready to join our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              success stories
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
            Let&apos;s build something transformative together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#FFD700] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
