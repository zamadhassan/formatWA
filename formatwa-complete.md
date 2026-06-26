# FormatWA — WhatsApp & Telegram Message Formatter
## Complete Build Prompt for AI Code Editor (Cursor / Windsurf / Copilot)

---

## 🎯 PROJECT OVERVIEW

Build a **single-page HTML/CSS/JS tool** called **FormatWA** — a free WhatsApp and Telegram message formatter. No frameworks, no backend, no build tools. Pure HTML + CSS + Vanilla JS. One file: `index.html`.

**Live URL target:** `formatwa.app` (or subdomain of existing site)
**Primary goal:** AdSense traffic from organic Google search
**Target audience:** WhatsApp/Telegram users who want bold, italic, strikethrough, monospace, and special formatted text

---

## 📁 FILE STRUCTURE

```
index.html        ← entire app lives here (HTML + CSS + JS)
```

Single file only. All CSS in `<style>` tag. All JS in `<script>` tag at bottom.

---

## 🎨 DESIGN TOKENS (implement exactly)

```css
:root {
  --bg-primary: #0a0f0d;
  --bg-secondary: #111a15;
  --bg-card: #162019;
  --bg-input: #0d1510;
  --border: #1f3328;
  --border-hover: #25D366;
  --accent: #25D366;
  --accent-dark: #128C7E;
  --accent-glow: rgba(37, 211, 102, 0.15);
  --text-primary: #e8f5ee;
  --text-secondary: #7aab8a;
  --text-muted: #4a7a5a;
  --white: #ffffff;
  --danger: #ff4d4d;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --shadow-card: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-glow: 0 0 20px rgba(37, 211, 102, 0.1);
}
```

---

