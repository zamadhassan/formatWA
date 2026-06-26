# FormatWA

FormatWA is a Next.js app for formatting WhatsApp and Telegram messages with bold, italic, strikethrough, monospace, code blocks, quotes, and quick templates.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

## Deployment

Deploy on Vercel with the default Next.js preset, then point `formatwa.app` to the Vercel project.

For staging or preview deployments, no custom domain is required. The app uses Vercel's `VERCEL_URL` automatically for canonical URLs, sitemap, and robots output. When the production domain is ready, set `NEXT_PUBLIC_SITE_URL=https://formatwa.app` in Vercel.
