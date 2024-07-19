'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { Testimonials } from '@/components/block/testimonials'
import { WhatWeDo } from '@/components/block/what-we-do'
import { WhoWeAre } from '@/components/block/who-we-are'

import MDGeometricShapes from '@/public/images/backgrounds/md-geometric-shapes.svg'
import MDGridCheckBackground from '@/public/images/backgrounds/md-grid-check-bg.svg'
import SMGeometricShapes from '@/public/images/backgrounds/sm-geometric-shapes.svg'
import SMGridCheckBackground from '@/public/images/backgrounds/sm-grid-check-bg.svg'

export default function Home() {
  return (
    <div>
      <Section className="relative overflow-hidden pt-[calc(theme(spacing.16)+var(--header-height))] lg:pt-[calc(theme(spacing.24)+var(--header-height))]">
        <SMGridCheckBackground className="absolute bottom-16 left-1/2 size-[60rem] -translate-x-1/2 lg:hidden" />
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

            <p className="mt-4 max-w-120 text-balance text-lg text-gray-600 lg:mt-6 lg:text-xl">
              Join the many businesses that have already transformed their operations with us.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-12 lg:flex-row-reverse lg:justify-center">
            <Button size="xl" asChild>
              <Link href="#">Chat to us</Link>
            </Button>
            <Button size="xl" heirarchy="secondary-gray" asChild>
              <Link href="#">Show reel</Link>
            </Button>
          </div>

          <div className="mt-16">
            <SMGeometricShapes className="md:hidden" />
            <MDGeometricShapes className="hidden md:block" />
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