## 🏗️ FULL HTML STRUCTURE

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- PRIMARY SEO -->
  <title>WhatsApp Text Formatter — Bold, Italic, Strikethrough | FormatWA</title>
  <meta name="description" content="Free WhatsApp and Telegram message formatter. Make text bold, italic, strikethrough, monospace, and more. Copy formatted text instantly — no signup required." />
  <meta name="keywords" content="whatsapp bold text, whatsapp italic generator, telegram text formatter, bold text for whatsapp, whatsapp font changer, whatsapp text styles, strikethrough whatsapp, monospace telegram, format whatsapp message, whatsapp formatting symbols" />
  <meta name="author" content="FormatWA" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="https://formatwa.app/" />

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="WhatsApp Text Formatter — Bold, Italic, Strikethrough | FormatWA" />
  <meta property="og:description" content="Format WhatsApp and Telegram messages instantly. Bold, italic, strikethrough, monospace — free forever." />
  <meta property="og:url" content="https://formatwa.app/" />
  <meta property="og:site_name" content="FormatWA" />
  <meta property="og:locale" content="en_US" />

  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="WhatsApp Text Formatter | FormatWA" />
  <meta name="twitter:description" content="Format WhatsApp and Telegram messages for free. Bold, italic, strikethrough and more." />

  <!-- SCHEMA.ORG STRUCTURED DATA -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FormatWA — WhatsApp & Telegram Formatter",
    "url": "https://formatwa.app",
    "description": "Free online tool to format WhatsApp and Telegram messages with bold, italic, strikethrough, monospace, and more text styles.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Bold text for WhatsApp",
      "Italic text generator",
      "Strikethrough text",
      "Monospace formatting",
      "Telegram message formatter",
      "One-click copy"
    ]
  }
  </script>

  <!-- FONTS -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <style>
    /* === RESET === */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: var(--font-main);
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      min-height: 100vh;
    }

    /* === HEADER / NAV === */
    header {
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border);
      padding: 0 24px;
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .logo-icon {
      width: 36px; height: 36px;
      background: var(--accent);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px;
    }
    .logo-text {
      font-size: 20px;
      font-weight: 800;
      color: var(--white);
      letter-spacing: -0.5px;
    }
    .logo-text span { color: var(--accent); }
    nav { display: flex; gap: 4px; }
    nav a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: var(--radius-sm);
      transition: all 0.2s;
    }
    nav a:hover { color: var(--accent); background: var(--accent-glow); }

    /* === HERO === */
    .hero {
      text-align: center;
      padding: 64px 24px 48px;
      max-width: 800px;
      margin: 0 auto;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--accent-glow);
      border: 1px solid rgba(37, 211, 102, 0.3);
      color: var(--accent);
      font-size: 12px;
      font-weight: 600;
      padding: 4px 14px;
      border-radius: 999px;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .hero h1 {
      font-size: clamp(28px, 5vw, 52px);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -1.5px;
      color: var(--white);
      margin-bottom: 16px;
    }
    .hero h1 em {
      font-style: normal;
      color: var(--accent);
    }
    .hero p {
      font-size: 17px;
      color: var(--text-secondary);
      max-width: 560px;
      margin: 0 auto 32px;
    }
    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
    }
    .stat {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--text-muted);
    }
    .stat-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--accent);
    }

    /* === MAIN TOOL === */
    .tool-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px 64px;
    }

    /* FORMAT BUTTONS BAR */
    .format-bar {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      padding: 14px 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }
    .format-bar-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--text-muted);
      margin-right: 4px;
    }
    .fmt-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
      background: var(--bg-secondary);
      color: var(--text-primary);
      font-family: var(--font-main);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.18s;
      white-space: nowrap;
    }
    .fmt-btn:hover {
      border-color: var(--accent);
      background: var(--accent-glow);
      color: var(--accent);
      transform: translateY(-1px);
    }
    .fmt-btn .btn-preview {
      font-size: 13px;
      opacity: 0.7;
    }
    .fmt-btn.active {
      border-color: var(--accent);
      background: var(--accent-glow);
      color: var(--accent);
    }
    .fmt-divider {
      width: 1px; height: 28px;
      background: var(--border);
      margin: 0 4px;
    }

    /* EDITOR AREA */
    .editor-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid var(--border);
      border-top: none;
      border-radius: 0 0 var(--radius-lg) var(--radius-lg);
      overflow: hidden;
    }
    .editor-pane {
      display: flex;
      flex-direction: column;
    }
    .editor-pane:first-child {
      border-right: 1px solid var(--border);
    }
    .pane-header {
      background: var(--bg-secondary);
      padding: 10px 16px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .pane-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--text-muted);
    }
    .pane-actions { display: flex; gap: 6px; }
    .pane-btn {
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text-muted);
      font-size: 12px;
      padding: 3px 10px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .pane-btn:hover { border-color: var(--accent); color: var(--accent); }

    #input-textarea {
      width: 100%;
      min-height: 320px;
      background: var(--bg-input);
      color: var(--text-primary);
      border: none;
      outline: none;
      padding: 20px;
      font-family: var(--font-main);
      font-size: 15px;
      line-height: 1.7;
      resize: vertical;
    }
    #input-textarea::placeholder { color: var(--text-muted); }

    .output-area {
      min-height: 320px;
      background: var(--bg-input);
      padding: 20px;
      font-size: 15px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-break: break-word;
      overflow-y: auto;
    }
    .output-area.whatsapp-preview {
      /* Simulate WhatsApp bubble */
      font-family: var(--font-main);
    }
    .output-area b, .output-area strong { font-weight: 700; }
    .output-area i, .output-area em { font-style: italic; }
    .output-area s, .output-area del { text-decoration: line-through; }
    .output-area code {
      font-family: var(--font-mono);
      background: rgba(37,211,102,0.08);
      padding: 1px 4px;
      border-radius: 4px;
    }

    /* COPY BUTTON */
    .copy-strip {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border);
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .char-count { font-size: 12px; color: var(--text-muted); }
    .copy-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--accent);
      color: #000;
      border: none;
      border-radius: var(--radius-sm);
      padding: 8px 20px;
      font-family: var(--font-main);
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.18s;
    }
    .copy-btn:hover { background: #1db954; transform: translateY(-1px); }
    .copy-btn.copied { background: #128C7E; }

    /* PLATFORM TABS */
    .platform-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 16px;
      background: var(--bg-card);
      padding: 6px;
      border-radius: var(--radius-md);
      width: fit-content;
    }
    .tab-btn {
      padding: 8px 20px;
      border: none;
      border-radius: var(--radius-sm);
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-main);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
    }
    .tab-btn.active {
      background: var(--accent);
      color: #000;
    }

    /* === QUICK FORMAT CARDS === */
    .quick-section {
      margin-top: 48px;
    }
    .section-title {
      font-size: 22px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
    }
    .section-sub {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .quick-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 12px;
    }
    .quick-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 16px 20px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .quick-card:hover {
      border-color: var(--accent);
      background: var(--accent-glow);
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow);
    }
    .quick-card-info { flex: 1; }
    .quick-card-name {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 4px;
    }
    .quick-card-example {
      font-size: 13px;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
    .quick-card-tag {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 999px;
      font-weight: 600;
    }
    .tag-wa { background: rgba(37,211,102,0.15); color: var(--accent); }
    .tag-tg { background: rgba(0,136,204,0.15); color: #0088cc; }
    .tag-both { background: rgba(255,255,255,0.08); color: var(--text-secondary); }

    /* === HOW TO USE === */
    .how-section {
      margin-top: 64px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 40px;
    }
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      margin-top: 28px;
    }
    .step {
      text-align: center;
    }
    .step-num {
      width: 44px; height: 44px;
      border-radius: 50%;
      background: var(--accent);
      color: #000;
      font-weight: 800;
      font-size: 18px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 14px;
    }
    .step h3 { font-size: 15px; font-weight: 600; color: var(--white); margin-bottom: 6px; }
    .step p { font-size: 13px; color: var(--text-muted); }

    /* === FAQ / SEO SECTION === */
    .faq-section { margin-top: 64px; }
    .faq-item {
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      margin-bottom: 8px;
      overflow: hidden;
    }
    .faq-q {
      width: 100%;
      background: var(--bg-card);
      border: none;
      color: var(--text-primary);
      font-family: var(--font-main);
      font-size: 15px;
      font-weight: 600;
      padding: 18px 20px;
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.15s;
    }
    .faq-q:hover { background: var(--accent-glow); }
    .faq-q .faq-icon { color: var(--accent); font-size: 20px; transition: transform 0.2s; }
    .faq-q.open .faq-icon { transform: rotate(45deg); }
    .faq-a {
      display: none;
      padding: 0 20px 18px;
      background: var(--bg-card);
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.7;
    }
    .faq-a.open { display: block; }

    /* === CHEATSHEET TABLE === */
    .cheatsheet-section { margin-top: 64px; }
    .cheat-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    .cheat-table th {
      background: var(--bg-secondary);
      padding: 12px 20px;
      text-align: left;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
    }
    .cheat-table td {
      padding: 12px 20px;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
      color: var(--text-secondary);
    }
    .cheat-table tr:last-child td { border-bottom: none; }
    .cheat-table tr:hover td { background: var(--accent-glow); }
    .cheat-code {
      font-family: var(--font-mono);
      font-size: 13px;
      background: var(--bg-input);
      padding: 2px 8px;
      border-radius: 4px;
      color: var(--accent);
    }

    /* === FOOTER === */
    footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border);
      padding: 40px 24px;
      margin-top: 80px;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 32px;
      margin-bottom: 32px;
    }
    .footer-brand p {
      font-size: 13px;
      color: var(--text-muted);
      max-width: 300px;
      margin-top: 8px;
    }
    .footer-links h4 {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--text-muted);
      margin-bottom: 12px;
    }
    .footer-links ul { list-style: none; }
    .footer-links ul li { margin-bottom: 6px; }
    .footer-links ul a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 13px;
      transition: color 0.15s;
    }
    .footer-links ul a:hover { color: var(--accent); }
    .footer-bottom {
      border-top: 1px solid var(--border);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
      color: var(--text-muted);
    }

    /* === TOAST === */
    .toast {
      position: fixed;
      bottom: 32px;
      right: 32px;
      background: var(--accent);
      color: #000;
      padding: 12px 24px;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 14px;
      opacity: 0;
      transform: translateY(16px);
      transition: all 0.25s;
      z-index: 9999;
      pointer-events: none;
    }
    .toast.show { opacity: 1; transform: translateY(0); }

    /* === RESPONSIVE === */
    @media (max-width: 768px) {
      .editor-layout { grid-template-columns: 1fr; }
      .editor-pane:first-child { border-right: none; border-bottom: 1px solid var(--border); }
      .how-section { padding: 24px; }
      .footer-top { flex-direction: column; }
      nav { display: none; }
      .hero { padding: 40px 24px 32px; }
    }
  </style>
