import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { determineBadgeColor } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Container, Section } from '@/components/ui/container'
import { CustomMDX } from '@/components/ui/mdx'

import { formatDate, getPosts } from '../utils'

export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPosts().find((item) => item.slug === params.slug)

  if (post != null) {
    const metadata: Metadata = {
      title: `${post.metadata.project} | ${post.metadata.name}`,
      description: post.metadata.description,
      openGraph: {
        title: `${post.metadata.project} | ${post.metadata.name}`,
        description: post.metadata.description,
      },
    }

    return metadata
  }

  return {}
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPosts().find((item) => item.slug === params.slug)
  const allPosts = getPosts()

  if (post == null) {
    notFound()
  }

  return (
    <main className="pt-header-height">
      <Section>
        <Container>
          <div className="mx-auto max-w-[720px] text-pretty">
            <Image
              className="h-16 w-auto object-contain"
              src={post.metadata.image}
              alt={post.metadata.name}
              width={64}
              height={64}
            />
            <div className="mt-5 text-sm font-semibold text-brand-700 lg:text-md">
              {post?.metadata.name}
            </div>
            <h1 className="mt-3 text-display-md font-semibold tracking-tight lg:text-display-lg">
              {post?.metadata.project}
            </h1>
            <p className="mt-4 text-lg text-gray-600 lg:mt-6 lg:text-xl">
              {post?.metadata.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {post.metadata.tags.split(', ').map((tag, index) => (
                <Badge size="md" color={determineBadgeColor(tag)} key={index}>
                  {tag}
                </Badge>
              ))}
            </div>

            <figure className="mt-8 flex items-center gap-4">
              <div className="size-14">
                <Image
                  className="rounded-full object-cover"
                  src={post.metadata.authorsPicture}
                  alt={post.metadata.author}
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <figcaption>
                <div className="text-lg font-semibold">{post.metadata.author}</div>
                <div className="text-gray-600">{formatDate(post.metadata.publishedAt)}</div>
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <section className="pb-16 lg:pb-24">
        <Container>
          <article className="mx-auto max-w-[720px]">
            {post?.content != null && <CustomMDX source={post.content} />}
          </article>
        </Container>
      </section>

      <Section>
        <Container>
          <h2 className="text-display-sm font-semibold lg:text-display-md lg:tracking-tight">
            Latest writings
          </h2>
          <p className="mt-4 text-lg text-gray-600 lg:mt-5">
            The latest news, technologies, and resources from our team.
          </p>
        </Container>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 *:shrink-0 lg:mt-16 lg:gap-8 xl:px-8">
          {allPosts
            .filter((item) => item.slug !== post.slug)
            .sort((a, z) =>
              new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
            )
            .map((item, index) => (
              <Link
                className="flex w-80 flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 transition hover:bg-white lg:w-96 lg:p-8"
                href={`/portfolio/${item.slug}`}
                key={index}
              >
                <Image
                  className="size-14 rounded-full object-contain lg:size-24"
                  src={item.metadata.image}
                  alt={item.metadata.name}
                  width={96}
                  height={96}
                />
                <div className="mt-5 flex flex-1 flex-col text-pretty">
                  <div className="text-balance text-sm font-semibold text-brand-700">
                    {item.metadata.name}
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3
                      className="line-clamp-2 text-xl font-semibold lg:text-display-xs"
                      title={item.metadata.project}
                    >
                      {item.metadata.project}
                    </h3>
                  </div>
                  <p className="mb-6 mt-2 line-clamp-4 text-gray-600">
                    {item.metadata.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {item.metadata.tags.split(', ').map((tag, i) => (
                      <Badge color={determineBadgeColor(tag)} key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Section>
    </main>
  )
}
