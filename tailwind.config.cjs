/** @type {import('tailwindcss').Config} */
/**
 * Utilities map onto the design tokens in src/styles/tokens.css, which mirror
 * the Figma variables. Prefer token utilities (bg-canvas, text-ink-2,
 * border-hairline, p-lg, text-body-m) over raw palette values so the site and
 * the Figma file stay one system.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // backgrounds
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        raised: 'var(--bg-raised)',
        inverse: 'var(--bg-inverse)',
        quiet: 'var(--action-quiet-bg)',
        // text
        ink: 'var(--text-primary)',
        'ink-2': 'var(--text-secondary)',
        'ink-3': 'var(--text-tertiary)',
        'ink-inv': 'var(--text-inverse)',
        // accent
        accent: 'var(--accent-base)',
        'accent-hover': 'var(--accent-hover)',
        'accent-text': 'var(--text-accent)',
        // lines
        hairline: 'var(--border-hairline)',
        strong: 'var(--border-strong)',
        // action
        action: 'var(--action-primary-bg)',
        'action-text': 'var(--action-primary-text)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['96px', { lineHeight: '94px', letterSpacing: '-0.02em' }],
        'display-l': ['72px', { lineHeight: '72px', letterSpacing: '-0.02em' }],
        'display-m': ['44px', { lineHeight: '46px', letterSpacing: '-0.015em' }],
        'heading-xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.015em' }],
        'heading-l': ['32px', { lineHeight: '38px', letterSpacing: '-0.02em' }],
        'heading-m': ['24px', { lineHeight: '30px', letterSpacing: '-0.015em' }],
        'heading-s': ['20px', { lineHeight: '26px', letterSpacing: '-0.01em' }],
        'body-l': ['19px', { lineHeight: '30px' }],
        'body-m': ['17px', { lineHeight: '28px' }],
        'body-s': ['15px', { lineHeight: '24px' }],
        'label-m': ['14px', { lineHeight: '20px' }],
        'mono-label': ['12px', { lineHeight: '14px', letterSpacing: '0.08em' }],
        'mono-meta': ['13px', { lineHeight: '18px' }],
      },
      spacing: {
        '2xs': 'var(--space-2xs)',
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
        margin: 'var(--page-margin)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      // Border widths stay on Tailwind's defaults on purpose: `border` is the
      // 1px hairline and `border-2` is the strong rule. Adding names here would
      // collide with the `hairline` / `strong` border *colors* above.
      maxWidth: {
        content: 'var(--content-max)',
        measure: '62ch',
        lead: '58ch',
      },
      // Every CSS transition on the site eases out on the same curve as the
      // framer-motion ones in core/motion.js — `ease-linear` and friends are
      // still available where something genuinely needs a different feel.
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
