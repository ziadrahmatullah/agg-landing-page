import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Tentang Kami — Visi, Misi & Tim',
  description:
    'Kenali Abdul Ghani Global lebih dalam — kisah kami, visi membangun software AI yang transformatif, nilai-nilai perusahaan, dan tim profesional di balik setiap solusi inovatif yang kami hadirkan.',
  keywords: [
    'tentang Abdul Ghani Global',
    'profil perusahaan software AI',
    'visi misi software house Indonesia',
    'tim developer AI Indonesia',
    'about us software company',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Tentang Kami | Abdul Ghani Global',
    description:
      'Kisah, visi, misi, dan tim di balik Abdul Ghani Global — perusahaan software AI terdepan di Indonesia.',
    url: 'https://abdulghaniglobal.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tentang Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami | Abdul Ghani Global',
    description: 'Kisah, visi, misi, dan tim Abdul Ghani Global.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/about' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutClient />;
}
