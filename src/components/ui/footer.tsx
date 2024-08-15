'use client'

import Image from 'next/image'

import { Container } from './container'

import CompanyLogotype from '@/public/images/logos/ecsae-logotype.png'

interface CompanyInformation {
  label: string
  value: string
}

const companyInformation: CompanyInformation[] = [
  {
    label: 'Number of employees',
    value: '5 to 10',
  },
  {
    label: 'Date established',
    value: 'August 18, 2011',
  },
  {
    label: 'Company TIN',
    value: '180-973-971',
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 py-12 text-white lg:pt-16">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-y-12">
          <div>
            <span className="sr-only">Company Logo</span>
            <Image
              className="h-16 w-auto object-cover"
              src={CompanyLogotype}
              alt="EC Solutions and Enterprise"
            />
          </div>

          <dl className="grid gap-8 md:grid-cols-3">
            {companyInformation.map((info, index) => (
              <div key={index}>
                <dt className="text-sm font-semibold text-gray-300">{info.label}</dt>
                <dd className="mt-1 slashed-zero text-gray-200 lg:mt-2">
                  {info.label.includes('address') ? (
                    <address className="not-italic">{info.value}</address>
                  ) : info.label.includes('established') ? (
                    <time dateTime={String(new Date(info.value).toISOString())}>{info.value}</time>
                  ) : (
                    info.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* <nav className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Clients</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {posts
                .sort((a, z) =>
                  new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
                )
                .slice(0, 3)
                .map((post, index) => (
                  <li key={index}>
                    <Button size="lg" hierarchy="link-gray" asChild>
                      <Link href={`/portfolio/${post.slug}`}>{post.metadata.name}</Link>
                    </Button>
                  </li>
                ))}
              <li>
                <Button size="lg" hierarchy="link-gray" asChild>
                  <Link href="/portfolio">
                    View all <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="relative flex flex-col gap-8 text-pretty pt-8 before:absolute before:top-0 before:block before:h-px before:w-full before:bg-gray-800 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold lg:text-xl">
              Move faster with EC Solutions and Enterprise
            </p>
            <p className="mt-2 text-gray-200">
              Save countless hours of design and ship great looking designs faster.
            </p>
          </div>
          <p className="text-gray-300">
            &copy; 2024 EC Solutions and Enterprise. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
