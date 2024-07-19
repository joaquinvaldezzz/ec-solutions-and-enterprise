'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { Testimonials } from '@/components/block/testimonials'
import { WhatWeDo } from '@/components/block/what-we-do'
import { WhoWeAre } from '@/components/block/who-we-are'

import SMGeometricShapes from '@/public/images/backgrounds/sm-geometric-shapes.svg'
import SMGridCheckBackground from '@/public/images/backgrounds/sm-grid-check-bg.svg'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden py-16">
        <SMGridCheckBackground className="absolute bottom-16 left-1/2 size-[60rem] -translate-x-1/2" />
        <div className="container relative">
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

          <h1 className="mt-4 text-balance text-display-md font-medium tracking-tight text-gray-900">
            Partner with us and experience the future of technology today
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Join the many businesses that have already transformed their operations with us.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Button size="xl" asChild>
              <Link href="#">Chat to us</Link>
            </Button>
            <Button size="xl" heirarchy="secondary-gray" asChild>
              <Link href="#">Show reel</Link>
            </Button>
          </div>

          <div className="mt-16">
            <SMGeometricShapes />
          </div>
        </div>
      </section>

      <WhoWeAre />
      <WhatWeDo />
      <OurClients />
      <Testimonials />
      <ContactUs />
    </div>
  )
}
