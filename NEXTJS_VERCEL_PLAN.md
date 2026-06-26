# FormatWA Next.js + Vercel Plan

## Current Analysis

The workspace contains a source specification file, `formatwa-complete.md`, which describes FormatWA as a single-page HTML/CSS/JavaScript tool. The app is browser-only and does not require a backend, database, authentication, or API routes.

Core features from the specification:

- WhatsApp and Telegram text formatter
- Bold, italic, strikethrough, monospace, bold italic, code block, and Telegram quote formatting
- Uppercase, lowercase, title case, and reverse transformations
- Live formatted preview and raw mode
- Copy-to-clipboard action with toast feedback
- Character counter
- Quick message templates
- Formatting cheatsheet, FAQ, how-to-use, and SEO content sections
- Schema.org, Open Graph, Twitter card, canonical, robots, and sitemap support

## Target Stack

- Next.js App Router
- TypeScript
- React client component for the formatter
- Global CSS for the existing design system
- Static-first rendering on Vercel
- No backend unless future requirements need one

## Recommended File Structure

```txt
app/
├─ globals.css
├─ layout.tsx
├─ page.tsx
├─ robots.ts
└─ sitemap.ts
components/
├─ Cheatsheet.tsx
├─ FAQ.tsx
├─ Footer.tsx
├─ FormatterTool.tsx
├─ Header.tsx
├─ Hero.tsx
├─ HowToUse.tsx
└─ SeoContent.tsx
lib/
├─ formatter.ts
└─ templates.ts
```

## Migration Plan

1. Create a Next.js App Router project in the workspace root.
2. Move design tokens and layout styling into `app/globals.css`.
3. Convert static HTML sections into reusable React components.
4. Keep only interactive formatter behavior inside a client component.
5. Move formatter transformations and preview rendering into `lib/formatter.ts`.
6. Move quick templates into `lib/templates.ts`.
7. Add SEO metadata through the Next.js metadata API.
8. Add JSON-LD structured data to the homepage.
9. Add `robots.ts` and `sitemap.ts` for Vercel-friendly SEO output.
10. Verify locally with install, lint, and production build.

## SEO Plan

Homepage targets:

- `bold text for whatsapp`
- `whatsapp italic generator`
- `telegram text formatter`
- `how to make text bold in whatsapp`
- `whatsapp strikethrough`
- `whatsapp formatting symbols`
- `monospace whatsapp`
- `format whatsapp message online`

Future pages:

- `/whatsapp-bold-text-generator`
- `/telegram-formatting-guide`
- `/whatsapp-emoji-symbols`
- `/how-to-format-whatsapp-messages`

## Vercel Deployment Plan

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the default framework preset: Next.js.
4. Set production domain to `formatwa.app`.
5. Verify `https://formatwa.app/robots.txt` and `https://formatwa.app/sitemap.xml` after deployment.
6. Check mobile layout, formatter behavior, copy button, metadata, and console errors.

## AdSense Plan

Add AdSense only after approval.

Recommended placements:

- Below hero
- Between formatter and quick templates
- Below cheatsheet

Reserve ad space in the layout to reduce CLS.

## Verification Checklist

- `npm install` succeeds
- `npm run lint` succeeds
- `npm run build` succeeds
- Formatter works on desktop and mobile
- Copy-to-clipboard works on HTTPS
- Metadata, canonical, Open Graph, robots, and sitemap are correct
