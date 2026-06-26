export type Platform = 'whatsapp' | 'telegram';

export type FormatType =
  | 'bold'
  | 'italic'
  | 'strike'
  | 'mono'
  | 'bold_italic'
  | 'code_block'
  | 'quote'
  | 'upper'
  | 'lower'
  | 'title'
  | 'reverse';

type FormatResult = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

const emptyFormatSymbols: Partial<Record<FormatType, [string, string]>> = {
  bold: ['*', '*'],
  italic: ['_', '_'],
  strike: ['~', '~'],
  mono: ['`', '`'],
  bold_italic: ['*_', '_*'],
  code_block: ['```', '```'],
};

export function applyFormatToText(
  text: string,
  selectionStart: number,
  selectionEnd: number,
  type: FormatType,
): FormatResult {
  const start = Math.min(selectionStart, selectionEnd);
  const end = Math.max(selectionStart, selectionEnd);
  const before = text.slice(0, start);
  const selected = text.slice(start, end);
  const after = text.slice(end);

  if (!selected && emptyFormatSymbols[type]) {
    const [prefix, suffix] = emptyFormatSymbols[type];
    const value = `${before}${prefix}${suffix}${after}`;
    const cursor = before.length + prefix.length;

    return {
      value,
      selectionStart: cursor,
      selectionEnd: cursor,
    };
  }

  let result = selected;

  switch (type) {
    case 'bold':
      result = `*${selected}*`;
      break;
    case 'italic':
      result = `_${selected}_`;
      break;
    case 'strike':
      result = `~${selected}~`;
      break;
    case 'mono':
      result = `\`${selected}\``;
      break;
    case 'bold_italic':
      result = `*_${selected}_*`;
      break;
    case 'code_block':
      result = `\`\`\`${selected}\`\`\``;
      break;
    case 'quote':
      result = selected.split('\n').map((line) => `> ${line}`).join('\n');
      break;
    case 'upper':
      result = selected.toUpperCase();
      break;
    case 'lower':
      result = selected.toLowerCase();
      break;
    case 'title':
      result = toTitleCase(selected);
      break;
    case 'reverse':
      result = selected.split('').reverse().join('');
      break;
  }

  const value = `${before}${result}${after}`;

  return {
    value,
    selectionStart: before.length,
    selectionEnd: before.length + result.length,
  };
}

export function renderPreview(raw: string, platform: Platform): string {
  let html = escapeHtml(raw);

  html = html.replace(/\*_([\s\S]+?)_\*/g, '<b><i>$1</i></b>');
  html = html.replace(/```([\s\S]+?)```/g, '<code class="preview-code">$1</code>');
  html = html.replace(/`([^`]+?)`/g, '<code>$1</code>');
  html = html.replace(/\*([^*\n]+?)\*/g, '<b>$1</b>');
  html = html.replace(/_([^_\n]+?)_/g, '<i>$1</i>');
  html = html.replace(/~([^~\n]+?)~/g, '<s>$1</s>');

  if (platform === 'telegram') {
    html = html.replace(/^&gt; (.+)$/gm, '<span class="quote-preview">$1</span>');
  }

  return html.replace(/\n/g, '<br>');
}

export function detectFormats(raw: string): string[] {
  const formats: string[] = [];

  if (/\*[^*\n]+?\*/.test(raw) || /\*_[\s\S]+?_\*/.test(raw)) formats.push('Bold');
  if (/_[^_\n]+?_/.test(raw) || /\*_[\s\S]+?_\*/.test(raw)) formats.push('Italic');
  if (/~[^~\n]+?~/.test(raw)) formats.push('Strikethrough');
  if (/`[\s\S]+?`/.test(raw)) formats.push('Monospace');
  if (/```[\s\S]+?```/.test(raw)) formats.push('Code block');
  if (/^> .+$/m.test(raw)) formats.push('Quote');

  return Array.from(new Set(formats));
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}
