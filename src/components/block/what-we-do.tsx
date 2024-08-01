import { faUnity } from '@fortawesome/free-brands-svg-icons'
import {
  faBriefcaseMedical,
  faBuildingUser,
  faCashRegister,
  faCircleExclamation,
  faCloud,
  faComputer,
  faMoneyBillWave,
  faPenNib,
  faReceipt,
  faSchool,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { type Service } from '@/types/service'

import { Container, Section } from '../ui/container'

const services: Service[] = [
  {
    icon: faSchool,
    title: 'School Information System',
    description: 'A complete solution for managing schools, colleges, and universities.',
  },
  {
    icon: faCashRegister,
    title: 'Payment Gateway Integration',
    description: 'Integrate payment gateways to your website or mobile app.',
  },
  {
    icon: faBriefcaseMedical,
    title: 'Healthcare Information System',
    description:
      'A complete solution for managing hospitals, clinics, and other healthcare facilities.',
  },
  {
    icon: faCloud,
    title: 'Cloud Hosting (Azure, AWS)',
    description:
      'Host your website, web application, or mobile app on the cloud for better performance and scalability.',
  },
  {
    icon: faBuildingUser,
    title: 'Engineering Construciton (ERP)',
    description: 'A complete solution for managing engineering and construction projects.',
  },
  {
    icon: faUsersLine,
    title: 'Human Resource, Payrool, and Loan System',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
  },
  {
    icon: faReceipt,
    title: 'Online Accounting System',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
  },
  {
    icon: faMoneyBillWave,
    title: 'Web Portal and Payment Solutions',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
  },
  {
    icon: faCircleExclamation,
    title: 'Vulnerability Assessment and Penetration Testing (VAPT)',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
  },
  {
    icon: faComputer,
    title: 'System Integration',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
  },
  {
    icon: faPenNib,
    title: 'Graphic Design',
    description: '',
  },
  {
    icon: faUnity,
    title: '3D Modeling',
    description: '',
  },
]

export function WhatWeDo() {
  return (
    <Section id="our-services">
      <Container className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="flex items-center justify-center gap-2 font-medium uppercase tracking-wide text-brand-700">
            <div className="h-px w-16 border-t" />
            What we do
            <div className="h-px w-16 border-t" />
          </h2>
          <p className="mt-3 text-pretty text-display-sm font-semibold text-gray-900 lg:text-display-md lg:tracking-tight">
            Our Services
          </p>
          <p className="mt-4 text-pretty text-lg text-gray-600 lg:mt-5 lg:text-xl">
            Our clientele ranges from midsize to large companies. Our core expertise is open-source
            platforms (PHP, Python, and MySQL). Our domain of expertise ranges from:
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {services.map((service, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="flex size-10 items-center justify-center rounded-full border-brand-50 bg-brand-100 ring-6 ring-brand-50 lg:size-12 lg:ring-8">
                <FontAwesomeIcon className="size-5 text-brand-600 lg:size-6" icon={service.icon} />
              </div>
              <h3 className="mt-4 text-pretty text-lg font-semibold lg:mt-5">{service.title}</h3>
              <p className="mt-1 text-pretty text-gray-600 lg:mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
