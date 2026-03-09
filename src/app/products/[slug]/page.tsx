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

const productKeywords: Record<string, string[]> = {
  'ai-powered-apps': [
    'AI-powered apps Indonesia',
    'aplikasi kecerdasan buatan',
    'custom AI application',
    'NLP chatbot Indonesia',
    'predictive analytics software',
    'AI integration bisnis',
    'LLM application development',
    'machine learning apps',
  ],
  'automation-tools': [
    'automation tools Indonesia',
    'WhatsApp Blast n8n',
    'workflow automation Indonesia',
    'otomasi proses bisnis',
    'n8n integration Indonesia',
    'WhatsApp Business API automation',
    'jasa otomasi bisnis',
    'no-code automation Indonesia',
  ],
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found', robots: { index: false, follow: false } };

  const desc = product.description.slice(0, 155) + '…';

  return {
    title: `${product.title} — Solusi Cerdas untuk Bisnis Anda`,
    description: desc,
    keywords: productKeywords[slug] ?? [],
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      alternateLocale: 'en_US',
      title: `${product.title} | Abdul Ghani Global`,
      description: desc,
      url: `https://abdulghaniglobal.com/products/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Abdul Ghani Global`,
      description: desc,
      images: ['/og-image.png'],
    },
    alternates: { canonical: `https://abdulghaniglobal.com/products/${slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
