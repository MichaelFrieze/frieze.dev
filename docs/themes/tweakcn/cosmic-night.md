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
  --background: oklch(0.973 0.0133 286.1503);
  --foreground: oklch(0.3015 0.0572 282.4176);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.3015 0.0572 282.4176);
  --primary: oklch(0.5417 0.179 288.0332);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.9174 0.0435 292.6901);
  --secondary-foreground: oklch(0.4143 0.1039 288.1742);
  --muted: oklch(0.958 0.0133 286.1454);
  --muted-foreground: oklch(0.5426 0.0465 284.7435);
  --accent: oklch(0.9221 0.0373 262.141);
  --accent-foreground: oklch(0.3015 0.0572 282.4176);
  --destructive: oklch(0.6861 0.2061 14.9941);
  --border: oklch(0.9115 0.0216 285.9625);
  --input: oklch(0.9115 0.0216 285.9625);
  --ring: oklch(0.5417 0.179 288.0332);

  --radius: 0.5rem;
  --shadow-2xs: 0px 4px 10px 0px hsl(240 30% 25% / 0.06);
  --shadow-xs: 0px 4px 10px 0px hsl(240 30% 25% / 0.06);
  --shadow-sm:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 1px 2px -1px hsl(240 30% 25% / 0.12);
  --shadow:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 1px 2px -1px hsl(240 30% 25% / 0.12);
  --shadow-md:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 2px 4px -1px hsl(240 30% 25% / 0.12);
  --shadow-lg:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 4px 6px -1px hsl(240 30% 25% / 0.12);
  --shadow-xl:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 8px 10px -1px hsl(240 30% 25% / 0.12);
  --shadow-2xl: 0px 4px 10px 0px hsl(240 30% 25% / 0.3);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

[data-theme='dark'] {
  --background: oklch(0.1743 0.0227 283.7998);
  --foreground: oklch(0.9185 0.0257 285.8834);
  --card: oklch(0.2284 0.0384 282.9324);
  --card-foreground: oklch(0.9185 0.0257 285.8834);
  --primary: oklch(0.7162 0.1597 290.3962);
  --primary-foreground: oklch(0.1743 0.0227 283.7998);
  --secondary: oklch(0.3139 0.0736 283.4591);
  --secondary-foreground: oklch(0.8367 0.0849 285.9111);
  --muted: oklch(0.271 0.0621 281.4377);
  --muted-foreground: oklch(0.7166 0.0462 285.1741);
  --accent: oklch(0.3354 0.0828 280.9705);
  --accent-foreground: oklch(0.9185 0.0257 285.8834);
  --destructive: oklch(0.6861 0.2061 14.9941);
  --border: oklch(0.3261 0.0597 282.5832);
  --input: oklch(0.3261 0.0597 282.5832);
  --ring: oklch(0.7162 0.1597 290.3962);

  --radius: 0.5rem;
  --shadow-2xs: 0px 4px 10px 0px hsl(240 30% 25% / 0.06);
  --shadow-xs: 0px 4px 10px 0px hsl(240 30% 25% / 0.06);
  --shadow-sm:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 1px 2px -1px hsl(240 30% 25% / 0.12);
  --shadow:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 1px 2px -1px hsl(240 30% 25% / 0.12);
  --shadow-md:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 2px 4px -1px hsl(240 30% 25% / 0.12);
  --shadow-lg:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 4px 6px -1px hsl(240 30% 25% / 0.12);
  --shadow-xl:
    0px 4px 10px 0px hsl(240 30% 25% / 0.12),
    0px 8px 10px -1px hsl(240 30% 25% / 0.12);
  --shadow-2xl: 0px 4px 10px 0px hsl(240 30% 25% / 0.3);
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
