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
import DepartmentOfHealth from '@/public/images/logos/department-of-health.png'
import DreamRiserBuildersInc from '@/public/images/logos/dream-riser-builders-inc.jpg'
import EscobarsSteakhouse from '@/public/images/logos/escobars-steakhouse.jpg'
import Maximum88Corporation from '@/public/images/logos/maximum-88-corporation.png'
import NorzagarayCollege from '@/public/images/logos/norzagaray-college.png'
import OurLadyOfFatimaUniversity from '@/public/images/logos/our-lady-of-fatima-university.png'
import PhilippineNavy from '@/public/images/logos/philippine-navy.png'
import UniversityOfThePhilippines from '@/public/images/logos/university-of-the-philippines.png'

const clients: Client[] = [
  {
    project: 'School Information System',
    image: NorzagarayCollege,
    name: 'Norzagaray College',
    url: '#',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    project: 'School Information System',
    image: CollegeOfSanBenildoRizal,
    name: 'College of San Benildo - Rizal',
    url: '#',
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    tags: ['Product', 'Tools', 'Saas'],
  },
  {
    project: 'Database System',
    image: PhilippineNavy,
    name: 'Philippine Navy',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Software Development', 'Tools'],
  },
  {
    project: 'Cloud Services and Health Emergency Information System',
    image: DepartmentOfHealth,
    name: 'Department of Health',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Product', 'Tools', 'Saas'],
  },
  {
    project: 'OLFU Journal Research System',
    image: OurLadyOfFatimaUniversity,
    name: 'Our Lady of Fatima University',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Software Development', 'Tools'],
  },
  {
    project: 'G6PD Database Management System for Newborn Screening and Research Center (NSRC)',
    image: UniversityOfThePhilippines,
    name: 'University of the Philippines',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    project: 'Inventory of Goods, Payroll and Accounting System for Food and Beverages',
    image: EscobarsSteakhouse,
    name: "Escobar's Steakhouse",
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    project: 'Materials Inventory, Payroll and Accounting System for Construction',
    image: DreamRiserBuildersInc,
    name: 'Dream Riser Builders Inc.',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    project: 'Inventory of Goods, Payroll and Accounting System for Retail',
    image: Maximum88Corporation,
    name: 'Maximum 88 Corporation',
    url: '#',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    tags: ['Design', 'Research', 'Presentation'],
  },
]

export function OurClients() {
  return (
    <Section id="our-clients">
      <Container>
        <div>
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-700 lg:text-md">
              <div className="h-px w-16 border-t" />
              Our Clients
              <div className="h-px w-16 border-t" />
            </h2>
            <p className="mt-3 text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
              We&apos;ve helped hundreds of global companies
            </p>
            <p className="mt-4 text-balance text-lg text-gray-600 lg:mt-5 lg:text-xl">
              Interviews, tips, guides, industry best practices, and news.
            </p>
          </div>

          <div className="mt-12 grid gap-y-12 md:grid-cols-2 md:gap-x-8 lg:mt-16 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div key={index}>
                <Image
                  className="h-16 w-auto object-contain"
                  src={client.image}
                  alt={client.name}
                />
                <div className="mt-5">
                  <div className="text-balance text-sm font-semibold text-brand-700">
                    {client.project}
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold lg:text-display-xs">{client.name}</h3>
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

          {/* <div className="mt-12 lg:mt-16 lg:flex lg:justify-center">
            <Button className="w-full lg:w-auto" size="xl" asChild>
              <Link href="#">View all clients</Link>
            </Button>
          </div> */}
        </div>
      </Container>
    </Section>
  )
}
