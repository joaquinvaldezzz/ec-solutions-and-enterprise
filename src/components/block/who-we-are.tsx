'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import * as Collapsible from '@radix-ui/react-collapsible'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import CSS3 from '@/public/images/logos/css3.svg'
import Git from '@/public/images/logos/git.svg'
import HTML5 from '@/public/images/logos/html5.svg'
import Javascript from '@/public/images/logos/javascript.svg'
import MicrosoftAzure from '@/public/images/logos/microsoft-azure.svg'
import MySQL from '@/public/images/logos/my-sql.svg'
import Php from '@/public/images/logos/php.svg'
import Python from '@/public/images/logos/python.svg'
import EdilbertoChuaJr from '@/public/images/profiles-pictures/edilberto-chua-jr.jpg'

export function WhoWeAre() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <Collapsible.Root open={isCollapsed} onOpenChange={setIsCollapsed} id="about-us">
      <Section>
        <Container className="text-center">
          <h2 className="flex items-center justify-center gap-2 font-medium uppercase tracking-wide text-brand-700">
            <div className="h-px w-16 border-t" />
            Who we are
            <div className="h-px w-16 border-t" />
          </h2>
          <figure className="mt-8">
            <blockquote className="text-balance text-display-sm font-medium lg:text-display-lg lg:tracking-tight">
              <p>
                We established EC Solutions and Enterprise with a vision to become a renowned
                technology firm by delivering high-quality and cost-efficient software to small and
                medium enterprises.
              </p>
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center">
              <Image
                className="size-16 rounded-full border border-black/10"
                src={EdilbertoChuaJr}
                alt="Edilberto N. Chua, Jr."
              />
              <div className="mt-4 text-lg font-semibold">Edilberto N. Chua, Jr.</div>
              <div className="mt-1 text-gray-600">Company Owner</div>
            </figcaption>
          </figure>

          <Collapsible.Trigger asChild>
            <Button
              className="mt-8"
              size="lg"
              onClick={() => {
                setIsCollapsed(!isCollapsed)
              }}
            >
              Technologies we use{' '}
              <ArrowDownCircleIcon
                className={cn('size-5 transition', isCollapsed && 'rotate-180')}
              />
            </Button>
          </Collapsible.Trigger>
        </Container>
      </Section>

      <Collapsible.Content className="overflow-hidden data-open:animate-slide-down data-closed:animate-slide-up">
        <Section>
          <Container className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-balance font-medium uppercase tracking-wide text-brand-700">
              <div className="h-px w-16 border-t" />
              Technologies we use
              <div className="h-px w-16 border-t" />
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <HTML5 className="size-8" />
                <p className="text-gray-600">HTML5</p>
              </div>

              <div className="flex items-center gap-2">
                <CSS3 className="size-8" />
                <p className="text-gray-600">CSS3</p>
              </div>

              <div className="flex items-center gap-2">
                <Javascript className="size-8" />
                <p className="text-gray-600">JavaScript</p>
              </div>

              <div className="flex items-center gap-2">
                <Php className="size-8" />
                <p className="text-gray-600">PHP</p>
              </div>

              <div className="flex items-center gap-2">
                <Python className="size-8" />
                <p className="text-gray-600">Python</p>
              </div>

              <div className="flex items-center gap-2">
                <MySQL className="size-8" />
                <p className="text-gray-600">MySQL</p>
              </div>

              <div className="flex items-center gap-2">
                <Git className="size-8" />
                <p className="text-gray-600">git</p>
              </div>

              <div className="flex items-center gap-2">
                <MicrosoftAzure className="size-8" />
                <p className="text-gray-600">Microsoft Azure</p>
              </div>
            </div>
          </Container>
        </Section>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
