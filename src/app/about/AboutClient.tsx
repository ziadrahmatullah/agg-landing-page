'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </motion.div>
      <p className="text-[#A0A0A0] text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export default function AboutClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen">
      <PageHero
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      {/* Story & Mission */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="story-title">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <motion.h2
                id="story-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-white mb-6"
              >
                Our Story
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#A0A0A0] leading-relaxed mb-6"
              >
                {t.about.story}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#A0A0A0] leading-relaxed"
              >
                {t.about.mission}
              </motion.p>
            </div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="aspect-square max-w-md mx-auto rounded-2xl border border-[#D4AF37]/40 bg-[#111111] flex items-center justify-center"
                style={{ boxShadow: '0 0 60px rgba(212,175,55,0.1)' }}
                aria-label="Company image placeholder"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">AG</div>
                  <p className="text-[#D4AF37] font-semibold">Abdul Ghani Global</p>
                  <p className="text-[#A0A0A0] text-sm mt-1">Est. 2026</p>
                </div>
              </div>
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37] rounded-tl-md" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37] rounded-br-md" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" aria-labelledby="stats-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="stats-title" className="sr-only">Company Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {t.about.stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="values-title">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={t.about.values.title} id="values-title" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {t.about.values.items.map((item, index) => (
              <Card key={item.title} delay={index * 0.1}>
                <div className="text-[#D4AF37] text-2xl mb-4">
                  {index === 0 ? '💡' : index === 1 ? '🤝' : '⚙️'}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" aria-labelledby="team-title">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title={t.about.team.title}
            subtitle={t.about.team.subtitle}
            id="team-title"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {t.about.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 text-center hover:border-[#D4AF37]/50 transition-colors duration-300"
              >
                <div
                  className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4 text-[#D4AF37] text-xl font-bold"
                  aria-label={`${member.name} avatar`}
                >
                  {member.initials}
                </div>
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-[#D4AF37] text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
