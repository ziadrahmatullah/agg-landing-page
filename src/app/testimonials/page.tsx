import type { Metadata } from 'next';
import TestimonialsClient from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'See what clients say about Abdul Ghani Global. Real reviews from businesses transformed by our AI-powered software and automation solutions.',
  openGraph: {
    title: 'Testimonials | Abdul Ghani Global',
    description: 'Client testimonials and reviews for Abdul Ghani Global.',
    url: 'https://abdulghaniglobal.com/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | Abdul Ghani Global',
    description: 'What our clients say about us.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/testimonials' },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
