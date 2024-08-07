import Image from 'next/image'

import { Container, Section } from '@/components/ui/container'

import PlaceholderImage from '@/public/images/backgrounds/placeholder-image.jpeg'

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <h1 className="max-w-5xl text-display-md font-medium tracking-tight lg:text-display-xl">
            We design digital experiences that create more happy in the world
          </h1>
          <p className="mt-4 max-w-[40rem] text-lg text-gray-600 lg:mt-6 lg:text-xl">
            — We&apos;re a full-service design and development agency who specialize in simple,
            useful and beautiful solutions.
          </p>
          <Image
            className="mt-16 h-60 object-cover lg:h-[32.25rem]"
            src={PlaceholderImage}
            alt="Placeholder image"
            priority
          />
        </Container>
      </Section>
    </div>
  )
}
