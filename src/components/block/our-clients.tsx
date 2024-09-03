import Image from 'next/image'
import Link from 'next/link'

import { determineBadgeColor } from '@/lib/utils'
import { getPosts } from '@/app/portfolio/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'
import { Typography } from '../ui/typography'

export function OurClients() {
  const posts = getPosts()

  return (
    <Section className="bg-[#0087ff]" id="our-clients">
      <Container>
        <div className="lg:flex lg:justify-between">
          <div className="max-w-3xl text-pretty">
            <Typography size="heading">
              <h2>
                Innovating the Future of Business with Intelligent, Secure, and Scalable Technology
                Solutions
              </h2>
            </Typography>
            <Typography className="mt-4 text-gray-200 lg:mt-5" size="supporting-text">
              <p>
                We&apos;ve partnered with local businesses and organizations to design and implement
                tailored systems that drive efficiency, innovation, and growth. By understanding
                their unique needs, we&apos;ve delivered solutions that empower them to succeed in
                an increasingly digital world.
              </p>
            </Typography>
          </div>

          <div className="hidden lg:block">
            <Button size="xl" asChild>
              <Link href="/portfolio">View all clients</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {posts
            .sort((a, z) =>
              new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
            )
            .slice(0, 3)
            .map((post, index) => (
              <div
                className="flex flex-col rounded-3xl bg-brand-600 p-6 transition hover:bg-brand-800 lg:p-8"
                // href={`/portfolio/${post.slug}`}
                key={index}
              >
                <Image
                  className="size-14 rounded-full lg:size-24"
                  src={post.metadata.image}
                  alt={post.metadata.name}
                  width={96}
                  height={96}
                />
                <div className="mt-5 flex flex-1 flex-col text-pretty">
                  <div className="text-balance text-sm font-semibold text-brand-300">
                    {post.metadata.name}
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3
                      className="line-clamp-2 text-xl font-semibold lg:text-display-xs"
                      title={post.metadata.project}
                    >
                      {post.metadata.project}
                    </h3>
                  </div>
                  <Typography
                    className="mb-6 mt-2 line-clamp-4 text-gray-400"
                    size="supporting-text"
                  >
                    <p>{post.metadata.description}</p>
                  </Typography>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {post.metadata.tags.split(', ').map((tag, i) => (
                      <Badge color={determineBadgeColor(tag)} key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 flex flex-col lg:hidden">
          <Button size="xl" asChild>
            <Link href="/portfolio">View all clients</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
