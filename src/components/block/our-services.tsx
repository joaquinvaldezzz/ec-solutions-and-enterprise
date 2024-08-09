import Link from 'next/link'
import { Laptop } from 'lucide-react'

import { type Service } from '@/types/service'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

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
      categories: ['Vulnerability Assessment and Penetration Testing (VAPT)'],
    },
  ],
  [
    {
      title: 'Cloud Hosting',
      description: 'A complete solution for managing engineering and construction projects.',
      categories: ['Azure', 'AWS'],
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'A complete solution for managing HR, payroll, and loan processing.',
      categories: ['Food and Beverage', 'Engineering Construction', 'School Information System'],
    },
  ],
]

export function OurServices() {
  return (
    <Section id="our-services">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-[22.5rem] lg:shrink-0">
            <div className="flex size-12 items-center justify-center rounded-full border-4 border-brand-50 bg-brand-100 ring-4 ring-brand-50">
              <Laptop className="size-6 text-brand-600" />
            </div>
            <h2 className="mt-6 text-display-sm font-semibold">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our clientele ranges from midsize to large companies. Our core expertise is
              open-source platforms. Our domain of expertise ranges from:
            </p>
          </div>
          <div className="divide-y lg:-mt-4">
            {services.map((row, x) => (
              <div
                className="grid py-5 first:pt-0 last:pb-0 md:grid-cols-2 lg:divide-x lg:py-0"
                key={x}
              >
                {row.map((service, y) => (
                  <div
                    className="text-pretty py-5 first:pt-0 last:pb-0 not-first:border-t md:py-0 md:not-first:border-t-0 lg:px-8 lg:py-4 lg:first:pl-0 lg:first:pt-4 lg:last:pb-4 lg:last:pr-0"
                    key={y}
                  >
                    <h3 className="text-lg font-semibold lg:text-xl">{service.title}</h3>
                    <p className="mt-1 text-gray-600 lg:mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas sunt
                      totam.
                    </p>
                    <ul className="ml-4 mt-4 flex list-disc flex-col gap-1">
                      {service.categories?.map((category, i) => (
                        <li className="marker:text-gray-300" key={i}>
                          <Button hierarchy="link-gray" asChild>
                            <Link href="/portfolio">{category}</Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}

            {/* {services.flat().map((service, index) => (
              <div className="text-pretty" key={index}>
                <h3 className="text-lg font-semibold lg:text-xl">{service.title}</h3>
                <p className="mt-1 text-gray-600 lg:mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas sunt totam.
                </p>
                <ul className="ml-4 mt-4 flex list-disc flex-col gap-1">
                  {service.categories?.map((category, i) => (
                    <li className="marker:text-gray-300" key={i}>
                      <Button hierarchy="link-gray" asChild>
                        <Link href="/portfolio">{category}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
        </div>
      </Container>
    </Section>
  )
}
