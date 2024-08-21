import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'

import { determineBadgeColor, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'

import { getPosts } from './utils'

export const metadata: Metadata = {
  title: 'All of our works',
  description: 'Resources and insights',
}

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const allPosts = getPosts()
  const categories = Array.from(
    new Set(allPosts.map((post) => post.metadata.tags.split(', ')).flat()),
  ).sort()

  console.log(searchParams)

  return (
    <main className="mt-header-height">
      <section className="py-16 lg:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-sm font-semibold text-brand-700 lg:text-md">Our works</h1>
            <p className="mt-3 text-display-md font-semibold tracking-tight lg:text-display-lg">
              Resources and insights
            </p>
            <p className="mt-4 text-lg text-gray-600 lg:mt-6 lg:text-xl">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
        </Container>
      </section>

      <Tabs.Root defaultValue="all" asChild>
        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="flex flex-col gap-8 *:w-full *:shrink-0 lg:flex-row lg:justify-between">
              <Tabs.List className="relative flex gap-3 overflow-auto border-b border-b-gray-200">
                <Tabs.Trigger
                  className="h-9 text-nowrap border-b-2 border-b-transparent px-1 pb-3 font-semibold text-gray-500 focus:outline-none data-active:border-b-brand-600 data-active:text-brand-700"
                  value="all"
                >
                  All
                </Tabs.Trigger>
                {categories.map((category, index) => (
                  <Tabs.Trigger
                    className="h-9 text-nowrap border-b-2 border-b-transparent px-1 pb-3 font-semibold text-gray-500 focus:outline-none data-active:border-b-brand-600 data-active:text-brand-700"
                    value={slugify(category)}
                    key={index}
                  >
                    {category}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {/* <div></div> */}
            </div>

            <div className="mt-12 *:grid *:gap-y-12 md:*:grid-cols-2 md:*:gap-x-8 lg:mt-16 lg:*:grid-cols-3">
              <Tabs.Content value="all">
                {allPosts
                  .sort((a, z) =>
                    new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
                  )
                  .map((post, index) => (
                    <Link
                      className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 transition hover:bg-white lg:p-8"
                      href={`/portfolio/${post.slug}`}
                      key={index}
                    >
                      <Image
                        className="size-14 rounded-full object-contain lg:size-24"
                        src={post.metadata.image}
                        alt={post.metadata.name}
                        width={96}
                        height={96}
                      />
                      <div className="mt-5 flex flex-1 flex-col text-pretty">
                        <div className="text-balance text-sm font-semibold text-brand-700">
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
                        <p className="mb-6 mt-2 line-clamp-4 text-gray-600">
                          {post.metadata.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                          {post.metadata.tags.split(', ').map((tag, i) => (
                            <Badge color={determineBadgeColor(tag)} key={i}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
              </Tabs.Content>
            </div>
          </Container>
        </section>
      </Tabs.Root>
    </main>
  )
}
