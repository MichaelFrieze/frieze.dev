import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Frieze.DEV',
  description:
    "I'm Michael Frieze, a web developer in Metro Detroit. This site is where I share the nerdy stuff I'm into and projects I'm working on.",
  href: 'https://frieze.dev',
  author: 'Michael Frieze',
  defaultOgTitle: 'Frieze.DEV | Michael Frieze | Web Developer',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/uses',
    label: 'uses',
  },
  {
    href: '/contact',
    label: 'contact',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/MichaelFrieze',
    label: 'GitHub',
  },
  {
    href: 'https://reddit.com/u/michaelfrieze',
    label: 'Reddit',
  },
  {
    href: 'https://x.com/MichaelFrieze',
    label: 'Twitter',
  },
  {
    href: 'https://bsky.app/profile/frieze.dev',
    label: 'Bluesky',
  },
  // {
  //   href: 'mailto:michael@frieze.dev',
  //   label: 'Email',
  // },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Reddit: 'ri:reddit-line',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Bluesky: 'ri:bluesky-line',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
