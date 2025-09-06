---
title: Dev Tools
order: 4
items:
  - title: React
    description: The foundation of most of my projects. I like its component model and the ecosystem around it.
  - title: Next.js
    description: My go-to React framework for production apps (for now). Features like file-based routing, dynamic HTML streaming, React Server Components, SSR, and the Image component make it hard to beat. It works seamlessly with Vercel, and the large ecosystem and active community make it easy to find solutions and learn from others.
  - title: Astro
    description: Great for content-focused sites like this one. I like that it ships less JavaScript by default and integrates easily with React when I need it. The Content Collections feature makes working with Markdown and other content types straightforward, and the built-in Image component is very handy.
  - title: TanStack Start
    description: My current favorite React framework. It has isomorphic loaders, server functions with middleware, and a client‑first SSR model that only runs on the initial page load. It uses Vite, which I consider the best bundler, and TanStack Router, which is the most type‑safe and feature‑rich router I’ve used. Since I already rely heavily on TanStack Query, it fits perfectly into my workflow and can be deployed almost anywhere.
  - title: TanStack Query
    description: My go-to library for managing server state in React apps. It handles queries and mutations with caching, deduplication, prefetching, background updates, and automatic refetching, which removes a lot of the boilerplate around data fetching. It also makes loading and error states much easier to manage, and the built-in devtools are excellent for debugging. I use it in almost every project.
  - title: TypeScript
    description: I use TypeScript for almost everything. Strong typing makes refactoring safer and helps catch issues early, and the autocomplete in editors is a huge productivity boost. It makes working with modern frameworks and libraries much smoother.
  - title: tRPC
    description: My preferred way to build type-safe APIs. It provides end-to-end type safety between server and client, so I don’t have to write or maintain separate types. In the editor, I can click on a function in the client code and jump straight to its matching procedure on the server, which makes navigation much easier. It also provides useful middleware, and I like the clear organization that comes from structuring logic into procedures. It keeps things simple while still being powerful, and it fits naturally into a TypeScript stack.
  - title: Tailwind CSS
    description: My preferred way to style apps. The utility-first approach makes it fast to build UIs without constantly switching between CSS and components. It works especially well with React and a component-oriented architecture, since the styles live directly in the component code. Tailwind also comes with great defaults for spacing, colors, and responsive design, and it’s easy to customize when I need to. The ecosystem around it is excellent.
  - title: shadcn/ui
    description: A collection of prebuilt components I use to save time while keeping full flexibility. They also look great out of the box. Unlike monolithic component libraries, you own the code, which makes long-term maintenance easier and removes the need for escape hatches. They’re just React components built with Radix and styled with Tailwind, so they’re easy to customize and fit naturally into my projects.
  - title: tweakcn
    description: A tool I use to quickly tweak and generate Tailwind styles. Handy for experimenting with design tokens.
  - title: Biome.js
    description: A fast formatter and linter I use instead of Prettier and ESLint.
  - title: Git
    description: Version control I use for everything.
  - title: GitHub
    description: Where I host my code and collaborate on projects.
  - title: Zsh (Oh My Zsh)
    description: My shell of choice.
  - title: Better Auth
    description: A comprehensive auth framework for TypeScript. It’s self-hosted, so I own the logic and avoid vendor lock-in, and it includes features like SSO and password reset out of the box. The API is simple, works with modern frameworks, and adapts to different databases.
  - title: Drizzle ORM
    description: A lightweight, type-safe ORM with the schema defined in TypeScript, giving you autocomplete and strong typing. It supports serverless runtimes and HTTP-based drivers, which makes it a great fit for PlanetScale.
  - title: Unpic
    description: A tool I use for responsive images across frameworks.
  - title: Payload CMS
    description: A self-hosted, TypeScript-based headless CMS with collections and fields defined in code for type safety and autocomplete. It includes features like auth, access control, file uploads, and APIs. Since it’s built on top of Next.js, it can run directly inside a Next app and be deployed to Vercel alongside it.
---
