import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://abdulghaniglobal.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Abdul Ghani Global | AI-Powered Software Solutions',
    template: '%s | Abdul Ghani Global',
  },
  icons: {
    icon: '/logo_nobg.png',
    shortcut: '/logo_nobg.png',
    apple: '/logo_nobg.png',
  },
  description:
    'Abdul Ghani Global membangun solusi software cerdas berbasis AI dan alat otomasi canggih yang menyelesaikan masalah nyata bisnis. Spesialis AI Apps, WhatsApp Blast, n8n workflow automation — berbasis di Indonesia.',
  keywords: [
    'Abdul Ghani Global',
    'software AI Indonesia',
    'AI-powered apps',
    'automation tools',
    'WhatsApp Blast',
    'n8n automation',
    'workflow automation',
    'aplikasi AI',
    'software solutions Indonesia',
    'otomasi bisnis',
    'LLM integration',
    'Next.js development',
    'custom software Indonesia',
  ],
  authors: [{ name: 'Abdul Ghani Global', url: BASE_URL }],
  creator: 'Abdul Ghani Global',
  publisher: 'Abdul Ghani Global',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: BASE_URL,
    siteName: 'Abdul Ghani Global',
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description:
      'Solusi software cerdas berbasis AI dan otomasi untuk bisnis. Spesialis AI Apps, WhatsApp Blast, n8n workflow automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Ghani Global — AI-Powered Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@abdulghaniglobal',
    creator: '@abdulghaniglobal',
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description:
      'Solusi software cerdas berbasis AI dan otomasi untuk bisnis. Spesialis AI Apps, WhatsApp Blast, n8n automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
