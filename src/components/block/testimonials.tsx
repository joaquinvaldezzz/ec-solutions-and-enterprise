'use client'

import Image, { type StaticImageData } from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Container, Section } from '../ui/container'

import GlobalBank from '@/public/images/logos/globalbank.svg'
import JoaquinValdez from '@/public/images/profiles-pictures/joaquin-valdez.jpg'

interface Testimonial {
  quote: string
  name: string
  role: string
  picture: string | StaticImageData
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
    name: 'John Joaquin Valdez',
    role: 'UX Designer, GlobalBank',
    picture: JoaquinValdez,
  },
  {
    quote:
      "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
    name: 'John Joaquin Valdez',
    role: 'UX Designer, GlobalBank',
    picture: JoaquinValdez,
  },
]

export function Testimonials() {
  return (
    <Section>
      <Container>
        <h2 className="flex items-center justify-center gap-2 font-medium uppercase tracking-wide text-brand-700">
          <div className="h-px w-16 border-t" />
          Testimonials
          <div className="h-px w-16 border-t" />
        </h2>

        <Carousel className="mt-8">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <figure className="text-center">
                  <blockquote className="text-balance text-display-sm font-medium lg:text-display-lg lg:tracking-tight">
                    <p>{testimonial.quote}</p>
                  </blockquote>

                  <figcaption className="mt-8 flex flex-col items-center">
                    <Image
                      className="size-16 rounded-full border border-black/10"
                      src={testimonial.picture}
                      alt={testimonial.name}
                    />
                    <div className="mt-4 text-lg font-semibold">{testimonial.name}</div>
                    <div className="mt-1 text-gray-600">{testimonial.role}</div>
                  </figcaption>

                  <div className="mt-10 flex h-10 justify-center lg:mt-12">
                    <GlobalBank />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  )
}
