'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'

import { type NavItem } from '@/types/nav'

import { Button } from './button'

const links: NavItem[] = [
  {
    url: '#about-us',
    title: 'About Us',
  },
  {
    url: '#our-services',
    title: 'Our Services',
  },
  {
    url: '#our-clients',
    title: 'Our Clients',
  },
  {
    url: '#contact-us',
    title: 'Contact Us',
  },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className="flex h-header-height items-center">
        <div className="container flex items-center justify-between">
          <Link className="relative" href="/" aria-label="Home">
            EC Solutions and Enterprise
          </Link>

          <Dialog.Trigger asChild>
            <Button
              className="-mr-1 size-10 lg:hidden"
              hierarchy="link-gray"
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              <span className="sr-only">Open mobile menu</span>
              <Bars3Icon className="size-6" />
            </Button>
          </Dialog.Trigger>

          {pathname === '/' && (
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              {links.map((link, index) => (
                <Button
                  size="lg"
                  hierarchy="link-gray"
                  asChild
                  onClick={(event) => {
                    event.preventDefault()
                    document
                      .getElementById(link.url.slice(1))
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  key={index}
                >
                  <Link href={link.url}>{link.title}</Link>
                </Button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 size-full bg-black/50" />
        <Dialog.Content>
          <Dialog.Title className="sr-only">Mobile menu</Dialog.Title>
          <Dialog.Description className="sr-only">Use arrow keys to navigate</Dialog.Description>
          <div className="fixed inset-x-0 top-0 z-50 w-full bg-white shadow-lg lg:hidden">
            <div className="flex items-center justify-between p-4">
              <Link className="relative" href="/" aria-label="Home">
                EC Solutions and Enterprise
              </Link>

              <Dialog.Close asChild>
                <Button
                  className="-mr-1 size-10"
                  hierarchy="link-gray"
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen)
                  }}
                >
                  <span className="sr-only">Close mobile menu</span>
                  <XMarkIcon className="size-6" />
                </Button>
              </Dialog.Close>
            </div>
            <nav className="flex flex-col gap-2 py-6">
              {links.map((link, index) => (
                <Link
                  className="px-4 py-3 font-semibold hover:bg-gray-50 focus:outline-none"
                  href={link.url}
                  key={index}
                  onClick={(event) => {
                    setIsMobileMenuOpen(false)
                    event.preventDefault()
                    document
                      .getElementById(link.url.slice(1))
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
