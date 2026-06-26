'use client';

import { useState, type ReactNode } from 'react';

const faqs: Array<{ question: string; answer: ReactNode }> = [
  {
    question: 'How do I make text bold in WhatsApp?',
    answer: (
      <>
        Wrap your text with asterisks: <code>*your text*</code>. For example, typing <code>*Hello*</code> will appear
        as <b>Hello</b> when sent.
      </>
    ),
  },
  {
    question: 'How do I write italic text in WhatsApp?',
    answer: (
      <>
        Wrap your text with underscores: <code>_your text_</code>. For example, <code>_Hello_</code> displays as{' '}
        <i>Hello</i>.
      </>
    ),
  },
  {
    question: 'What is the strikethrough symbol in WhatsApp?',
    answer: (
      <>
        Use tilde symbols around your text: <code>~your text~</code>. For example, <code>~wrong price~</code> displays
        as <s>wrong price</s>.
      </>
    ),
  },
  {
    question: 'Does WhatsApp formatting work on all devices?',
    answer:
      'Yes. WhatsApp text formatting works on Android, iPhone, WhatsApp Web, and the desktop app. The formatting symbols are universal across platforms.',
  },
  {
    question: 'How is Telegram formatting different from WhatsApp?',
    answer:
      'Both platforms support bold, italic, strikethrough, and monospace. Telegram additionally supports quote-style formatting, and this formatter marks quote as Telegram-only.',
  },
  {
    question: 'Can I combine bold and italic in WhatsApp?',
    answer: (
      <>
        Yes. Wrap text with both symbols: <code>*_your text_*</code>. This renders as <b><i>bold italic text</i></b>.
      </>
    ),
  },
  {
    question: 'Is FormatWA free to use?',
    answer: 'Yes. FormatWA is completely free, browser-based, and does not require signup.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="tool-section faq-section" id="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-sub">Everything you need to know about WhatsApp and Telegram text formatting.</p>

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div className="faq-item" key={faq.question}>
            <button
              type="button"
              className={`faq-q${isOpen ? ' open' : ''}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className={`faq-a${isOpen ? ' open' : ''}`} id={panelId}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </section>
  );
}
