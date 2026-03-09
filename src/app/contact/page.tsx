import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Hubungi Kami — Konsultasi Gratis untuk Bisnis Anda',
  description:
    'Siap mentransformasi bisnis Anda dengan solusi AI dan otomasi? Hubungi Abdul Ghani Global sekarang. Konsultasi gratis, respons cepat. Email, WhatsApp, atau isi form — kami siap membantu.',
  keywords: [
    'kontak Abdul Ghani Global',
    'konsultasi software AI Indonesia',
    'hubungi software house Indonesia',
    'jasa pembuatan aplikasi AI',
    'order automation tools Indonesia',
    'whatsapp blast jasa',
    'konsultasi n8n Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Hubungi Kami | Abdul Ghani Global',
    description:
      'Konsultasi gratis transformasi bisnis Anda dengan AI dan otomasi. Kami siap membantu!',
    url: 'https://abdulghaniglobal.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kontak Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Kami | Abdul Ghani Global',
    description: 'Konsultasi gratis transformasi bisnis dengan AI dan otomasi.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/contact' },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactClient />;
}
