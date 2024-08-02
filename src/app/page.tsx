import Image, { type StaticImageData } from 'next/image'

import { Container, Section } from '@/components/ui/container'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { WhatWeDo } from '@/components/block/what-we-do'
import { WhoWeAre } from '@/components/block/who-we-are'

import PlaceholderImage from '@/public/images/backgrounds/placeholder-image.jpeg'

const images: StaticImageData[][] = [
  [PlaceholderImage, PlaceholderImage, PlaceholderImage],
  [PlaceholderImage, PlaceholderImage, PlaceholderImage],
  [PlaceholderImage, PlaceholderImage],
  [PlaceholderImage],
]

export default function Home() {
  return (
    <div>
      <Section className="relative overflow-hidden border-b pb-0 pt-[calc(theme(spacing.16)+var(--header-height))] lg:pb-16 lg:pt-[calc(theme(spacing.24)+var(--header-height))]">
        <Container className="relative">
          <div className="lg:flex lg:flex-col lg:items-center lg:text-center">
            <h1 className="text-balance text-display-md font-medium capitalize tracking-tight text-gray-900 lg:text-display-xl lg:tracking-tight">
              Partner with us and experience the future of technology today
            </h1>

            <p className="mt-4 max-w-120 text-lg capitalize text-gray-600 md:text-balance lg:mt-6 lg:text-xl">
              Become one of the many businesses transforming their operations with our expertise.
            </p>
          </div>

          <div className="relative -mx-4 mt-[calc(theme(spacing.16)-2.375rem)] h-[22.375rem] overflow-hidden pt-[2.375rem] md:pt-40 lg:mx-0 lg:mt-24 lg:h-120">
            <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gray-100 lg:h-120 lg:rounded-2xl" />
            <div className="mt-[-2.375rem] flex rotate-[30deg] flex-col gap-2.5 *:shrink-0 md:-mt-14 lg:-ml-32 lg:-mt-64 lg:gap-4">
              {images.map((row, index) => (
                <div
                  className="flex gap-2.5 *:shrink-0 odd:pl-[7.25rem] even:pl-5 lg:gap-4 lg:odd:pl-[40.25rem] lg:even:pl-[30.25rem]"
                  key={index}
                >
                  {row.map((src, i) => (
                    <div
                      className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]"
                      key={i}
                    >
                      <Image
                        className="object-cover"
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 50vw, 100vw"
                        priority
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <WhoWeAre />
      <WhatWeDo />
      <OurClients />
      <ContactUs />
    </div>
  )
}
