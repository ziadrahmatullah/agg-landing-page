import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore Abdul Ghani Global\'s products: AI-powered applications and smart automation tools built to solve real business challenges.',
  openGraph: {
    title: 'Our Products | Abdul Ghani Global',
    description: 'AI-powered apps and automation tools that solve real business challenges.',
    url: 'https://abdulghaniglobal.com/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Our Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products | Abdul Ghani Global',
    description: 'AI-powered apps and automation tools.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/products' },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
