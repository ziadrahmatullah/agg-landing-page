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

export const metadata: Metadata = {
  title: {
    default: 'Abdul Ghani Global | AI-Powered Software Solutions',
    template: '%s | Abdul Ghani Global',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  description:
    'Abdul Ghani Global builds intelligent, AI-powered software solutions and automation tools that solve real-world problems for businesses.',
  keywords: ['AI software', 'automation', 'n8n', 'WhatsApp automation', 'AI apps', 'software solutions', 'Indonesia'],
  authors: [{ name: 'Abdul Ghani Global' }],
  creator: 'Abdul Ghani Global',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdulghaniglobal.com',
    siteName: 'Abdul Ghani Global',
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description:
      'Intelligent, AI-powered software solutions and automation tools that solve real-world problems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Ghani Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Ghani Global | AI-Powered Software Solutions',
    description:
      'Intelligent, AI-powered software solutions and automation tools that solve real-world problems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
