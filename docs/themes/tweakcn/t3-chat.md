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
  --background: oklch(0.9754 0.0084 325.6414);
  --foreground: oklch(0.3257 0.1161 325.0372);
  --card: oklch(0.9754 0.0084 325.6414);
  --card-foreground: oklch(0.3257 0.1161 325.0372);
  --primary: oklch(0.5316 0.1409 355.1999);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.8696 0.0675 334.8991);
  --secondary-foreground: oklch(0.4448 0.1341 324.7991);
  --muted: oklch(0.9395 0.026 331.5454);
  --muted-foreground: oklch(0.4924 0.1244 324.4523);
  --accent: oklch(0.8696 0.0675 334.8991);
  --accent-foreground: oklch(0.4448 0.1341 324.7991);
  --destructive: oklch(0.5248 0.1368 20.8317);
  --border: oklch(0.8568 0.0829 328.911);
  --input: oklch(0.8517 0.0558 336.6002);
  --ring: oklch(0.5916 0.218 0.5844);

  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

[data-theme='dark'] {
  --background: oklch(0.2409 0.0201 307.5346);
  --foreground: oklch(0.8398 0.0387 309.5391);
  --card: oklch(0.2803 0.0232 307.5413);
  --card-foreground: oklch(0.8456 0.0302 341.4597);
  --primary: oklch(0.4607 0.1853 4.0994);
  --primary-foreground: oklch(0.856 0.0618 346.3684);
  --secondary: oklch(0.3137 0.0306 310.061);
  --secondary-foreground: oklch(0.8483 0.0382 307.9613);
  --muted: oklch(0.2634 0.0219 309.4748);
  --muted-foreground: oklch(0.794 0.0372 307.1032);
  --accent: oklch(0.3649 0.0508 308.4911);
  --accent-foreground: oklch(0.9647 0.0091 341.8035);
  --destructive: oklch(0.2258 0.0524 12.6119);
  --border: oklch(0.3286 0.0154 343.4461);
  --input: oklch(0.3387 0.0195 332.8347);
  --ring: oklch(0.5916 0.218 0.5844);

  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
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
