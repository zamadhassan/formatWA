const steps = [
  {
    title: 'Type your message',
    description: 'Write your WhatsApp or Telegram message in the text box on the left.',
  },
  {
    title: 'Select and format',
    description: 'Select the text you want to style, then click Bold, Italic, Strikethrough, or another format button.',
  },
  {
    title: 'Copy and paste',
    description: 'Click Copy formatted text and paste directly into WhatsApp or Telegram.',
  },
];

export function HowToUse() {
  return (
    <section className="tool-section" id="how-to-use">
      <div className="how-section">
        <h2 className="section-title center-text">How to Format WhatsApp Messages</h2>
        <p className="section-sub center-text">3 simple steps - done in under 10 seconds.</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step" key={step.title}>
              <div className="step-num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
