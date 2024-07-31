'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'

import { type NavItem } from '@/types/nav'

import { Button } from './button'
import { products } from './footer'

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

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className="fixed inset-x-0 top-0 z-50 flex h-header-height items-center bg-white">
        <div className="container flex items-center justify-between lg:grid lg:grid-cols-[theme(spacing.48)_auto_theme(spacing.48)]">
          <div>
            <Button size="lg" hierarchy="link-color" asChild>
              <Link href="/">EC Solutions</Link>
            </Button>
          </div>

          <Dialog.Trigger asChild>
            <Button
              className="-mr-1 size-10 lg:hidden"
              hierarchy="link-gray"
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              {isMobileMenuOpen ? (
                <>
                  <span className="sr-only">Close mobile menu</span>
                  <XMarkIcon className="size-6" />
                </>
              ) : (
                <>
                  <span className="sr-only">Open mobile menu</span>
                  <Bars3Icon className="size-6" />
                </>
              )}
            </Button>
          </Dialog.Trigger>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {links.map((link, index) => (
              <Button size="lg" hierarchy="link-gray" asChild key={index}>
                <Link href={link.url}>{link.title}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden lg:flex lg:justify-end">
            <Button size="lg">Talk to an Expert</Button>
          </div>
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Title className="sr-only">Mobile menu</Dialog.Title>
          <Dialog.Description className="sr-only">Use arrow keys to navigate</Dialog.Description>
          <div className="absolute inset-x-0 top-header-height z-50 w-full bg-white shadow-lg lg:hidden">
            <nav className="flex flex-col gap-2 py-6">
              {links.map((link, index) => (
                <Link
                  className="px-4 py-3 font-semibold hover:bg-gray-50 focus:outline-none"
                  href={link.url}
                  key={index}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="px-4 py-6">
              <nav className="grid grid-cols-2 gap-x-6">
                <ul className="flex flex-col gap-y-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button
                        size="lg"
                        hierarchy="link-gray"
                        asChild
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-y-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button
                        size="lg"
                        hierarchy="link-gray"
                        asChild
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 flex flex-col">
                <Button
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
