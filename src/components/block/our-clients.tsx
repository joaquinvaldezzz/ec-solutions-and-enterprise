import Image from 'next/image'
import Link from 'next/link'

import { determineBadgeColor } from '@/lib/utils'
import { getPosts } from '@/app/portfolio/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

export function OurClients() {
  const posts = getPosts()

  return (
    <Section id="our-clients">
      <Container>
        <div>
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-700 lg:text-md">
              <div className="h-px w-16 border-t" />
              Our Clients
              <div className="h-px w-16 border-t" />
            </h2>
            <p className="mt-3 text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
              We&apos;ve helped hundreds of global companies
            </p>
            <p className="mt-4 text-balance text-lg text-gray-600 lg:mt-5 lg:text-xl">
              Interviews, tips, guides, industry best practices, and news.
            </p>
          </div>

          <div className="mt-12 grid gap-y-12 md:grid-cols-2 md:gap-x-8 lg:mt-16 lg:grid-cols-3">
            {posts
              .sort((a, z) =>
                new Date(a.metadata.publishedAt) > new Date(z.metadata.publishedAt) ? -1 : 1,
              )
              .map((post, index) => (
                <Link href={`/portfolio/${post.slug}`} key={index}>
                  <Image
                    className="h-16 w-auto object-contain"
                    src={post.metadata.image}
                    alt={post.metadata.name}
                    width={64}
                    height={64}
                  />
                  <div className="mt-5">
                    <div className="text-balance text-sm font-semibold text-brand-700">
                      {post.metadata.project}
                    </div>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold lg:text-display-xs">
                        {post.metadata.name}
                      </h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-gray-600">{post.metadata.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.metadata.tags.split(', ').map((tag, i) => (
                        <Badge size="md" color={determineBadgeColor(tag)} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-12 lg:mt-16 lg:flex lg:justify-center">
            <Button className="w-full lg:w-auto" size="xl" asChild>
              <Link href="">View all clients</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
