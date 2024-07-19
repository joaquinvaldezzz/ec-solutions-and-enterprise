'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { WhoWeAre } from '@/components/block/who-we-are'

import SMGeometricShapes from '@/public/images/backgrounds/sm-geometric-shapes.svg'
import SMGridCheckBackground from '@/public/images/backgrounds/sm-grid-check-bg.svg'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: '',
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    icon: '',
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    icon: '',
    title: 'Manage your team with reports',
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: '',
    title: 'Connect with customers',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
  },
  {
    icon: '',
    title: 'Connect the tools you already use',
    description:
      'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
  },
  {
    icon: '',
    title: 'Our people make the difference',
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
]

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

      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-medium text-brand-700">What we do</h2>
          <p className="mt-3 text-display-sm font-semibold text-gray-900">Our Services</p>
          <p className="mt-4 text-lg text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage, and
            retain more users. Trusted by over 4,000 startups.
          </p>
          <div className="mt-12 grid gap-10">
            {services.map((service, index) => (
              <div key={index}>
                <div className="size-10" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-1 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurClients />
      <ContactUs />
    </div>
  )
}
