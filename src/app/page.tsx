import { type FC, type SVGProps } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { determineBadgeColor } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { AboutUs } from '@/components/block/about-us'
import { ContactUs } from '@/components/block/contact-us'
import { OurServices } from '@/components/block/our-services'
import { getPosts } from '@/app/portfolio/utils'

import HeroBanner from '@/public/images/backgrounds/hero-banner.png'
import CSS3 from '@/public/images/logos/css3.svg'
import DepartmentOfHealthLogotype from '@/public/images/logos/department-of-health-logotype.png'
import DreamRiserBuildersInc from '@/public/images/logos/dream-riser-builders-inc.jpg'
import Git from '@/public/images/logos/git.svg'
import HTML5 from '@/public/images/logos/html5.svg'
import Javascript from '@/public/images/logos/javascript.svg'
import MicrosoftAzure from '@/public/images/logos/microsoft-azure.svg'
import MySQL from '@/public/images/logos/my-sql.svg'
import OurLadyOfFatimaUniversityLogotype from '@/public/images/logos/our-lady-of-fatima-university-logotype.png'
import Php from '@/public/images/logos/php.svg'
import Python from '@/public/images/logos/python.svg'

const technologies: Array<{
  logo: FC<SVGProps<SVGElement>>
  name: string
}> = [
  {
    logo: HTML5,
    name: 'HTML5',
  },
  {
    logo: CSS3,
    name: 'CSS3',
  },
  {
    logo: Javascript,
    name: 'JavaScript',
  },
  {
    logo: Php,
    name: 'PHP',
  },
  {
    logo: Python,
    name: 'Python',
  },
  {
    logo: MySQL,
    name: 'MySQL',
  },
  {
    logo: Git,
    name: 'Git',
  },
  {
    logo: MicrosoftAzure,
    name: 'Microsoft Azure',
  },
]

const logotypes: Array<{ image: StaticImageData; name: string }> = [
  {
    image: DepartmentOfHealthLogotype,
    name: 'Department of Health',
  },
  {
    image: OurLadyOfFatimaUniversityLogotype,
    name: 'Our Lady of Fatima University',
  },
  {
    image: DreamRiserBuildersInc,
    name: 'Dream Riser Builders, Inc.',
  },
]

export default function Page() {
  const posts = getPosts()

  return (
    <div>
      <Section className="relative pt-[calc(theme(spacing.16)+var(--header-height))] lg:pt-[calc(theme(spacing.24)+var(--header-height))]">
        <Image
          className="hidden xl:pointer-events-none xl:absolute xl:right-0 xl:top-0 xl:block xl:select-none xl:object-cover xl:object-right"
          src={HeroBanner}
          alt=""
          width={1188}
          height={1188}
          priority
        />
        <Container className="lg:relative">
          <div>
            <Typography className="max-w-5xl xl:max-w-2xl" size="title" font="display">
              <h1>
                Innovating the future of business with intelligent, secure, and scalable technology
                solutions
              </h1>
            </Typography>
            <p className="mt-4 max-w-[40rem] text-lg text-gray-600 lg:mt-6 lg:text-xl xl:max-w-xl">
              — We drive business growth through innovative technology, providing intelligent,
              secure, and scalable solutions tailored to your unique needs.
            </p>
            <div className="mt-8 flex max-w-[40rem] flex-wrap gap-x-8 gap-y-4 lg:mt-12 xl:max-w-xl">
              {technologies.map((technology, index) => {
                const Tag = technology.logo
                return (
                  <div className="flex items-center gap-2.5" key={index}>
                    <Tag className="size-8" />
                    <p className="text-gray-600">{technology.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-medium text-gray-600">Join 4,000+ companies already growing</h2>
          <div className="mt-8 flex max-w-[40rem] flex-wrap gap-x-8 gap-y-4 lg:gap-y-6">
            {logotypes.map((item, index) => (
              <Image className="h-9 w-auto lg:h-12" src={item.image} alt={item.name} key={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="our-clients">
        <Container>
          <div className="lg:flex lg:justify-between">
            <div className="max-w-3xl text-pretty">
              <Typography size="heading">
                <h2>
                  Innovating the Future of Business with Intelligent, Secure, and Scalable
                  Technology Solutions
                </h2>
              </Typography>
              <Typography className="mt-4 lg:mt-5" size="supporting-text">
                <p>
                  We&apos;ve partnered with local businesses and organizations to design and
                  implement tailored systems that drive efficiency, innovation, and growth. By
                  understanding their unique needs, we&apos;ve delivered solutions that empower them
                  to succeed in an increasingly digital world.
                </p>
              </Typography>
            </div>

            <div className="hidden lg:block">
              <Button size="xl" asChild>
                <Link href="/portfolio">View all clients</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {posts
              .sort((a, z) =>
                new Date(a.metadata.publishedAt) < new Date(z.metadata.publishedAt) ? -1 : 1,
              )
              .slice(0, 3)
              .map((post, index) => (
                <Link
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-xs lg:p-8"
                  href={`/portfolio/${post.slug}`}
                  key={index}
                >
                  <Image
                    className="size-14 rounded-full lg:size-24"
                    src={post.metadata.image}
                    alt={post.metadata.name}
                    width={96}
                    height={96}
                  />
                  <div className="mt-5 text-pretty">
                    <div className="text-balance text-sm font-semibold text-brand-700">
                      {post.metadata.name}
                    </div>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold lg:text-display-xs">
                        {post.metadata.project}
                      </h3>
                    </div>
                    <p className="mt-2 line-clamp-4 text-gray-600">{post.metadata.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.metadata.tags.split(', ').map((tag, i) => (
                        <Badge color={determineBadgeColor(tag)} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-12 flex flex-col lg:hidden">
            <Button size="xl" asChild>
              <Link href="/portfolio">View all clients</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <AboutUs />
      <OurServices />
      <ContactUs />
    </div>
  )
}
