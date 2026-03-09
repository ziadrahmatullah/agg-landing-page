import type { Metadata } from 'next';
import TechStackClient from './TechStackClient';

export const metadata: Metadata = {
  title: 'Tech Stack',
  description:
    'Discover the technologies Abdul Ghani Global uses: Next.js, TypeScript, n8n, OpenAI/LLMs, Node.js, Tailwind CSS, and more.',
  openGraph: {
    title: 'Tech Stack | Abdul Ghani Global',
    description: 'The modern technologies we use to build fast, reliable software solutions.',
    url: 'https://abdulghaniglobal.com/tech-stack',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tech Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | Abdul Ghani Global',
    description: 'Our modern technology stack.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/tech-stack' },
};

export default function TechStackPage() {
  return <TechStackClient />;
}
