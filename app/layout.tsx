import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { getSiteUrl } from '@/lib/site';

import './globals.css';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'FormatWA',
  title: 'WhatsApp Text Formatter - Bold, Italic, Strikethrough | FormatWA',
  description:
    'Free WhatsApp and Telegram message formatter. Make text bold, italic, strikethrough, monospace, and more. Copy formatted text instantly - no signup required.',
  keywords: [
    'whatsapp bold text',
    'whatsapp italic generator',
    'telegram text formatter',
    'bold text for whatsapp',
    'whatsapp font changer',
    'whatsapp text styles',
    'strikethrough whatsapp',
    'monospace telegram',
    'format whatsapp message',
    'whatsapp formatting symbols',
  ],
  authors: [{ name: 'FormatWA' }],
  creator: 'FormatWA',
  publisher: 'FormatWA',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: 'WhatsApp Text Formatter - Bold, Italic, Strikethrough | FormatWA',
    description: 'Format WhatsApp and Telegram messages instantly. Bold, italic, strikethrough, monospace - free forever.',
    url: '/',
    siteName: 'FormatWA',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Text Formatter | FormatWA',
    description: 'Format WhatsApp and Telegram messages for free. Bold, italic, strikethrough and more.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0f0d',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
