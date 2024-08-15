'use client'

import Image from 'next/image'

import { Container, Section } from '../ui/container'

import CompanyLogo from '@/public/images/logos/ecsae-logotype.png'

export function AboutUs() {
  return (
    <Section className="bg-gray-50" id="about-us">
      <Container>
        <figure className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <Image className="w-[12.5rem] lg:w-[20.5rem] lg:shrink-0" src={CompanyLogo} alt="" />
          <div>
            <blockquote className="text-display-sm font-medium lg:text-display-md lg:tracking-tight">
              <p>
                We established EC Solutions and Enterprise to become a renowned technology firm by
                delivering high-quality and cost-efficient software to small and medium enterprises.
              </p>
            </blockquote>
            <figcaption className="mt-8">
              <div className="text-lg font-semibold">— Edilberto N. Chua, Jr.</div>
              <div className="mt-1 text-gray-600">Company Owner</div>
            </figcaption>
          </div>
        </figure>
      </Container>
    </Section>
  )
}
