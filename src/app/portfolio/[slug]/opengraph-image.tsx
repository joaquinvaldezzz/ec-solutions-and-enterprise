import { ImageResponse } from 'next/og'

export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
export const runtime = 'edge'

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      // eslint-disable-next-line react/no-unknown-property
      <div tw="flex h-[630px] w-[1200px] items-center justify-center bg-white p-4 text-center text-[32px] font-semibold leading-relaxed">
        {params.slug}
      </div>
    ),
    {
      ...size,
    },
  )
}
