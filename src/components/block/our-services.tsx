import Image from 'next/image'

import { type Service } from '@/types/service'

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
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold text-brand-700 lg:text-md">Features</h2>
          <p className="mt-3 text-display-sm font-semibold lg:text-display-md lg:tracking-tight">
            Our Services
          </p>
          <p className="mt-4 text-lg text-gray-600 lg:mt-5 lg:text-xl">
            Our clientele ranges from midsize to large companies. Our core expertise is open-source
            platforms. Our domain of expertise ranges from:
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.flat().map((item, index) => (
            <div
              className="group overflow-hidden rounded-2xl bg-gray-25 shadow-sm ring-1 ring-gray-200"
              key={index}
            >
              <div className="relative overflow-hidden">
                <Image
                  className="h-[14.25rem] object-cover transition-transform group-hover:scale-125 lg:h-[16.875rem]"
                  src={PlaceholderImage}
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-25" />
              </div>
              <div className="text-pretty p-5 lg:px-6 lg:pb-6 lg:pt-8">
                <h3 className="text-lg font-semibold lg:text-xl">{item.title}</h3>
                <p className="mt-1 text-gray-600 lg:mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
