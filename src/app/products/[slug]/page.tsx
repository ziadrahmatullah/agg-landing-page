import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProductSlugs, getProductBySlug } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.title} | Abdul Ghani Global`,
      description: product.description.slice(0, 160),
      url: `https://abdulghaniglobal.com/products/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Abdul Ghani Global`,
      description: product.description.slice(0, 160),
      images: ['/og-image.png'],
    },
    alternates: { canonical: `https://abdulghaniglobal.com/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
