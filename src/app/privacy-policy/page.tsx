import { Container, Section } from '@/components/ui/container'

export default function Page() {
  return (
    <div className="mt-header-height">
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-brand-700 lg:text-md text-sm font-semibold">
              Current as of August 2, 2024
            </div>
            <h1 className="text-display-md lg:text-display-lg mt-3 font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600 lg:mt-6 lg:text-xl">
              Your privacy is important to us at EC Solutions and Enterprise. We respect your
              privacy regarding any information we may collect from you across our website.
            </p>
          </div>
        </Container>
      </Section>

      <div className="container pb-16 lg:pb-24">
        <article className="mx-auto max-w-[720px]"></article>
      </div>
    </div>
  )
}
