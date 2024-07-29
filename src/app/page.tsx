import Image from 'next/image'
import Link from 'next/link'

import { Container, Section } from '@/components/ui/container'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { Testimonials } from '@/components/block/testimonials'
import { WhatWeDo } from '@/components/block/what-we-do'
import { WhoWeAre } from '@/components/block/who-we-are'

import MDGridCheckBackground from '@/public/images/backgrounds/md-grid-check-bg.svg'
import PlaceholderImage from '@/public/images/backgrounds/placeholder-image.jpeg'
import SMGridCheckBackground from '@/public/images/backgrounds/sm-grid-check-bg.svg'

export default function Home() {
  return (
    <div>
      <Section className="relative overflow-hidden pb-0 pt-[calc(theme(spacing.16)+var(--header-height))] lg:pb-16 lg:pt-[calc(theme(spacing.24)+var(--header-height))]">
        <SMGridCheckBackground className="absolute left-1/2 size-[60rem] -translate-x-1/2 lg:hidden" />
        <MDGridCheckBackground className="absolute left-1/2 top-0 hidden h-[90rem] w-[120rem] -translate-x-1/2 lg:block" />

        <Container className="relative">
          <div className="lg:flex lg:justify-center">
            <Link
              className="inline-flex w-max items-center gap-2 rounded-2xl bg-brand-50 py-1 pl-1 pr-2.5 ring-1 ring-inset ring-brand-200"
              href="#"
            >
              <div className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-200">
                We&apos;re hiring!
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-brand-700">
                Join our design team
                <svg className="size-4 text-brand-500" fill="none" viewBox="0 0 16 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.333 8h9.334m0 0L8 3.333M12.667 8 8 12.667"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="lg:flex lg:flex-col lg:items-center lg:text-center">
            <h1 className="mt-4 text-balance text-display-md font-medium tracking-tight text-gray-900 lg:text-display-xl lg:tracking-tight">
              Partner with us and experience the future of technology today
            </h1>

            <p className="mt-4 max-w-120 text-lg text-gray-600 md:text-balance lg:mt-6 lg:text-xl">
              Join the many businesses that have already transformed their operations with us.
            </p>
          </div>

          <div className="relative -mx-4 mt-16 h-[22.375rem] overflow-hidden pt-[2.375rem] lg:mx-0 lg:rounded-2xl">
            <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gray-100 lg:h-120" />
            <div className="mt-[-2.375rem] flex rotate-[30deg] flex-col gap-2.5 *:shrink-0 lg:gap-4">
              <div className="flex gap-2.5 pl-[7.25rem] *:shrink-0 lg:gap-4">
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pl-5 *:shrink-0 lg:gap-4">
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pl-[7.25rem] *:shrink-0 lg:gap-4">
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pl-5 *:shrink-0 lg:gap-4">
                <div className="relative h-28 w-[11.625rem] overflow-hidden rounded-xl lg:h-[11.875rem] lg:w-[19.75rem]">
                  <Image
                    className="object-cover"
                    src={PlaceholderImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <WhoWeAre />
      <WhatWeDo />
      <OurClients />
      <Testimonials />
      <ContactUs />
    </div>
  )
}