</head>

<body>

<!-- TOAST -->
<div class="toast" id="toast">✓ Copied to clipboard!</div>

<!-- HEADER -->
<header>
  <div class="nav-inner">
    <a href="/" class="logo">
      <div class="logo-icon">💬</div>
      <span class="logo-text">Format<span>WA</span></span>
    </a>
    <nav>
      <a href="#tool">Formatter</a>
      <a href="#cheatsheet">Cheatsheet</a>
      <a href="#how-to-use">How to Use</a>
      <a href="#faq">FAQ</a>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-badge">✦ 100% Free · No Signup</div>
  <h1>Format <em>WhatsApp</em> &<br/>Telegram Messages</h1>
  <p>Bold, italic, strikethrough, monospace and more. Type your message, click a format, copy and paste — done in seconds.</p>
  <div class="hero-stats">
    <span class="stat"><span class="stat-dot"></span> Works in all WhatsApp versions</span>
    <span class="stat"><span class="stat-dot"></span> Telegram supported</span>
    <span class="stat"><span class="stat-dot"></span> Live preview</span>
    <span class="stat"><span class="stat-dot"></span> One-click copy</span>
  </div>
</section>

<!-- MAIN TOOL -->
<section class="tool-section" id="tool">

  <!-- Platform Tabs -->
  <div class="platform-tabs">
    <button class="tab-btn active" data-platform="whatsapp" onclick="switchPlatform('whatsapp', this)">📱 WhatsApp</button>
    <button class="tab-btn" data-platform="telegram" onclick="switchPlatform('telegram', this)">✈️ Telegram</button>
  </div>

  <!-- Format Buttons Bar -->
  <div class="format-bar">
    <span class="format-bar-label">Format:</span>
    <button class="fmt-btn" onclick="applyFormat('bold')" title="Bold — wrap with *asterisks*">
      <b>B</b> <span class="btn-preview">*bold*</span>
    </button>
    <button class="fmt-btn" onclick="applyFormat('italic')" title="Italic — wrap with _underscores_">
      <i>I</i> <span class="btn-preview">_italic_</span>
    </button>
    <button class="fmt-btn" onclick="applyFormat('strike')" title="Strikethrough — wrap with ~tildes~">
      <s>S</s> <span class="btn-preview">~strike~</span>
    </button>
    <button class="fmt-btn" onclick="applyFormat('mono')" title="Monospace — wrap with `backticks`">
      <code>M</code> <span class="btn-preview">`mono`</span>
    </button>
    <div class="fmt-divider"></div>
    <button class="fmt-btn" onclick="applyFormat('bold_italic')" title="Bold + Italic">
      <b><i>BI</i></b>
    </button>
    <button class="fmt-btn" onclick="applyFormat('code_block')" title="Code block — triple backticks">
      <code>{ }</code>
    </button>
    <button class="fmt-btn" onclick="applyFormat('quote')" title="Quote — Telegram only" id="btn-quote">
      ❝ Quote
    </button>
    <div class="fmt-divider"></div>
    <button class="fmt-btn" onclick="applyFormat('upper')">⬆ UPPER</button>
    <button class="fmt-btn" onclick="applyFormat('lower')">⬇ lower</button>
    <button class="fmt-btn" onclick="applyFormat('title')">Aa Title</button>
    <button class="fmt-btn" onclick="applyFormat('reverse')">⇄ Reverse</button>
    <div class="fmt-divider"></div>
    <button class="fmt-btn" onclick="clearAll()" style="color: var(--danger); border-color: var(--danger)">✕ Clear</button>
  </div>

  <!-- Editor + Preview -->
  <div class="editor-layout">
    <!-- Left: Input -->
    <div class="editor-pane">
      <div class="pane-header">
        <span class="pane-title">✏️ Type your message</span>
        <div class="pane-actions">
          <button class="pane-btn" onclick="clearAll()">Clear</button>
        </div>
      </div>
      <textarea
        id="input-textarea"
        placeholder="Type or paste your message here...&#10;&#10;Select text and click a format button above, or type the symbols manually:&#10;• *bold*&#10;• _italic_&#10;• ~strikethrough~&#10;• `monospace`"
        oninput="updateOutput()"
        onselect="saveSelection()"
        onkeyup="saveSelection()"
        onmouseup="saveSelection()"
      ></textarea>
      <div class="copy-strip">
        <span class="char-count" id="char-count">0 characters</span>
        <button class="pane-btn" onclick="pasteExample()">Load example</button>
      </div>
    </div>

    <!-- Right: Preview -->
    <div class="editor-pane">
      <div class="pane-header">
        <span class="pane-title">👁️ Live preview</span>
        <div class="pane-actions">
          <button class="pane-btn" id="raw-toggle-btn" onclick="toggleRawMode()">Show raw</button>
        </div>
      </div>
      <div class="output-area whatsapp-preview" id="output-display">
        <span style="color: var(--text-muted); font-size: 14px;">Your formatted message will appear here...</span>
      </div>
      <div class="copy-strip">
        <span class="char-count" id="format-info">No formatting applied</span>
        <button class="copy-btn" id="copy-btn" onclick="copyOutput()">📋 Copy formatted text</button>
      </div>
    </div>
  </div>

  <!-- Quick Format Cards -->
  <div class="quick-section">
    <h2 class="section-title">Quick Format Templates</h2>
    <p class="section-sub">Click any card to instantly load a pre-formatted example into the editor</p>
    <div class="quick-grid">
      <div class="quick-card" onclick="loadTemplate('announcement')">
        <div class="quick-card-info">
          <div class="quick-card-name">📢 Announcement</div>
          <div class="quick-card-example">*IMPORTANT* _Please read_</div>
        </div>
        <span class="quick-card-tag tag-both">Both</span>
      </div>
      <div class="quick-card" onclick="loadTemplate('bold_message')">
        <div class="quick-card-info">
          <div class="quick-card-name">💪 Bold Message</div>
          <div class="quick-card-example">*This is fully bold*</div>
        </div>
        <span class="quick-card-tag tag-wa">WhatsApp</span>
      </div>
      <div class="quick-card" onclick="loadTemplate('meeting_invite')">
        <div class="quick-card-info">
          <div class="quick-card-name">📅 Meeting Invite</div>
          <div class="quick-card-example">*Meeting Tomorrow* at _3 PM_</div>
        </div>
        <span class="quick-card-tag tag-both">Both</span>
      </div>
      <div class="quick-card" onclick="loadTemplate('promotion')">
        <div class="quick-card-info">
          <div class="quick-card-name">🎁 Promo Message</div>
          <div class="quick-card-example">*50% OFF* ~₹500~ ₹250 only!</div>
        </div>
        <span class="quick-card-tag tag-wa">WhatsApp</span>
      </div>
      <div class="quick-card" onclick="loadTemplate('code_share')">
        <div class="quick-card-info">
          <div class="quick-card-name">💻 Code Share</div>
          <div class="quick-card-example">```console.log('hello')```</div>
        </div>
        <span class="quick-card-tag tag-tg">Telegram</span>
      </div>
      <div class="quick-card" onclick="loadTemplate('reminder')">
        <div class="quick-card-info">
          <div class="quick-card-name">⏰ Reminder</div>
          <div class="quick-card-example">_Don't forget:_ *5 PM today*</div>
        </div>
        <span class="quick-card-tag tag-both">Both</span>
      </div>
    </div>
  </div>

