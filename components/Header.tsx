import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="FormatWA home">
          <div className="logo-icon" aria-hidden="true">
            WA
          </div>
          <span className="logo-text">
            Format<span>WA</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#tool">Formatter</a>
          <a href="#cheatsheet">Cheatsheet</a>
          <a href="#how-to-use">How to Use</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
