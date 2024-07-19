'use client'

import Image from 'next/image'

import { Container, Section } from '../ui/container'

import JoaquinValdez from '@/public/images/profiles-pictures/joaquin-valdez.jpg'

export function Testimonials() {
  return (
    <Section>
      <Container>
        <figure className="text-center">
          <blockquote className="text-balance text-display-sm font-medium lg:text-display-lg lg:tracking-tight">
            <p className="">
              Untitled has saved us thousands of hours of work. We&apos;re able to spin up projects
              and features faster.
            </p>
          </blockquote>

          <figcaption className="mt-8 flex flex-col items-center">
            <Image
              className="size-16 rounded-full border border-black/10"
              src={JoaquinValdez}
              alt="Joaquin Valdez"
            />
            <div className="mt-4 text-lg font-semibold">John Joaquin Valdez</div>
            <div className="mt-1 text-gray-600">UX Designer, GlobalBank</div>
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
