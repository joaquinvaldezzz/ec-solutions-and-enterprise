import { type Service } from '@/types/service'

import { Container, Section } from '../ui/container'

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

export function WhatWeDo() {
  return (
    <Section>
      <Container className="text-center">
        <h2 className="text-sm font-semibold text-brand-700 lg:text-md">What we do</h2>
        <p className="mt-3 text-display-sm font-semibold text-gray-900 lg:text-display-md">
          Our Services
        </p>
        <p className="mt-4 text-balance text-lg text-gray-600 lg:mt-5 lg:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {services.map((service, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="size-10 rounded-full bg-brand-100 ring-6 ring-inset ring-brand-50" />
              <h3 className="mt-4 text-lg font-semibold lg:mt-5">{service.title}</h3>
              <p className="mt-1 text-gray-600 lg:mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
