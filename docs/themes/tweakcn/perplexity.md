`global.css`

```css
@import 'tailwindcss';

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

@theme inline {
  --font-sans:
    Geist, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-mono:
    Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;

  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-additive: var(--additive);
  --color-additive-foreground: var(--additive-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

@font-face {
  font-family: 'Geist';
  src: url('/fonts/GeistVF.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Geist Mono';
  src: url('/fonts/GeistMonoVF.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.2931 0 0);
  --card: oklch(0.9821 0 0);
  --card-foreground: oklch(0.2931 0 0);
  --primary: oklch(0.5166 0.0931 181.0803);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.9551 0 0);
  --secondary-foreground: oklch(0.2931 0 0);
  --muted: oklch(0.9551 0 0);
  --muted-foreground: oklch(0.5624 0 0);
  --accent: oklch(0.9551 0 0);
  --accent-foreground: oklch(0.2931 0 0);
  --destructive: oklch(0.568 0.2002 26.4057);
  --border: oklch(0.9067 0 0);
  --input: oklch(0.9067 0 0);
  --ring: oklch(0.6045 0.1074 183.385);

  --radius: 0.75rem;
  --shadow-2xs: 0px 4px 8px 0px hsl(0 0% 0% / 0.03);
  --shadow-xs: 0px 4px 8px 0px hsl(0 0% 0% / 0.03);
  --shadow-sm:
    0px 4px 8px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow:
    0px 4px 8px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow-md:
    0px 4px 8px 0px hsl(0 0% 0% / 0.05), 0px 2px 4px -1px hsl(0 0% 0% / 0.05);
  --shadow-lg:
    0px 4px 8px 0px hsl(0 0% 0% / 0.05), 0px 4px 6px -1px hsl(0 0% 0% / 0.05);
  --shadow-xl:
    0px 4px 8px 0px hsl(0 0% 0% / 0.05), 0px 8px 10px -1px hsl(0 0% 0% / 0.05);
  --shadow-2xl: 0px 4px 8px 0px hsl(0 0% 0% / 0.13);
  --tracking-normal: 0rem;
  --spacing: 0.25rem;
}

[data-theme='dark'] {
  --background: oklch(0.2002 0 0);
  --foreground: oklch(0.937 0 0);
  --card: oklch(0.252 0 0);
  --card-foreground: oklch(0.937 0 0);
  --primary: oklch(0.7124 0.0977 186.6761);
  --primary-foreground: oklch(0.2002 0 0);
  --secondary: oklch(0.3211 0 0);
  --secondary-foreground: oklch(0.937 0 0);
  --muted: oklch(0.2931 0 0);
  --muted-foreground: oklch(0.7058 0 0);
  --accent: oklch(0.3211 0 0);
  --accent-foreground: oklch(0.937 0 0);
  --destructive: oklch(0.4776 0.193 23.5886);
  --border: oklch(0.3211 0 0);
  --input: oklch(0.2931 0 0);
  --ring: oklch(0.7124 0.0977 186.6761);

  --radius: 0.75rem;
  --shadow-2xs: 0px 4px 8px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 4px 8px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0px 4px 8px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow:
    0px 4px 8px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0px 4px 8px 0px hsl(0 0% 0% / 0.1), 0px 2px 4px -1px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0px 4px 8px 0px hsl(0 0% 0% / 0.1), 0px 4px 6px -1px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0px 4px 8px 0px hsl(0 0% 0% / 0.1), 0px 8px 10px -1px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0px 4px 8px 0px hsl(0 0% 0% / 0.25);
}

body {
  letter-spacing: var(--tracking-normal);
}

@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    @apply border-border outline-ring/50 tracking-tight;
  }
}
```
