import Link from 'next/link'

import { formatDate, getPosts } from './utils'

export default function Page() {
  const posts = getPosts()

  return (
    <div className="pt-header-height">
      <div className="container py-16 lg:py-24">
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link className="flex flex-col gap-1" href={`/portfolio/${post.slug}`} key={post.slug}>
              <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
                <p className="">{formatDate(post.metadata.publishedAt, false)}</p>
                <p className="line-clamp-4">{post.metadata.summary}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
