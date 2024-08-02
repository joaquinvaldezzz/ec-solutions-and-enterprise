import Image from 'next/image'

import { type NavItem } from '@/types/nav'

import { Container } from './container'

import ECSAELogomark from '@/public/images/logos/ecsae-logotype.png'

export const products: NavItem[] = [
  {
    url: '#',
    title: 'Overview',
  },
  {
    url: '#',
    title: 'Features',
  },
  {
    url: '#',
    title: 'Solutions',
  },
  {
    url: '#',
    title: 'Tutorials',
  },
  {
    url: '#',
    title: 'Pricing',
  },
  {
    url: '#',
    title: 'Releases',
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-950">
      <Container className="flex flex-col gap-12 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-center">
          <Image
            className="h-20 w-40 object-contain"
            src={ECSAELogomark}
            alt="EC Solutions and Enterprise"
          />
        </div>

        <p className="text-balance text-center text-gray-300">
          &copy; 2024 EC Solutions and Enterprise. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
