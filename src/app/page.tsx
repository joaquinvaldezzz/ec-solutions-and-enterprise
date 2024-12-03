import { type FC, type SVGProps } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Marquee from 'react-fast-marquee'

import { Container, Section } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { AboutUs } from '@/components/block/about-us'
import { ContactUs } from '@/components/block/contact-us'
import { OurClients } from '@/components/block/our-clients'
import { OurServices } from '@/components/block/our-services'

import HeroBanner from '@/public/images/backgrounds/hero-banner.png'
import CollegeOfSanBenildoRizal from '@/public/images/logos/college-of-san-benildo-rizal.png'
import CSS3 from '@/public/images/logos/css3.svg'
import DepartmentOfHealthLogotype from '@/public/images/logos/department-of-health-logotype.png'
import DreamRiserBuildersInc from '@/public/images/logos/dream-riser-builders-inc.jpg'
import EscobarsSteakhouse from '@/public/images/logos/escobars-steakhouse.jpg'
import Git from '@/public/images/logos/git.svg'
import HTML5 from '@/public/images/logos/html5.svg'
import Javascript from '@/public/images/logos/javascript.svg'
import Maximum88Corporation from '@/public/images/logos/maximum-88-corporation.png'
import MicrosoftAzure from '@/public/images/logos/microsoft-azure.svg'
import MySQL from '@/public/images/logos/my-sql.svg'
import NorzagarayCollege from '@/public/images/logos/norzagaray-college.png'
import OurLadyOfFatimaUniversityLogotype from '@/public/images/logos/our-lady-of-fatima-university-logotype.png'
import PhilippineNavy from '@/public/images/logos/philippine-navy.png'
import Php from '@/public/images/logos/php.svg'
import Python from '@/public/images/logos/python.svg'
import ReactJS from '@/public/images/logos/react-js.svg'
import UniversityOfThePhilippinesManila from '@/public/images/logos/university-of-the-philippines.png'

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
    logo: ReactJS,
    name: 'React.js',
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
  {
    image: NorzagarayCollege,
    name: 'Norzagaray College',
  },
  {
    image: CollegeOfSanBenildoRizal,
    name: 'College of San Benildo - Rizal',
  },
  {
    image: PhilippineNavy,
    name: 'Philippine Navy',
  },
  {
    image: UniversityOfThePhilippinesManila,
    name: 'University of the Philippines - Manila',
  },
  {
    image: EscobarsSteakhouse,
    name: "Escobar's Steakhouse",
  },
  {
    image: Maximum88Corporation,
    name: 'Maximum 88 Corporation',
  },
]

export default function Page() {
  return (
    <div>
      <Section className="relative pt-[calc(calc(var(--spacing)*16)+var(--header-height))] lg:pt-[calc(calc(var(--spacing)*24)+var(--header-height))]">
        <Image
          className="hidden xl:pointer-events-none xl:absolute xl:top-0 xl:right-0 xl:block xl:object-cover xl:object-right xl:select-none"
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
            <p className="mt-4 max-w-[40rem] text-lg text-gray-400 lg:mt-6 lg:text-xl xl:max-w-xl">
              — We drive business growth through innovative technology, providing intelligent,
              secure, and scalable solutions tailored to your unique needs.
            </p>
            <div className="mt-8 flex max-w-[40rem] flex-wrap gap-x-8 gap-y-4 lg:mt-12 xl:max-w-xl">
              {technologies.map((technology, index) => {
                const Tag = technology.logo
                return (
                  <div className="flex items-center gap-2.5" key={index}>
                    <Tag className="size-8" />
                    <p className="text-gray-400">{technology.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-medium text-gray-400 capitalize">Companies we proudly work with</h2>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 lg:gap-y-6 xl:max-w-2xl 2xl:max-w-3xl">
            <Marquee autoFill>
              {logotypes.map((item, index) => (
                <Image
                  className="h-9 w-auto last:mr-8 lg:h-12"
                  src={item.image}
                  alt={item.name}
                  key={index}
                />
              ))}
            </Marquee>
          </div>
        </Container>
      </Section>

      <AboutUs />
      <OurClients />
      <OurServices />
      <ContactUs />
    </div>
  )
}
