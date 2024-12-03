'use client'

import Image from 'next/image'

import { Container, Section } from '../ui/container'

import CompanyLogo from '@/public/images/logos/logotype-horizontal.png'

export function AboutUs() {
  return (
    <Section className="bg-[#eeeef0] xl:relative" id="about-us">
      <Container>
        <figure className="flex flex-col items-center gap-8">
          <Image
            className="h-16 w-auto object-contain lg:h-24"
            src={CompanyLogo}
            alt="EC Solutions and Enterprise"
          />
          <div>
            <blockquote className="text-display-sm lg:text-display-lg text-center font-medium text-gray-900 lg:tracking-tight">
              <p>
                We established EC Solutions and Enterprise to become a renowned technology firm by
                delivering high-quality and cost-efficient software to small and medium enterprises.
              </p>
            </blockquote>
          </div>
        </figure>
      </Container>
    </Section>
  )
}