</section>

<!-- CHEATSHEET -->
<section class="tool-section cheatsheet-section" id="cheatsheet">
  <h2 class="section-title">WhatsApp & Telegram Formatting Cheatsheet</h2>
  <p class="section-sub">All formatting symbols supported by WhatsApp and Telegram — bookmark this page for quick reference</p>

  <table class="cheat-table">
    <thead>
      <tr>
        <th>Style</th>
        <th>Symbol to use</th>
        <th>Example input</th>
        <th>Result</th>
        <th>Platform</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Bold</b></td>
        <td><span class="cheat-code">*text*</span></td>
        <td><span class="cheat-code">*Hello*</span></td>
        <td><b>Hello</b></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td><i>Italic</i></td>
        <td><span class="cheat-code">_text_</span></td>
        <td><span class="cheat-code">_Hello_</span></td>
        <td><i>Hello</i></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td><s>Strikethrough</s></td>
        <td><span class="cheat-code">~text~</span></td>
        <td><span class="cheat-code">~Hello~</span></td>
        <td><s>Hello</s></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td><code>Monospace</code></td>
        <td><span class="cheat-code">`text`</span></td>
        <td><span class="cheat-code">`Hello`</span></td>
        <td><code>Hello</code></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td><b><i>Bold Italic</i></b></td>
        <td><span class="cheat-code">*_text_*</span></td>
        <td><span class="cheat-code">*_Hello_*</span></td>
        <td><b><i>Hello</i></b></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td>Code Block</td>
        <td><span class="cheat-code">```text```</span></td>
        <td><span class="cheat-code">```code here```</span></td>
        <td><code>code here</code></td>
        <td>WhatsApp + Telegram</td>
      </tr>
      <tr>
        <td>Quote</td>
        <td><span class="cheat-code">&gt; text</span></td>
        <td><span class="cheat-code">&gt; Reply to this</span></td>
        <td>▎ Reply to this</td>
        <td>Telegram only</td>
      </tr>
    </tbody>
  </table>
