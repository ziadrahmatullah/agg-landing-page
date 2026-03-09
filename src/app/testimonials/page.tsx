import type { Metadata } from 'next';
import TestimonialsClient from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Testimoni Klien — Kepercayaan yang Kami Banggakan',
  description:
    'Dengarkan langsung dari klien yang telah merasakan transformasi bisnis bersama Abdul Ghani Global. Ulasan nyata dari CEO, manajer, dan pemilik bisnis yang sukses dengan solusi AI dan otomasi kami.',
  keywords: [
    'testimoni Abdul Ghani Global',
    'review software AI Indonesia',
    'ulasan klien software house',
    'testimonial automation tools',
    'kepuasan pelanggan software',
    'klien software AI Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Testimoni Klien | Abdul Ghani Global',
    description:
      'Ulasan nyata dari klien yang telah merasakan transformasi bisnis dengan solusi AI dan otomasi Abdul Ghani Global.',
    url: 'https://abdulghaniglobal.com/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Testimoni Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimoni Klien | Abdul Ghani Global',
    description: 'Ulasan nyata dari klien yang telah bertransformasi bersama kami.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/testimonials' },
  robots: { index: true, follow: true },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
