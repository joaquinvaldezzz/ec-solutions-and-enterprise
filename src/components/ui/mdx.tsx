import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'

import { rehypeImageSize } from '@/lib/rehype-image-size'

const components: MDXComponents = {
  blockquote: (props) => (
    <blockquote
      className="my-10 border-l-2 border-brand-700 py-2 pl-4 text-xl font-medium italic text-gray-900 first:mt-0 lg:my-12 lg:pl-5 lg:*:text-display-xs"
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className="mb-4 text-balance text-display-sm font-semibold lg:mb-5 lg:text-display-sm"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-3 mt-8 text-balance text-xl font-semibold first:mt-0 lg:mb-4 lg:text-display-xs"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 text-gray-600 first:mt-0 last:mb-0 lg:my-4.5 lg:text-lg" {...props} />
  ),
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <Image className="my-10 rounded-xl lg:my-12" {...(props as ImageProps)} />,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypeImageSize, { root: 'public' }]],
        },
      }}
      {...props}
    />
  )
}
