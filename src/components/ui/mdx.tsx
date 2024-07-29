import { type MDXComponents } from 'mdx/types'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'

const components: MDXComponents = {
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

  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-10 rounded-xl lg:my-12"
      src={props.src}
      alt={props.alt}
      decoding="async"
      {...props}
    />
  ),
}

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote components={{ ...components }} {...props} />
}
