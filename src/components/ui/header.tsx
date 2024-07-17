'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'

import { Button } from './button'

export function Header() {
  return (
    <header className="flex h-18 items-center">
      <div className="container flex items-center justify-between">
        <div></div>

        <Button className="-mr-1 size-10" heirarchy="link-gray" type="button">
          <span className="sr-only">Open mobile menu</span>
          <Bars3Icon className="size-6" />
        </Button>
      </div>
    </header>
  )
}
