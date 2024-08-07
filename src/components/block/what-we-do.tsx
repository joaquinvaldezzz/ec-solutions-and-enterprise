import Link from 'next/link'
import {
  faBrain,
  faCloud,
  faCoins,
  faPenNib,
  faShieldHalved,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons'
import { Laptop } from 'lucide-react'

import { type Service } from '@/types/service'

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
    <Section>
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-[22.5rem] lg:shrink-0">
            <div className="flex size-12 items-center justify-center rounded-full border-4 border-brand-50 bg-brand-100 ring-4 ring-brand-50">
              <Laptop className="size-6 text-brand-600" />
            </div>
            <h2 className="mt-6 text-display-sm font-semibold">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our clientele ranges from midsize to large companies. Our core expertise is
              open-source platforms (PHP, Python, and MySQL). Our domain of expertise ranges from:
            </p>
          </div>
          <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
            {services.flat().map((service, index) => (
              <div className="text-pretty" key={index}>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-1 text-gray-600">{service.description}</p>
                <ul className="ml-4 mt-2 flex list-disc flex-col gap-1 text-gray-600">
                  {service.categories?.map((category, i) => (
                    <li key={i}>
                      <Button hierarchy="link-gray" asChild>
                        <Link href="#">{category}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
