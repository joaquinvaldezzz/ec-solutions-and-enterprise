/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: ['./src/app/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}'],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
    },
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}

export default config
