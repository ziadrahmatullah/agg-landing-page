import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Produk & Layanan — AI Apps & Automation Tools',
  description:
    'Jelajahi produk unggulan Abdul Ghani Global: Aplikasi bertenaga AI untuk otomasi cerdas dan efisiensi operasional, serta Automation Tools berbasis n8n termasuk WhatsApp Blast untuk bisnis Anda.',
  keywords: [
    'produk software AI Indonesia',
    'AI-powered apps',
    'automation tools Indonesia',    'WhatsApp Blast bisnis',
    'n8n workflow automation',
    'aplikasi otomasi',
    'software bisnis Indonesia',
    'layanan software AI',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Produk & Layanan | Abdul Ghani Global',
    description:
      'AI-Powered Apps dan Automation Tools — solusi software cerdas yang mengubah cara bisnis beroperasi.',
    url: 'https://abdulghaniglobal.com/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produk & Layanan | Abdul Ghani Global',
    description: 'AI Apps dan Automation Tools untuk transformasi bisnis Anda.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/products' },
  robots: { index: true, follow: true },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
