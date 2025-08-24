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
  --background: oklch(0.9383 0.0042 236.4993);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6397 0.172 36.4421);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.967 0.0029 264.5419);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.551 0.0234 264.3637);
  --accent: oklch(0.9119 0.0222 243.8174);
  --accent-foreground: oklch(0.3791 0.1378 265.5222);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --border: oklch(0.9022 0.0052 247.8822);
  --input: oklch(0.97 0.0029 264.542);
  --ring: oklch(0.6397 0.172 36.4421);

  --radius: 0.75rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 2px 4px -1px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 4px 6px -1px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 8px 10px -1px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

[data-theme='dark'] {
  --background: oklch(0.2598 0.0306 262.6666);
  --foreground: oklch(0.9219 0 0);
  --card: oklch(0.3106 0.0301 268.6365);
  --card-foreground: oklch(0.9219 0 0);
  --primary: oklch(0.6397 0.172 36.4421);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.3095 0.0266 266.7132);
  --secondary-foreground: oklch(0.9219 0 0);
  --muted: oklch(0.3095 0.0266 266.7132);
  --muted-foreground: oklch(0.7155 0 0);
  --accent: oklch(0.338 0.0589 267.5867);
  --accent-foreground: oklch(0.8823 0.0571 254.1284);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --border: oklch(0.3843 0.0301 269.7337);
  --input: oklch(0.3843 0.0301 269.7337);
  --ring: oklch(0.6397 0.172 36.4421);

  --radius: 0.75rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 2px 4px -1px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 4px 6px -1px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0px 1px 3px 0px hsl(0 0% 0% / 0.1), 0px 8px 10px -1px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
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
