import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { determineBadgeColor } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Container, Section } from '@/components/ui/container'
import { CustomMDX } from '@/components/ui/mdx'

import { getPosts } from '../utils'

import JoaquinValdez from '@/public/images/profiles-pictures/joaquin-valdez.jpg'

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
      title: post.metadata.project,
      description: post.metadata.description,
      openGraph: {
        title: post.metadata.project,
        description: post.metadata.description,
      },
    }

    return metadata
  }

  return {}
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPosts().find((item) => item.slug === params.slug)

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
                  src={JoaquinValdez}
                  alt="John Joaquin Valdez"
                  width={56}
                  height={56}
                  priority
                  placeholder="blur"
                />
              </div>
              <figcaption className="text-left">
                <div className="text-lg font-semibold">John Joaquin Valdez</div>
                <div className="text-gray-600">July 26, 2024</div>
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
    </main>
  )
}
