import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'

import { determineBadgeColor, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'

import { formatDate, getPosts } from './utils'

export const metadata: Metadata = {
  title: 'All of our works',
  description: 'Resources and insights',
}

export default function Page() {
  const featuredPost = getPosts().filter((post) => post.metadata.featured)[0]
  const allPosts = getPosts()
  const categories = Array.from(
    new Set(allPosts.map((post) => post.metadata.tags.split(', ')).flat()),
  ).sort()

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

      <section className="pb-16 lg:pb-24">
        <Container>
          <Link className="lg:hidden" href={`/portfolio/${featuredPost.slug}`}>
            <div className="relative h-60 overflow-hidden rounded-2xl">
              <Image
                className="object-cover"
                src={featuredPost.metadata.authorsPicture}
                alt={featuredPost.metadata.name}
                fill
                sizes="(min-width: 640px) 640px, 100vw"
                priority
              />
            </div>
            <div className="mt-5">
              <div className="text-pretty text-sm font-semibold text-brand-700">
                {featuredPost.metadata.project}
              </div>
              <div className="mt-2 flex items-start justify-between gap-4">
                <h3 className="text-pretty text-xl font-semibold lg:text-display-xs">
                  {featuredPost.metadata.name}
                </h3>
              </div>
              <p className="mt-2 line-clamp-2 text-gray-600">{featuredPost.metadata.description}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  className="size-10 rounded-full object-contain"
                  src={featuredPost.metadata.authorsPicture}
                  alt={featuredPost.metadata.author}
                  width={40}
                  height={40}
                />
                <div>
                  <div className="text-sm font-semibold">{featuredPost.metadata.author}</div>
                  <div className="text-sm">{formatDate(featuredPost.metadata.publishedAt)}</div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            className="relative hidden lg:flex lg:h-[45rem] lg:flex-col lg:justify-end lg:overflow-hidden lg:rounded-2xl"
            href={`/portfolio/${featuredPost.slug}`}
          >
            <Image
              className="object-cover"
              src={featuredPost.metadata.authorsPicture}
              alt={featuredPost.metadata.name}
              fill
              sizes="(min-width: 640px) 640px, 100vw"
              priority
            />
            <div className="relative bg-gradient-to-t from-black pt-24">
              <div className="p-8 text-white">
                <h2 className="text-display-xs font-semibold">{featuredPost.metadata.name}</h2>
                <p className="mt-2">{featuredPost.metadata.description}</p>
                <div className="mt-6 flex justify-between">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm font-semibold">Written by</p>
                      <div className="mt-2 flex items-center gap-3">
                        <Image
                          className="size-10 rounded-full object-contain"
                          src={featuredPost.metadata.authorsPicture}
                          alt={featuredPost.metadata.author}
                          width={40}
                          height={40}
                        />
                        <div className="text-sm font-semibold">{featuredPost.metadata.author}</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Published on</p>
                      <div className="mt-2 py-2 font-semibold">
                        {formatDate(featuredPost.metadata.publishedAt)}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Portfolio under</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 py-2">
                      {featuredPost.metadata.tags.split(', ').map((tag, i) => (
                        <Badge className="bg-transparent text-white ring-white" size="md" key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <Tabs.Root defaultValue="all" asChild>
        <section className="mt-12 pb-16 lg:mt-16 lg:pb-24">
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
                  .filter((post) => post.metadata.featured !== 'true')
                  .sort((a, z) =>
                    new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
                  )
                  .map((post, index) => (
                    <Link href={`/portfolio/${post.slug}`} key={index}>
                      <div className="flex h-60 items-center justify-center rounded-2xl bg-brand-50">
                        <Image
                          className="size-32 rounded-full object-contain ring-6 ring-white lg:size-40 lg:ring-8"
                          src={post.metadata.image}
                          alt={post.metadata.name}
                          width={160}
                          height={160}
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
                        <p className="mt-2 line-clamp-2 text-gray-600">
                          {post.metadata.description}
                        </p>
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
              </Tabs.Content>
            </div>
          </Container>
        </section>
      </Tabs.Root>
    </main>
  )
}
