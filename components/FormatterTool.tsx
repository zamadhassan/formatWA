'use client';

import { useRef, useState, type ChangeEvent } from 'react';

import { templateCards, templates, type TemplateKey } from '@/lib/templates';
import {
  applyFormatToText,
  detectFormats,
  renderPreview,
  type FormatType,
  type Platform,
} from '@/lib/formatter';

type SelectionRange = {
  start: number;
  end: number;
};

const formatButtons: Array<{
  type: FormatType;
  label: string;
  preview?: string;
  title?: string;
  disabledOn?: Platform;
}> = [
  { type: 'bold', label: 'B', preview: '*bold*', title: 'Bold - wrap with asterisks' },
  { type: 'italic', label: 'I', preview: '_italic_', title: 'Italic - wrap with underscores' },
  { type: 'strike', label: 'S', preview: '~strike~', title: 'Strikethrough - wrap with tildes' },
  { type: 'mono', label: 'M', preview: '`mono`', title: 'Monospace - wrap with backticks' },
  { type: 'bold_italic', label: 'BI', title: 'Bold + italic' },
  { type: 'code_block', label: '{ }', title: 'Code block - triple backticks' },
  { type: 'quote', label: 'Quote', title: 'Telegram quote', disabledOn: 'whatsapp' },
  { type: 'upper', label: 'UPPER' },
  { type: 'lower', label: 'lower' },
  { type: 'title', label: 'Title' },
  { type: 'reverse', label: 'Reverse' },
];

