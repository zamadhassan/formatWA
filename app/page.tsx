import { Cheatsheet } from '@/components/Cheatsheet';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FormatterTool } from '@/components/FormatterTool';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowToUse } from '@/components/HowToUse';
import { SeoContent } from '@/components/SeoContent';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'FormatWA - WhatsApp & Telegram Formatter',
      url: siteUrl,
      description:
        'Free online tool to format WhatsApp and Telegram messages with bold, italic, strikethrough, monospace, and more text styles.',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Bold text for WhatsApp',
        'Italic text generator',
        'Strikethrough text',
        'Monospace formatting',
        'Telegram message formatter',
        'One-click copy',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I make text bold in WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrap your text with asterisks, like *your text*, to make it bold in WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I write italic text in WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrap your text with underscores, like _your text_, to make it italic in WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is FormatWA free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. FormatWA is free, browser-based, and does not require signup.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <FormatterTool />
        <Cheatsheet />
        <HowToUse />
        <FAQ />
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}
