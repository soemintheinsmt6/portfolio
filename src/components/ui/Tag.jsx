import React from 'react';

const TONES = {
  neutral: 'bg-quiet text-ink-2',
  accent: 'border border-accent text-accent-text',
};

/** Figma: Tag — Tone=Neutral|Accent. Mono chip for tech, platform and category metadata. */
export default function Tag({ tone = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-sm py-xs font-mono text-mono-label font-medium uppercase ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Wrapping row of tags. */
export function TagRow({ items = [], tone = 'neutral', className = '' }) {
  if (!items.length) return null;
  return (
    <div className={`flex flex-wrap gap-xs ${className}`}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </div>
  );
}
