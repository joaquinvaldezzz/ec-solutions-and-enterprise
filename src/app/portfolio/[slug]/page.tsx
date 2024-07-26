import { Container, Section } from '@/components/ui/container'
import { CustomMDX } from '@/components/ui/mdx'

import { getPosts } from '../utils'

export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPosts().find((item) => item.slug === params.slug)

  return (
    <div className="pt-header-height">
      <Section>
        <Container>
          <article className="mx-auto max-w-[720px]">
            {post?.content != null && <CustomMDX source={post.content} />}
          </article>
        </Container>
      </Section>
    </div>
  )
}
