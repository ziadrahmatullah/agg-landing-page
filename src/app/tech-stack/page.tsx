import type { Metadata } from 'next';
import TechStackClient from './TechStackClient';

export const metadata: Metadata = {
  title: 'Tech Stack — Teknologi Modern yang Kami Gunakan',
  description:
    'Teknologi terpilih Abdul Ghani Global: Next.js, TypeScript, n8n, OpenAI GPT-4, Node.js, Tailwind CSS, React, PostgreSQL, Docker. Stack modern untuk membangun software yang cepat, andal, dan skalabel.',
  keywords: [
    'tech stack software Indonesia',
    'Next.js developer Indonesia',
    'n8n automation developer',
    'OpenAI GPT integration',
    'TypeScript development',
    'Node.js Indonesia',
    'teknologi software AI',
    'stack pengembangan software',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Tech Stack | Abdul Ghani Global',
    description:
      'Next.js, n8n, OpenAI, TypeScript — teknologi modern yang kami gunakan untuk membangun software terbaik.',
    url: 'https://abdulghaniglobal.com/tech-stack',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tech Stack Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | Abdul Ghani Global',
    description: 'Next.js, n8n, OpenAI, TypeScript — stack teknologi modern kami.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/tech-stack' },
  robots: { index: true, follow: true },
};

export default function TechStackPage() {
  return <TechStackClient />;
}
