const stats = ['Works in all WhatsApp versions', 'Telegram supported', 'Live preview', 'One-click copy'];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">100% Free - No Signup</div>
      <h1>
        Format <em>WhatsApp</em> &amp;
        <br />
        Telegram Messages
      </h1>
      <p>
        Bold, italic, strikethrough, monospace and more. Type your message, click a format, copy and paste - done in
        seconds.
      </p>
      <div className="hero-stats" aria-label="FormatWA highlights">
        {stats.map((stat) => (
          <span className="stat" key={stat}>
            <span className="stat-dot" aria-hidden="true" />
            {stat}
          </span>
        ))}
      </div>
    </section>
  );
}