</section>

<!-- HOW TO USE -->
<section class="tool-section" id="how-to-use">
  <div class="how-section">
    <h2 class="section-title" style="text-align:center">How to Format WhatsApp Messages</h2>
    <p style="text-align:center; color: var(--text-muted); font-size:14px;">3 simple steps — done in under 10 seconds</p>
    <div class="steps-grid">
      <div class="step">
        <div class="step-num">1</div>
        <h3>Type your message</h3>
        <p>Write your WhatsApp or Telegram message in the text box on the left</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h3>Select & format</h3>
        <p>Select the text you want to style, then click Bold, Italic, Strikethrough, or any other format button</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h3>Copy & paste</h3>
        <p>Click "Copy formatted text" and paste directly into WhatsApp or Telegram — formatting applies instantly</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ (SEO-rich) -->
<section class="tool-section faq-section" id="faq">
  <h2 class="section-title">Frequently Asked Questions</h2>
  <p class="section-sub">Everything you need to know about WhatsApp and Telegram text formatting</p>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      How do I make text bold in WhatsApp? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      To make text bold in WhatsApp, wrap your text with asterisks: <code>*your text*</code>. For example, typing <code>*Hello*</code> will appear as <b>Hello</b> when sent. You can also use our formatter above — type your message, select the text, and click the Bold button. Then copy and paste into WhatsApp.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      How do I write italic text in WhatsApp? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Wrap your text with underscores to make it italic: <code>_your text_</code>. For example, <code>_Hello_</code> displays as <i>Hello</i>. Use our tool to apply italic formatting with one click.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      What is the strikethrough symbol in WhatsApp? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Use tilde (~) symbols around your text: <code>~your text~</code>. For example, <code>~wrong price~</code> displays as <s>wrong price</s>. This is great for showing price cuts, corrections, or humor in your messages.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      Does WhatsApp formatting work on all devices? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Yes, WhatsApp text formatting (bold, italic, strikethrough, monospace) works on Android, iPhone (iOS), WhatsApp Web, and the desktop app. The formatting symbols are universal across all platforms.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      How is Telegram formatting different from WhatsApp? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Both platforms support bold (*text*), italic (_text_), strikethrough (~text~), and monospace (`text`). Telegram additionally supports quote formatting (&gt; text), spoiler text, and inline code blocks with language syntax. Our formatter shows which formats work on each platform.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      Can I combine bold and italic in WhatsApp? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Yes! To make text both bold and italic, wrap it with both symbols: <code>*_your text_*</code>. This renders as <b><i>bold italic text</i></b>. Use the BI button in our formatter to apply both styles at once.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-q" onclick="toggleFaq(this)">
      Is FormatWA free to use? <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      Yes, FormatWA is completely free. No signup, no account, no limits. Format as many messages as you want — forever free.
    </div>
  </div>
