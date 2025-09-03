import type { CollectionEntry } from 'astro:content'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { formatDate } from '@/lib/utils'

export interface Props {
  href?: string
  frontmatter: CollectionEntry<'blog'>['data']
}

export default function SearchCard({ href, frontmatter }: Props) {
  const { title, description, date, tags } = frontmatter
  const formattedDate = formatDate(date)

  return (
    <li className="my-6">
      <div className="not-prose hover:bg-border/40 rounded-xl border p-4 transition-colors duration-300 ease-in-out">
        <a href={href} className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-grow">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground mb-2 text-sm">{description}</p>
            <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-x-2 text-xs">
              <span>{formattedDate}</span>
              <Separator orientation="vertical" className="h-4" />
            </div>
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
          </div>
        </a>
      </div>
    </li>
  )
}
