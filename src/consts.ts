import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'frieze.dev',
  description:
    "Hi, I'm Michael Frieze. A web developer based in Metro Detroit.",
  href: 'https://frieze.dev',
  author: 'Michael Frieze',
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
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/about',
    label: 'about',
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