</section>

<!-- SEO CONTENT BLOCK -->
<section class="tool-section" style="margin-top: 48px;">
  <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 40px;">
    <h2 style="font-size: 20px; font-weight: 700; color: var(--white); margin-bottom: 16px;">About WhatsApp Text Formatting</h2>
    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.8; margin-bottom: 12px;">
      WhatsApp supports basic text formatting directly inside messages. By using special characters — asterisks for <b>bold</b>, underscores for <i>italic</i>, tildes for <s>strikethrough</s>, and backticks for <code>monospace</code> — you can style your messages without any extra app.
    </p>
    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.8; margin-bottom: 12px;">
      FormatWA is a free <strong>WhatsApp text formatter</strong> and <strong>Telegram message formatter</strong> that makes applying these styles fast and easy. Instead of manually adding symbols, you type your message, select text, click a button, and copy the result.
    </p>
    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.8;">
      Whether you need a <strong>bold text generator for WhatsApp</strong>, want to create <strong>italic WhatsApp messages</strong>, or need a <strong>Telegram formatting tool</strong> — FormatWA handles everything in one place, for free, with a live preview so you see exactly how your message will look before sending it.
    </p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="logo">
          <div class="logo-icon">💬</div>
          <span class="logo-text">Format<span>WA</span></span>
        </a>
        <p>Free WhatsApp and Telegram message formatter. Bold, italic, strikethrough and more — no signup required.</p>
      </div>
      <div class="footer-links">
        <h4>Tools</h4>
        <ul>
          <li><a href="#tool">WhatsApp Formatter</a></li>
          <li><a href="#tool">Telegram Formatter</a></li>
          <li><a href="#cheatsheet">Formatting Cheatsheet</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Learn</h4>
        <ul>
          <li><a href="#how-to-use">How to Bold Text in WhatsApp</a></li>
          <li><a href="#how-to-use">How to Italicize WhatsApp Text</a></li>
          <li><a href="#faq">WhatsApp Formatting FAQ</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Other Free Tools</h4>
        <ul>
          <li><a href="https://easypdfnex.app/en/" target="_blank" rel="noopener">EasyPDFNex — PDF Tools</a></li>
          <li><a href="https://easycalculatornex.pro/" target="_blank" rel="noopener">EasyCalculatorNex — Calculators</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 FormatWA. Free WhatsApp & Telegram Text Formatter.</span>
      <span>No data collected · No signup required · 100% browser-based</span>
    </div>
  </div>
</footer>

