import { type FC, type SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { determineBadgeColor } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'
import { WhatWeDo } from '@/components/block/what-we-do'
import { WhoWeAre } from '@/components/block/who-we-are'
import { getPosts } from '@/app/portfolio/utils'

import PlaceholderImage from '@/public/images/backgrounds/placeholder-image.jpeg'
import CSS3 from '@/public/images/logos/css3.svg'
import Git from '@/public/images/logos/git.svg'
import HTML5 from '@/public/images/logos/html5.svg'
import Javascript from '@/public/images/logos/javascript.svg'
import MicrosoftAzure from '@/public/images/logos/microsoft-azure.svg'
import MySQL from '@/public/images/logos/my-sql.svg'
import Php from '@/public/images/logos/php.svg'
import Python from '@/public/images/logos/python.svg'

interface Technology {
  logo: FC<SVGProps<SVGElement>>
  name: string
}

const technologies: Technology[] = [
  {
    logo: HTML5,
    name: 'HTML5',
  },
  {
    logo: CSS3,
    name: 'CSS3',
  },
  {
    logo: Javascript,
    name: 'JavaScript',
  },
  {
    logo: Php,
    name: 'PHP',
  },
  {
    logo: Python,
    name: 'Python',
  },
  {
    logo: MySQL,
    name: 'MySQL',
  },
  {
    logo: Git,
    name: 'git',
  },
  {
    logo: MicrosoftAzure,
    name: 'Microsoft Azure',
  },
]

export default function Page() {
  const posts = getPosts()

  return (
    <div>
      <Section>
        <Container>
          <h1 className="max-w-5xl text-display-md font-medium tracking-tight lg:text-display-xl">
            We design digital experiences that create more happy in the world
          </h1>
          <p className="mt-4 max-w-[40rem] text-lg text-gray-600 lg:mt-6 lg:text-xl">
            — Our agency specializes in crafting simple, functional, and stunning solutions using
            the latest technologies.
          </p>
          <div className="mt-8 flex max-w-[40rem] flex-wrap gap-x-8 gap-y-4">
            {technologies.map((technology, index) => {
              const Tag = technology.logo
              return (
                <div className="flex items-center gap-2.5" key={index}>
                  <Tag className="size-8" />
                  <p className="text-gray-600">{technology.name}</p>
                </div>
              )
            })}
          </div>
          <Image
            className="mt-16 h-60 object-cover lg:h-[32.25rem]"
            src={PlaceholderImage}
            alt="Placeholder image"
            priority
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="lg:flex lg:justify-between">
            <div className="max-w-3xl text-pretty">
              <h2 className="text-display-sm font-semibold lg:text-display-md lg:tracking-tight">
                We&apos;ve helped a few of these local organizations and businesses
              </h2>
              <p className="mt-4 text-lg text-gray-600 lg:mt-5 lg:text-xl">
                Empowering your Tech Journey with Expert Tips, Best Practices, and the latest IT
                trends
              </p>
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
                  <div className="mt-5 text-pretty">
                    <div className="text-balance text-sm font-semibold text-brand-700">
                      {post.metadata.name}
                    </div>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold lg:text-display-xs">
                        {post.metadata.project}
                      </h3>
                    </div>
                    <p className="mt-2 line-clamp-4 text-gray-600">{post.metadata.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.metadata.tags.split(', ').map((tag, i) => (
                        <Badge color={determineBadgeColor(tag)} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-12 flex flex-col lg:hidden">
            <Button size="xl" asChild>
              <Link href="/portfolio">View all clients</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <WhoWeAre />
      <WhatWeDo />

      <Section>
        <Container>
          <div className="rounded-2xl bg-gray-50 px-6 py-10 lg:p-16">
            <div>
              <h2 className="text-display-sm font-semibold">Tell us about your project</h2>
              <p className="mt-4 text-lg text-gray-600 lg:text-xl">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            <div className="mt-8">
              <Button size="xl">Say hello</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
