'use client'

import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

import { type Client } from '@/types/client'
import { determineBadgeColor } from '@/lib/utils'

import { Badge } from '..//ui/badge'
import { Button } from '../ui/button'

const clients: Client[] = [
  {
    name: 'UX review presentations',
    url: '#',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    name: 'Migrating to Linear 101',
    url: '#',
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    tags: ['Product', 'Tools', 'Saas'],
  },
  {
    name: 'Building your API stack',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Software Development', 'Tools'],
  },
]

export function OurClients() {
  return (
    <section className="py-16">
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-brand-700">Our Clients</h2>
            <p className="mt-3 text-display-sm font-semibold text-gray-900">
              We&apos;ve helped hundreds of global companies
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Interviews, tips, guides, industry best practices, and news.
            </p>
          </div>

          <div className="mt-12 grid gap-12">
            {clients.map((client, index) => (
              <div key={index}>
                <div className="relative h-60 overflow-hidden rounded-2xl bg-gray-200"></div>
                <div className="mt-5">
                  {client.date != null && (
                    <div className="mb-2 text-sm font-semibold text-brand-700">Olivia Rhye</div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                    <Link className="pt-0.5" href={client.url}>
                      <ArrowUpRightIcon className="size-6" />
                    </Link>
                  </div>
                  <p className="mt-2 line-clamp-2 text-gray-600">{client.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {client.tags.map((tag, i) => (
                      <Badge size="md" color={determineBadgeColor(tag)} key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button className="w-full" size="xl" asChild>
              <Link href="#">View all clients</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