<script>
  // =====================
  // STATE
  // =====================
  let currentPlatform = 'whatsapp';
  let rawMode = false;
  let savedSelectionStart = 0;
  let savedSelectionEnd = 0;

  const textarea = document.getElementById('input-textarea');
  const outputDisplay = document.getElementById('output-display');
  const charCount = document.getElementById('char-count');
  const formatInfo = document.getElementById('format-info');
  const copyBtn = document.getElementById('copy-btn');

  // =====================
  // PLATFORM SWITCH
  // =====================
  function switchPlatform(platform, btn) {
    currentPlatform = platform;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const quoteBtn = document.getElementById('btn-quote');
    if (platform === 'telegram') {
      quoteBtn.style.opacity = '1';
      quoteBtn.style.pointerEvents = 'auto';
    } else {
      quoteBtn.style.opacity = '0.4';
      quoteBtn.style.pointerEvents = 'none';
    }
    updateOutput();
  }

  // =====================
  // SELECTION TRACKING
  // =====================
  function saveSelection() {
    savedSelectionStart = textarea.selectionStart;
    savedSelectionEnd = textarea.selectionEnd;
  }

  // =====================
  // APPLY FORMAT
  // =====================
  function applyFormat(type) {
    const start = savedSelectionStart;
    const end = savedSelectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);

    let before = text.substring(0, start);
    let after = text.substring(end);
    let result = selected;

    switch(type) {
      case 'bold':        result = `*${selected}*`; break;
      case 'italic':      result = `_${selected}_`; break;
      case 'strike':      result = `~${selected}~`; break;
      case 'mono':        result = `\`${selected}\``; break;
      case 'bold_italic': result = `*_${selected}_*`; break;
      case 'code_block':  result = `\`\`\`${selected}\`\`\``; break;
      case 'quote':       result = selected.split('\n').map(l => `> ${l}`).join('\n'); break;
      case 'upper':       result = selected.toUpperCase(); break;
      case 'lower':       result = selected.toLowerCase(); break;
      case 'title':       result = selected.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()); break;
      case 'reverse':     result = selected.split('').reverse().join(''); break;
    }

    if (selected.length === 0 && ['bold','italic','strike','mono','bold_italic','code_block'].includes(type)) {
      const sym = { bold:'*', italic:'_', strike:'~', mono:'`', bold_italic:'*_', code_block:'```' };
      const s = sym[type] || '';
      const e = type === 'bold_italic' ? '_*' : s;
      textarea.value = before + s + e + after;
      const newPos = before.length + s.length;
      textarea.setSelectionRange(newPos, newPos);
    } else {
      textarea.value = before + result + after;
      textarea.setSelectionRange(before.length, before.length + result.length);
    }

    saveSelection();
    updateOutput();
    textarea.focus();
  }

  // =====================
  // RENDER OUTPUT
  // =====================
  function updateOutput() {
    const raw = textarea.value;
    charCount.textContent = raw.length + ' character' + (raw.length !== 1 ? 's' : '');

    if (!raw.trim()) {
      outputDisplay.innerHTML = '<span style="color: var(--text-muted); font-size: 14px;">Your formatted message will appear here...</span>';
      formatInfo.textContent = 'No formatting applied';
      return;
    }

    if (rawMode) {
      outputDisplay.textContent = raw;
      return;
    }

    let html = escapeHtml(raw);

    // Render formatting as HTML
    html = html.replace(/\*_(.+?)_\*/g, '<b><i>$1</i></b>'); // bold italic first
    html = html.replace(/```([\s\S]+?)```/g, '<code>$1</code>');
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');
    html = html.replace(/\*(.+?)\*/g, '<b>$1</b>');
    html = html.replace(/_(.+?)_/g, '<i>$1</i>');
    html = html.replace(/~(.+?)~/g, '<s>$1</s>');
    if (currentPlatform === 'telegram') {
      html = html.replace(/^&gt; (.+)$/gm, '<span style="border-left: 3px solid var(--accent); padding-left: 8px; color: var(--text-secondary);">$1</span>');
    }
    html = html.replace(/\n/g, '<br>');

    outputDisplay.innerHTML = html;

    // Format detection
    const formats = [];
    if (/\*.+?\*/.test(raw)) formats.push('Bold');
    if (/_(.+?)_/.test(raw)) formats.push('Italic');
    if (/~(.+?)~/.test(raw)) formats.push('Strikethrough');
    if (/`.+?`/.test(raw)) formats.push('Monospace');
    formatInfo.textContent = formats.length ? 'Formats: ' + formats.join(', ') : 'Plain text';
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // =====================
  // COPY
  // =====================
  function copyOutput() {
    const text = textarea.value;
    if (!text.trim()) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast('✓ Copied! Paste into ' + (currentPlatform === 'whatsapp' ? 'WhatsApp' : 'Telegram'));
      copyBtn.textContent = '✓ Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '📋 Copy formatted text';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  }

  // =====================
  // CLEAR
  // =====================
  function clearAll() {
    textarea.value = '';
    savedSelectionStart = 0;
    savedSelectionEnd = 0;
    updateOutput();
    textarea.focus();
  }

  // =====================
  // RAW TOGGLE
  // =====================
  function toggleRawMode() {
    rawMode = !rawMode;
    document.getElementById('raw-toggle-btn').textContent = rawMode ? 'Show preview' : 'Show raw';
    updateOutput();
  }

  // =====================
  // TEMPLATES
  // =====================
  const templates = {
    announcement: `📢 *IMPORTANT ANNOUNCEMENT*\n\n_Please read this carefully._\n\nWe have some exciting news to share with everyone. Stay tuned for more details!\n\n~Old information no longer applies.~\n\n*Thank you for your attention!*`,
    bold_message: `*This entire message is bold.*\n\nUse bold for *important words* or to *highlight key information* in your message.`,
    meeting_invite: `📅 *Meeting Tomorrow*\n\n_Time:_ *3:00 PM – 4:00 PM*\n_Location:_ Google Meet\n_Agenda:_ Q3 Review\n\nPlease confirm your attendance. ~Last week's meeting notes attached.~`,
    promotion: `🎁 *FLASH SALE — Today Only!*\n\nGet *50% OFF* on all products\n\n~Regular price: ₹1,000~\n*Sale price: ₹500 only!*\n\n_Offer ends at midnight. Don't miss it!_`,
    code_share: `Here's the fix:\n\n\`\`\`\nconst result = array.filter(x => x > 0);\nconsole.log(result);\n\`\`\`\n\n_Run this in your terminal and let me know if it works._`,
    reminder: `⏰ *Quick Reminder*\n\n_Don't forget:_ *Project deadline is today at 5 PM*\n\nPlease submit your work before the cutoff. ~Extensions are not available this time.~\n\n*Good luck everyone!* 💪`
  };

  function loadTemplate(key) {
    textarea.value = templates[key] || '';
    savedSelectionStart = textarea.value.length;
    savedSelectionEnd = textarea.value.length;
    updateOutput();
    document.getElementById('tool').scrollIntoView({ behavior: 'smooth' });
  }

  // =====================
  // PASTE EXAMPLE
  // =====================
  function pasteExample() {
    loadTemplate('announcement');
  }

  // =====================
  // TOAST
  // =====================
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // =====================
  // FAQ ACCORDION
  // =====================
  function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('open');
    }
  }

  // Init
  updateOutput();
