'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'

export default function NotFound() {
  const router = useRouter()

  function handleClick() {
    router.back()
  }

  return (
    <main className="pt-header-height">
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-semibold text-brand-700">404 error</h1>
            <p className="mt-3 text-display-md font-semibold lg:text-display-xl lg:tracking-tight">
              We lost this page
            </p>
            <p className="mt-4 text-balance text-lg text-gray-600 lg:mt-6 lg:text-xl">
              We searched high and low, but could not find what you&apos;re looking for. Let&apos;s
              find a better place for you to go.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-12 lg:flex-row-reverse lg:justify-center">
            <Button size="xl" asChild>
              <Link href="/">Go home</Link>
            </Button>
            <Button size="xl" hierarchy="secondary-gray" onClick={handleClick}>
              <ArrowLeft className="size-5" />
              Go back
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
