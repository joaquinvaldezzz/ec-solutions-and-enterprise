import { type MDXComponents } from 'mdx/types'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="my-4 text-balance text-display-sm font-semibold first:mt-0 lg:text-display-sm"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="mt-8 text-balance text-xl font-semibold lg:text-display-xs" {...props} />
  ),
  p: (props) => <p className="my-4 text-gray-600 first:mt-0 last:mb-0 lg:text-lg" {...props} />,
}

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote components={{ ...components }} {...props} />
}
