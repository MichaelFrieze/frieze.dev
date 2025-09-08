import type { CollectionEntry } from 'astro:content'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Hash } from 'lucide-react'
import { Image as UnpicImage } from '@unpic/react'
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
      <Card className="bg-card hover:bg-muted px-4 py-4 transition-colors duration-300 ease-in-out">
        <a href={href} className="flex flex-col gap-4 sm:flex-row">
          {frontmatter.image && (
            <div className="md:max-w-3xs md:shrink-0">
              <UnpicImage
                src={
                  (frontmatter.image as any).src ?? String(frontmatter.image)
                }
                alt={title}
                width={1200}
                height={630}
                className="rounded-xl object-cover"
              />
            </div>
          )}
          <div className="flex-grow">
            <h3 className="mb-1 text-lg font-medium">{title}</h3>
            <p className="text-foreground/80 mb-2 text-sm">{description}</p>
            <div className="text-foreground/80 mb-2 flex flex-wrap items-center gap-x-2 text-xs">
              <span>{formattedDate}</span>
              <Separator orientation="vertical" className="h-4" />
            </div>
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="default"
                    className="flex items-center gap-x-1"
                  >
                    <Hash className="size-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </a>
      </Card>
    </li>
  )
}
