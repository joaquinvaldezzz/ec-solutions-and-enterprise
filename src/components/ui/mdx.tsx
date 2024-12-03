import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkUnwrapImages from 'remark-unwrap-images'

import { rehypeImageSize } from '@/lib/rehype-image-size'

const components: MDXComponents = {
  blockquote: (props) => (
    <blockquote
      className="border-brand-700 lg:*:text-display-xs my-10 border-l-2 py-2 pl-4 text-xl font-medium italic *:text-gray-900 first:mt-0 lg:my-12 lg:pl-5"
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className="text-display-sm lg:text-display-sm mb-4 font-semibold text-balance lg:mb-5"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="lg:text-display-xs mt-8 mb-3 text-xl font-semibold text-balance first:mt-0 lg:mb-4"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 text-gray-600 first:mt-0 last:mb-0 lg:my-4.5 lg:text-lg" {...props} />
  ),
  img: (props) => (
    <div className="my-10 first:mt-0 last:mb-0 lg:my-12">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image className="rounded-xl" {...(props as ImageProps)} />
    </div>
  ),
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypeImageSize, { root: 'public' }]],
          remarkPlugins: [remarkUnwrapImages],
        },
      }}
      {...props}
    />
  )
}
