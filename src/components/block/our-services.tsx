import Image from 'next/image'

import { type Service } from '@/types/service'
import { Typography } from '@/components/ui/typography'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import AI from '@/public/images/our-services/ai.png'
import CloudHosting from '@/public/images/our-services/cloud-hosting.png'
import Cybersecurity from '@/public/images/our-services/cubersecurity.png'
import EnterpriseResourcePlanning from '@/public/images/our-services/enterprise-resource-planning.png'
import Financial from '@/public/images/our-services/financial.png'
import GraphicDesign from '@/public/images/our-services/graphic-design.png'

const services: Service[] = [
  {
    image: AI,
    title: 'Artificial Intelligence (AI) Tools',
    description: 'A complete solution for managing schools and educational institutions.',
    categories: ['AI Marketing'],
  },
  {
    image: GraphicDesign,
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
    image: Financial,
    title: 'Mobile App Development',
    description:
      'A complete solution for managing hospitals, clinics, and other healthcare facilities.',
    categories: [
      'Web Portal and Payment Solutions',
      'Payment Gateway Integration',
      'Payroll and Accounting System',
    ],
  },
  {
    image: Cybersecurity,
    title: 'Cybersecurity',
    description:
      'Host your website, web application, or mobile app on the cloud for better performance and scalability.',
    categories: ['Vulnerability Assessment and Penetration Testing'],
  },
  {
    image: CloudHosting,
    title: 'Cloud Hosting',
    description: 'A complete solution for managing engineering and construction projects.',
    categories: ['Azure', 'AWS'],
  },
  {
    image: EnterpriseResourcePlanning,
    title: 'Enterprise Resource Planning',
    description: 'A complete solution for managing HR, payroll, and loan processing.',
    categories: ['Food and Beverage', 'Engineering Construction', 'School Information System'],
  },
  {
    image: Financial,
    title: 'Financial',
    description:
      'A complete solution for managing hospitals, clinics, and other healthcare facilities.',
    categories: [
      'Web Portal and Payment Solutions',
      'Payment Gateway Integration',
      'Payroll and Accounting System',
    ],
  },
]

export function OurServices() {
  return (
    <Section className="bg-[#002f69]" id="our-services">
      <Container>
        <div className="max-w-3xl">
          <Typography className="text-white" size="eyebrow">
            <h2>What we do</h2>
          </Typography>
          <Typography className="mt-3" size="heading">
            <p>Our Services</p>
          </Typography>
          <Typography className="mt-4 text-gray-400 lg:mt-5" size="supporting-text">
            <p>
              Our clientele ranges from midsize to large companies. Our core expertise is
              open-source platforms. Our domain of expertise ranges from:
            </p>
          </Typography>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((item, index) => (
            <div className="overflow-hidden rounded-2xl bg-brand-600 shadow-sm" key={index}>
              <div className="relative h-[14.25rem] overflow-hidden lg:h-[16.875rem]">
                <Image className="scale-125 object-cover" src={item.image} alt={item.title} fill />
                {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-25" /> */}
              </div>
              <div className="text-pretty p-5 lg:px-6 lg:pb-6 lg:pt-8">
                <h3 className="text-lg font-semibold lg:text-xl">{item.title}</h3>
                <ul className="mt-1 list-disc space-y-1 pl-4 marker:text-gray-300 lg:mt-2">
                  {item.categories?.map((category, i) => (
                    <li key={i}>
                      <Button
                        className="text-gray-400 hover:text-gray-300"
                        hierarchy="link-gray"
                        asChild
                      >
                        <span>{category}</span>
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
