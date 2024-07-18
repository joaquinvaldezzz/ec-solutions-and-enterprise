import Link from 'next/link'
import {
  faAngellist,
  faDribbble,
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <footer className="bg-brand-950">
      <Container>
        <div className="py-12">
          <div>
            <h2 className="font-semibold text-gray-200">EC Solutions</h2>
            <p className="mt-6 text-gray-200">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button className="text-gray-200" size="lg" heirarchy="link-gray" asChild>
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button className="text-gray-200" size="lg" heirarchy="link-gray" asChild>
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button className="text-gray-200" size="lg" heirarchy="link-gray" asChild>
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button className="text-gray-200" size="lg" heirarchy="link-gray" asChild>
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Button className="text-gray-200" size="lg" heirarchy="link-gray" asChild>
                        <Link href={product.url}>{product.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faXTwitter} className="size-6 text-gray-400" />
            <FontAwesomeIcon icon={faLinkedin} className="size-6 text-gray-400" />
            <FontAwesomeIcon icon={faFacebook} className="size-6 text-gray-400" />
            <FontAwesomeIcon icon={faGithub} className="size-6 text-gray-400" />
            <FontAwesomeIcon icon={faAngellist} className="size-6 text-gray-400" />
            <FontAwesomeIcon icon={faDribbble} className="size-6 text-gray-400" />
          </div>
          <p className="mt-6 text-gray-300">
            &copy; 2024 EC Solutions and Enterprise. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
