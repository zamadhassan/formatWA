const rows = [
  ['Bold', '*text*', '*Hello*', <b key="bold">Hello</b>, 'WhatsApp + Telegram'],
  ['Italic', '_text_', '_Hello_', <i key="italic">Hello</i>, 'WhatsApp + Telegram'],
  ['Strikethrough', '~text~', '~Hello~', <s key="strike">Hello</s>, 'WhatsApp + Telegram'],
  ['Monospace', '`text`', '`Hello`', <code key="mono">Hello</code>, 'WhatsApp + Telegram'],
  ['Bold Italic', '*_text_*', '*_Hello_*', <b key="bi"><i>Hello</i></b>, 'WhatsApp + Telegram'],
  ['Code Block', '```text```', '```code here```', <code key="code">code here</code>, 'WhatsApp + Telegram'],
  ['Quote', '> text', '> Reply to this', 'Reply to this', 'Telegram only'],
];

export function Cheatsheet() {
  return (
    <section className="tool-section cheatsheet-section" id="cheatsheet">
      <h2 className="section-title">WhatsApp &amp; Telegram Formatting Cheatsheet</h2>
      <p className="section-sub">
        All formatting symbols supported by WhatsApp and Telegram - bookmark this page for quick reference.
      </p>

      <div className="table-wrap">
        <table className="cheat-table">
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
            {rows.map(([style, symbol, example, result, rowPlatform]) => (
              <tr key={String(style)}>
                <td>{style}</td>
                <td>
                  <span className="cheat-code">{symbol}</span>
                </td>
                <td>
                  <span className="cheat-code">{example}</span>
                </td>
                <td>{result}</td>
                <td>{rowPlatform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
