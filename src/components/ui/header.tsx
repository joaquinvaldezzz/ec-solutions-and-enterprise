'use client'

import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'

import { type NavItem } from '@/types/nav'

import { Button } from './button'

const links: NavItem[] = [
  {
    url: '#',
    title: 'About Us',
  },
  {
    url: '#',
    title: 'Our Services',
  },
  {
    url: '#',
    title: 'Our Clients',
  },
  {
    url: '#',
    title: 'Contact Us',
  },
]

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-[--header-height] items-center">
      <div className="container flex items-center justify-between lg:grid lg:grid-cols-[theme(spacing.48)_auto_theme(spacing.48)]">
        <div>
          <Button size="lg" heirarchy="link-color" asChild>
            <Link href="#">EC Solutions</Link>
          </Button>
        </div>

        <Button className="-mr-1 size-10 lg:hidden" heirarchy="link-gray" type="button">
          <span className="sr-only">Open mobile menu</span>
          <Bars3Icon className="size-6" />
        </Button>

        <nav className="flex items-center gap-8">
          {links.map((link, index) => (
            <Button size="lg" heirarchy="link-gray" asChild key={index}>
              <Link href={link.url}>{link.title}</Link>
            </Button>
          ))}
        </nav>

        <div className="lg:flex lg:justify-end">
          <Button size="lg">Talk to an Expert</Button>
        </div>
      </div>
    </header>
  )
}
