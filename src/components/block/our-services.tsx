import Image from 'next/image'
import Link from 'next/link'

import { type Service } from '@/types/service'
import { convertSpacesToPercentEncoding } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import PlaceholderImage from '@/public/images/profiles-pictures/joaquin-valdez.jpg'

const services: Service[][] = [
  [
    {
      title: 'Artificial Intelligence (AI) Tools',
      description: 'A complete solution for managing schools and educational institutions.',
      categories: ['AI Marketing'],
    },
    {
      title: 'Graphic Design and Visualization',
      description: 'Integrate payment gateways to your website or mobile app.',
      categories: [
        'Branding and Logo design',
        'Packaging Design',
        'Web Design',
        '3D models Architectural Design',
      ],
    },
  ],
  [
    {
      title: 'Financial',
      description:
        'A complete solution for managing hospitals, clinics, and other healthcare facilities.',
      categories: [
        'Web Portal and Payment Solutions',
        'Payment Gateway Integration',
        'Payroll and Accounting System',
      ],
    },
    {
      title: 'Cybersecurity',
      description:
        'Host your website, web application, or mobile app on the cloud for better performance and scalability.',
      categories: ['Vulnerability Assessment and Penetration Testing'],
    },
  ],
  [
    {
      title: 'Cloud Hosting',
      description: 'A complete solution for managing engineering and construction projects.',
      categories: ['Azure', 'AWS'],
    },
    {
      title: 'Enterprise Resource Planning',
      description: 'A complete solution for managing HR, payroll, and loan processing.',
      categories: ['Food and Beverage', 'Engineering Construction', 'School Information System'],
    },
  ],
]

export function OurServices() {
  return (
    <Section id="our-services">
      <Container>
        <div className="max-w-3xl">
          <Typography size="eyebrow">
            <h2>Features</h2>
          </Typography>
          <Typography className="mt-3" size="heading">
            <p>Our Services</p>
          </Typography>
          <Typography className="mt-4 lg:mt-5" size="supporting-text">
            <p>
              Our clientele ranges from midsize to large companies. Our core expertise is
              open-source platforms. Our domain of expertise ranges from:
            </p>
          </Typography>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.flat().map((item, index) => (
            <div
              className="group overflow-hidden rounded-2xl bg-gray-25 shadow-sm ring-1 ring-gray-200"
              key={index}
            >
              <div className="relative overflow-hidden">
                <Image
                  className="h-[14.25rem] object-cover grayscale transition group-hover:scale-125 group-hover:grayscale-0 lg:h-[16.875rem]"
                  src={PlaceholderImage}
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-25" />
              </div>
              <div className="text-pretty p-5 lg:px-6 lg:pb-6 lg:pt-8">
                <h3 className="text-lg font-semibold lg:text-xl">{item.title}</h3>
                <ul className="mt-1 list-disc space-y-1 pl-4 marker:text-gray-300 lg:mt-2">
                  {item.categories?.map((category, i) => (
                    <li key={i}>
                      <Button hierarchy="link-gray" asChild>
                        <Link
                          href={`/portfolio/?category=${convertSpacesToPercentEncoding(category)}`}
                        >
                          {category}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
