'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'

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
            <h1 className="text-brand-700 font-semibold">404 error</h1>
            <p className="text-display-md lg:text-display-xl mt-3 font-semibold lg:tracking-tight">
              We lost this page
            </p>
            <p className="mt-4 text-lg text-balance text-gray-600 lg:mt-6 lg:text-xl">
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

          <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="bg-gray-50 p-5 lg:col-start-2 lg:p-6">
              <BookOpen className="stroke-brand-600 size-6" />
              <h2 className="mt-8 text-lg font-semibold lg:mt-12 lg:text-xl">Our portfolio</h2>
              <p className="mt-1 text-gray-600 lg:mt-2">Read the latest posts on our blog.</p>
              <Button className="mt-4 lg:mt-5" size="lg" hierarchy="link-color" asChild>
                <Link href="/portfolio">
                  View latest post
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