</script>

</body>
</html>
```

---

## 📌 IMPLEMENTATION NOTES FOR THE AI CODE EDITOR

### What to do:
1. Create `index.html` and paste the entire code block above
2. Replace `https://formatwa.app/` in canonical + OG tags with your actual domain
3. Update footer "Other Free Tools" links if needed
4. Add Google AdSense `<script>` tag inside `<head>` once approved
5. Add `robots.txt` with: `User-agent: * / Allow: /`
6. Add `sitemap.xml` with the homepage URL

### AdSense ad placements (add after approval):
- **Below hero** — high visibility, before tool loads
- **Between tool and quick cards** — mid-content
- **Below cheatsheet table** — after high-value content

### SEO targets (keywords this page ranks for):
- `bold text for whatsapp`
- `whatsapp italic generator`
- `telegram text formatter`
- `how to make text bold in whatsapp`
- `whatsapp strikethrough`
- `whatsapp formatting symbols`
- `monospace whatsapp`
- `format whatsapp message online`

### Internal linking (already in footer):
- Links to `easypdfnex.app` and `easycalculatornex.pro`
- Add FormatWA link in footer of those two sites too (cross-linking)

### Future pages to add (expand SEO footprint):
- `/whatsapp-bold-text-generator` 
- `/telegram-formatting-guide`
- `/whatsapp-emoji-symbols`
- `/how-to-format-whatsapp-messages`

---

## ✅ FEATURE CHECKLIST

- [x] Bold, Italic, Strikethrough, Monospace buttons
- [x] Bold+Italic combo button
- [x] Code block (triple backtick)
- [x] Quote (Telegram only)
- [x] UPPER / lower / Title Case / Reverse
- [x] WhatsApp / Telegram platform switcher
- [x] Live preview with real HTML rendering
- [x] Raw mode toggle
- [x] One-click copy with toast notification
- [x] Character counter
- [x] 6 pre-built message templates
- [x] FAQ accordion (7 SEO-rich questions)
- [x] Formatting cheatsheet table
- [x] How-to-use section
- [x] Schema.org WebApplication structured data
- [x] Open Graph + Twitter Card meta
- [x] Canonical URL
- [x] Responsive mobile layout
- [x] Internal links to your other tools
- [x] Zero dependencies — pure HTML/CSS/JS
- [x] No backend, no server, 100% browser-based
