import Image from 'next/image'
import Link from 'next/link'

import { determineBadgeColor } from '@/lib/utils'
import { getPosts } from '@/app/portfolio/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import PlaceholderImage from '@/public/images/backgrounds/placeholder-image.jpeg'

export function OurClients() {
  const posts = getPosts()

  return (
    <Section id="our-clients">
      <Container>
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-700 lg:text-md">
              <div className="h-px w-16 border-t" />
              Our Clients
              <div className="h-px w-16 border-t" />
            </h2>
            <p className="mt-3 text-pretty text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
              We&apos;ve helped a few of these local organizations and businesses
            </p>
            <p className="mt-4 text-pretty text-lg text-gray-600 lg:mt-5 lg:text-xl">
              Empowering your Tech Journey with Expert Tips, Best Practices, and the latest IT
              trends
            </p>
          </div>

          <div className="mt-12 grid gap-y-12 md:gap-x-8 lg:mt-16 lg:grid-cols-3">
            {posts
              .sort((a, z) =>
                new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
              )
              .slice(0, 3)
              .map((post, index) => (
                <Link href={`/portfolio/${post.slug}`} key={index}>
                  <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-2xl bg-brand-50">
                    <Image
                      className="object-cover"
                      src={PlaceholderImage}
                      alt={post.metadata.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 100vw"
                      priority
                    />
                  </div>
                  <div className="mt-5">
                    <div className="line-clamp-1 text-balance text-sm font-semibold text-brand-700">
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
              <Link href="/portfolio">View all clients</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
