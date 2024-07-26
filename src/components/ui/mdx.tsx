import { type MDXComponents } from 'mdx/types'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'

function slugify(text: string) {
  return text
    .toString() // Convert to string
    .toLowerCase() // Change to lowercase
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-') // Replace multiple - with single -
}

const components: MDXComponents = {
  h1: (props) => (
    <h1 className="mb-4 text-display-sm font-semibold lg:text-display-sm">
      <a href={`#${slugify(String(props.children))}`}>{props.children}</a>
    </h1>
  ),
  p: (props) => <p className="my-4 text-gray-600 lg:text-lg" {...props} />,
}

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote components={{ ...components }} {...props} />
}
