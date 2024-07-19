import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Button } from '../ui/button'
import { Container, Section } from '../ui/container'

import CSS3 from '@/public/images/logos/css3.svg'
import Git from '@/public/images/logos/git.svg'
import HTML5 from '@/public/images/logos/html5.svg'
import Javascript from '@/public/images/logos/javascript.svg'
import MicrosoftAzure from '@/public/images/logos/microsoft-azure.svg'
import MySQL from '@/public/images/logos/my-sql.svg'
import Php from '@/public/images/logos/php.svg'

export function WhoWeAre() {
  return (
    <Collapsible.Root>
      <Section>
        <Container className="text-center">
          <h2 className="flex items-center justify-center gap-2 font-medium text-brand-700">
            <div className="h-px w-16 border-t" />
            Who we are
            <div className="h-px w-16 border-t" />
          </h2>
          <p className="mt-8 text-balance text-display-sm font-medium">
            We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine
            working without it.
          </p>
          <Collapsible.Trigger asChild>
            <Button className="mt-8">
              Technologies we use <ArrowDownCircleIcon className="size-5" />
            </Button>
          </Collapsible.Trigger>
        </Container>
      </Section>

      <Collapsible.Content className="overflow-hidden data-open:animate-slide-down data-closed:animate-slide-up">
        <Section>
          <Container className="text-center">
            <h2 className="font-medium text-brand-700">Technologies we use</h2>
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
