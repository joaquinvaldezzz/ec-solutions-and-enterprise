'use client'

import Link from 'next/link'

import { type NavItem } from '@/types/nav'

import { Button } from './button'
import { Container } from './container'

const products: NavItem[] = [
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
    <footer className="py-12">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>{/* Company logo goes here */}</div>

        <nav className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Button size="lg" hierarchy="link-gray" asChild>
                    <Link href={product.url}>{product.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Button size="lg" hierarchy="link-gray" asChild>
                    <Link href={product.url}>{product.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Button size="lg" hierarchy="link-gray" asChild>
                    <Link href={product.url}>{product.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="relative flex flex-col gap-8 text-pretty pt-8 before:absolute before:top-0 before:block before:h-px before:w-full before:bg-gray-200 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold lg:text-xl">
              Move faster with EC Solutions and Enterprise
            </p>
            <p className="mt-2 text-gray-600">
              Save countless hours of design and ship great looking designs faster.
            </p>
          </div>
          <p className="text-gray-500">
            &copy; 2024 EC Solutions and Enterprise. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
