'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

import { type Client } from '@/types/client'
import { determineBadgeColor } from '@/lib/utils'

import { Badge } from '..//ui/badge'
import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import CollegeOfSanBenildoRizal from '@/public/images/logos/college-of-san-benildo-rizal.png'
import NorzagarayCollege from '@/public/images/logos/norzagaray-college.png'
import PhilippineNavy from '@/public/images/logos/philippine-navy.png'

const clients: Client[] = [
  {
    image: NorzagarayCollege,
    name: 'Norzagaray College',
    url: '#',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    image: CollegeOfSanBenildoRizal,
    name: 'College of San Benildo - Rizal',
    url: '#',
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    tags: ['Product', 'Tools', 'Saas'],
  },
  {
    image: PhilippineNavy,
    name: 'Philippine Navy',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Software Development', 'Tools'],
  },
]

export function OurClients() {
  return (
    <Section>
      <Container>
        <div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-brand-700 lg:text-md">Our Clients</h2>
            <p className="mt-3 text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
              We&apos;ve helped hundreds of global companies
            </p>
            <p className="mt-4 text-lg text-gray-600 lg:mt-5 lg:text-xl">
              Interviews, tips, guides, industry best practices, and news.
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div key={index}>
                <Image className="size-16 object-contain" src={client.image} alt={client.name} />
                <div className="mt-5">
                  {client.date !== undefined && (
                    <div className="mb-2 text-sm font-semibold text-brand-700">Olivia Rhye</div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                    <Button heirarchy="link-gray" asChild>
                      <Link className="mt-0.5" href={client.url}>
                        <span className="sr-only">Visit external link</span>
                        <ArrowUpRightIcon className="size-6" />
                      </Link>
                    </Button>
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

          <div className="mt-12 lg:mt-16 lg:flex lg:justify-center">
            <Button className="w-full lg:w-auto" size="xl" asChild>
              <Link href="#">View all clients</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
