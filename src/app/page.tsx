import type { Metadata } from 'next';
import HomeHero from '@/components/sections/HomeHero';
import HomeSummary from '@/components/sections/HomeSummary';

export const metadata: Metadata = {
  title: 'Abdul Ghani Global | AI-Powered Software Solutions',
  description:
    'Abdul Ghani Global builds intelligent, AI-powered software solutions and automation tools that solve real-world problems for businesses and communities.',
  openGraph: {
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description:
      'Intelligent AI-powered software and automation tools that transform how businesses operate.',
    url: 'https://abdulghaniglobal.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description: 'Intelligent AI-powered software and automation tools.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com' },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSummary />
    </>
  );
}
