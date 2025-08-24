import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Frieze.DEV',
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
    href: '/authors',
    label: 'authors',
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
    href: 'https://x.com/MichaelFrieze',
    label: 'Twitter',
  },
  {
    href: 'mailto:michael@frieze.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
