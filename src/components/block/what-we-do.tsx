import Link from 'next/link'
import {
  faBrain,
  faCloud,
  faCoins,
  faPenNib,
  faShieldHalved,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { type Service } from '@/types/service'
import { slugify } from '@/lib/utils'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

const services: Service[][] = [
  [
    {
      icon: faBrain,
      title: 'Artificial Intelligence (AI) Tools',
      description: 'A complete solution for managing schools and educational institutions.',
      categories: ['AI Marketing'],
    },
    {
      icon: faPenNib,
      title: 'Graphic Design and Visualization',
      description: 'Integrate payment gateways to your website or mobile app.',
      categories: [
        'Branding and Logo design',
        'Packaging Design',
        'Web Design',
        '3D models Architectural Design',
      ],
    },
    {
      icon: faCoins,
      title: 'Financial',
      description:
        'A complete solution for managing hospitals, clinics, and other healthcare facilities.',
      categories: [
        'Web Portal and Payment Solutions',
        'Payment Gateway Integration',
        'Payroll and Accounting System',
      ],
    },
  ],
  [
    {
      icon: faShieldHalved,
      title: 'Cybersecurity',
      description:
        'Host your website, web application, or mobile app on the cloud for better performance and scalability.',
      categories: ['Vulnerability Assessment and Penetration Testing (VAPT)'],
    },
    {
      icon: faCloud,
      title: 'Cloud Hosting',
      description: 'A complete solution for managing engineering and construction projects.',
      categories: ['Azure', 'AWS'],
    },
    {
      icon: faUsersLine,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'A complete solution for managing HR, payroll, and loan processing.',
      categories: ['Food and Beverage', 'Engineering Construction', 'School Information System'],
    },
  ],
]

export function WhatWeDo() {
  return (
    <Section id="our-services">
      <Container className="">
        <div className="max-w-3xl">
          <h2 className="font-semibold text-brand-700">Our Services</h2>
          <p className="mt-3 text-pretty text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
            What we do
          </p>
          <p className="mt-4 text-pretty text-lg text-gray-600 lg:mt-5 lg:text-xl">
            Our clientele ranges from midsize to large companies. Our core expertise is open-source
            platforms (PHP, Python, and MySQL). Our domain of expertise ranges from:
          </p>
        </div>

        <div className="mt-12 grid lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <div className="col-span-full grid lg:grid-cols-3" key={index}>
              {service.map((item, i) => (
                <div className="flex flex-col py-5 lg:px-4 lg:py-8" key={i}>
                  <div className="flex size-10 items-center justify-center rounded-full border-brand-50 bg-brand-100 ring-6 ring-brand-50 lg:size-12 lg:ring-8">
                    <FontAwesomeIcon className="size-5 text-brand-600 lg:size-6" icon={item.icon} />
                  </div>
                  <h3 className="mt-4 text-pretty text-lg font-semibold lg:mt-5">{item.title}</h3>
                  <div className="mt-1 text-pretty text-gray-600 lg:mt-2">{item.description}</div>
                  <ul className="ml-4 mt-5 list-disc space-y-2 text-gray-600">
                    {item.categories?.map((category, x) => (
                      <li className="text-pretty" key={x}>
                        <Button hierarchy="link-gray" asChild>
                          <Link href={`/portfolio/?view=${slugify(category)}`}>{category}</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
