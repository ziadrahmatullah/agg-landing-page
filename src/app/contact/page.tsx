import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Abdul Ghani Global. Ready to transform your business with AI-powered software? Let\'s talk.',
  openGraph: {
    title: 'Contact Us | Abdul Ghani Global',
    description: 'Ready to transform your business? Get in touch with us.',
    url: 'https://abdulghaniglobal.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Abdul Ghani Global',
    description: 'Get in touch with Abdul Ghani Global.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://abdulghaniglobal.com/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
