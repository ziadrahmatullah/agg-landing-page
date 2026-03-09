import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Abdul Ghani Global — our story, mission, team, and values. A forward-thinking software company building AI-powered solutions.',
  openGraph: {
    title: 'About Us | Abdul Ghani Global',
    description: 'Learn about our story, mission, and the team behind Abdul Ghani Global.',
    url: 'https://abdulghaniglobal.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Abdul Ghani Global',
    description: 'Our story, mission, and values.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