export function FormatterTool() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState<Platform>('whatsapp');
  const [rawMode, setRawMode] = useState(false);
  const [selection, setSelection] = useState<SelectionRange>({ start: 0, end: 0 });
  const [toastMessage, setToastMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const formats = detectFormats(text);
  const formatInfo = !text.trim() ? 'No formatting applied' : formats.length ? `Formats: ${formats.join(', ')}` : 'Plain text';
  const charLabel = `${text.length} character${text.length === 1 ? '' : 's'}`;

  function saveSelection() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    setSelection({
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
    });
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.currentTarget.value);
    setSelection({
      start: event.currentTarget.selectionStart,
      end: event.currentTarget.selectionEnd,
    });
  }

  function restoreSelection(start: number, end: number) {
    window.requestAnimationFrame(() => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      textarea.focus();
      textarea.setSelectionRange(start, end);
    });
  }

  function applyFormat(type: FormatType) {
    if (type === 'quote' && platform === 'whatsapp') return;

    const result = applyFormatToText(text, selection.start, selection.end, type);
    setText(result.value);
    setSelection({ start: result.selectionStart, end: result.selectionEnd });
    restoreSelection(result.selectionStart, result.selectionEnd);
  }

  function clearAll() {
    setText('');
    setSelection({ start: 0, end: 0 });
    restoreSelection(0, 0);
  }

  function loadTemplate(key: TemplateKey) {
    const value = templates[key];
    setText(value);
    setSelection({ start: value.length, end: value.length });
    restoreSelection(value.length, value.length);
    document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' });
  }

  function showToast(message: string) {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(''), 2500);
  }

  async function copyOutput() {
    if (!text.trim()) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (!copyWithFallback(text)) {
        throw new Error('Clipboard unavailable');
      }

      showToast(`Copied. Paste into ${platform === 'whatsapp' ? 'WhatsApp' : 'Telegram'}.`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Copy failed. Select the text and copy manually.');
    }
  }

  return (
    <section className="tool-section" id="tool">
      <div className="platform-tabs" role="tablist" aria-label="Choose formatting platform">
        <button
          type="button"
          className={`tab-btn${platform === 'whatsapp' ? ' active' : ''}`}
          onClick={() => setPlatform('whatsapp')}
          role="tab"
          aria-selected={platform === 'whatsapp'}
        >
          WhatsApp
        </button>
        <button
          type="button"
          className={`tab-btn${platform === 'telegram' ? ' active' : ''}`}
          onClick={() => setPlatform('telegram')}
          role="tab"
          aria-selected={platform === 'telegram'}
        >
          Telegram
        </button>
      </div>

      <div className="format-bar" aria-label="Message formatting actions">
        <span className="format-bar-label">Format:</span>
        {formatButtons.map((button, index) => (
          <FragmentedButton
            key={button.type}
            index={index}
            button={button}
            platform={platform}
            onClick={() => applyFormat(button.type)}
          />
        ))}
        <div className="fmt-divider" aria-hidden="true" />
        <button type="button" className="fmt-btn danger-btn" onMouseDown={(event) => event.preventDefault()} onClick={clearAll}>
          Clear
        </button>
      </div>

      <div className="editor-layout">
        <div className="editor-pane">
          <div className="pane-header">
            <span className="pane-title">Type your message</span>
            <div className="pane-actions">
              <button type="button" className="pane-btn" onClick={clearAll}>
                Clear
              </button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="input-textarea"
            aria-label="Type or paste your WhatsApp or Telegram message"
            placeholder={
              'Type or paste your message here...\n\nSelect text and click a format button above, or type the symbols manually:\n- *bold*\n- _italic_\n- ~strikethrough~\n- `monospace`'
            }
            value={text}
            onChange={handleChange}
            onSelect={saveSelection}
            onKeyUp={saveSelection}
            onMouseUp={saveSelection}
          />
          <div className="copy-strip">
            <span className="char-count">{charLabel}</span>
            <button type="button" className="pane-btn" onClick={() => loadTemplate('announcement')}>
              Load example
            </button>
          </div>
        </div>

        <div className="editor-pane">
          <div className="pane-header">
            <span className="pane-title">Live preview</span>
            <div className="pane-actions">
              <button type="button" className="pane-btn" onClick={() => setRawMode((current) => !current)}>
                {rawMode ? 'Show preview' : 'Show raw'}
              </button>
            </div>
          </div>
          <Preview text={text} platform={platform} rawMode={rawMode} />
          <div className="copy-strip">
            <span className="char-count">{formatInfo}</span>
            <button type="button" className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyOutput}>
              {copied ? 'Copied' : 'Copy formatted text'}
            </button>
          </div>
        </div>
      </div>

      <div className="quick-section">
        <h2 className="section-title">Quick Format Templates</h2>
        <p className="section-sub">Click any card to instantly load a pre-formatted example into the editor.</p>
        <div className="quick-grid">
          {templateCards.map((card) => (
            <button type="button" className="quick-card" key={card.key} onClick={() => loadTemplate(card.key)}>
              <span className="quick-card-info">
                <span className="quick-card-name">{card.name}</span>
                <span className="quick-card-example">{card.example}</span>
              </span>
              <span className={`quick-card-tag ${tagClass(card.platform)}`}>{card.platform}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`toast${toastMessage ? ' show' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>
    </section>
  );
}

function FragmentedButton({
  button,
  index,
  platform,
  onClick,
}: {
  button: (typeof formatButtons)[number];
  index: number;
  platform: Platform;
  onClick: () => void;
}) {
  const shouldAddDivider = index === 4 || index === 7;
  const disabled = button.disabledOn === platform;

  return (
    <>
      {shouldAddDivider ? <div className="fmt-divider" aria-hidden="true" /> : null}
      <button
        type="button"
        className="fmt-btn"
        title={button.title}
        disabled={disabled}
        onMouseDown={(event) => event.preventDefault()}
        onClick={onClick}
      >
        <span>{button.label}</span>
        {button.preview ? <span className="btn-preview">{button.preview}</span> : null}
      </button>
    </>
  );
}

function Preview({ text, platform, rawMode }: { text: string; platform: Platform; rawMode: boolean }) {
  if (!text.trim()) {
    return (
      <div className="output-area">
        <span className="placeholder-text">Your formatted message will appear here...</span>
      </div>
    );
  }

  if (rawMode) {
    return <div className="output-area">{text}</div>;
  }

  return <div className="output-area" dangerouslySetInnerHTML={{ __html: renderPreview(text, platform) }} />;
}

function tagClass(platform: 'WhatsApp' | 'Telegram' | 'Both') {
  if (platform === 'WhatsApp') return 'tag-wa';
  if (platform === 'Telegram') return 'tag-tg';
  return 'tag-both';
}

function copyWithFallback(value: string): boolean {
  const helper = document.createElement('textarea');
  helper.value = value;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.left = '-9999px';
  document.body.appendChild(helper);
  helper.select();

  try {
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(helper);
  }
}
