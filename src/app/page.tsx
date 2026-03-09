import type { Metadata } from 'next';
import HomeHero from '@/components/sections/HomeHero';
import HomeSummary from '@/components/sections/HomeSummary';

export const metadata: Metadata = {
  title: 'Abdul Ghani Global | AI-Powered Software & Automation Solutions',
  description:
    'Abdul Ghani Global — perusahaan software AI terdepan di Indonesia. Kami membangun aplikasi bertenaga AI, otomasi WhatsApp Blast via n8n, dan solusi workflow automation yang mengubah cara bisnis beroperasi.',
  keywords: [
    'Abdul Ghani Global',
    'software AI Indonesia',
    'AI-powered apps Indonesia',
    'WhatsApp Blast n8n',
    'workflow automation Indonesia',
    'aplikasi AI bisnis',
    'otomasi proses bisnis',
    'software house Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    title: 'Abdul Ghani Global | AI-Powered Software & Automation Solutions',
    description:
      'Perusahaan software AI terdepan di Indonesia. AI Apps, WhatsApp Blast, n8n automation, dan solusi transformasi digital.',
    url: 'https://abdulghaniglobal.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Abdul Ghani Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Ghani Global | AI-Powered Software & Automation Solutions',
    description: 'AI Apps, WhatsApp Blast, n8n automation — solusi software cerdas untuk bisnis Anda.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com' },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSummary />
    </>
  );
}
