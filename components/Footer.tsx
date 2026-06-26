import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="FormatWA home">
              <div className="logo-icon" aria-hidden="true">
                WA
              </div>
              <span className="logo-text">
                Format<span>WA</span>
              </span>
            </Link>
            <p>Free WhatsApp and Telegram message formatter. Bold, italic, strikethrough and more - no signup required.</p>
          </div>

          <div className="footer-links">
            <h4>Tools</h4>
            <ul>
              <li>
                <a href="#tool">WhatsApp Formatter</a>
              </li>
              <li>
                <a href="#tool">Telegram Formatter</a>
              </li>
              <li>
                <a href="#cheatsheet">Formatting Cheatsheet</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Learn</h4>
            <ul>
              <li>
                <a href="#how-to-use">How to Bold Text in WhatsApp</a>
              </li>
              <li>
                <a href="#how-to-use">How to Italicize WhatsApp Text</a>
              </li>
              <li>
                <a href="#faq">WhatsApp Formatting FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Other Free Tools</h4>
            <ul>
              <li>
                <a href="https://easypdfnex.app/en/" target="_blank" rel="noopener noreferrer">
                  EasyPDFNex - PDF Tools
                </a>
              </li>
              <li>
                <a href="https://easycalculatornex.pro/" target="_blank" rel="noopener noreferrer">
                  EasyCalculatorNex - Calculators
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>2026 FormatWA. Free WhatsApp &amp; Telegram Text Formatter.</span>
          <span>No data collected - no signup required - 100% browser-based.</span>
        </div>
      </div>
    </footer>
  );
}
