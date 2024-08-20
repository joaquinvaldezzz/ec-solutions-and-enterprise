import { type VariantProps } from 'class-variance-authority'
import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import { type badgeVariants } from '@/components/ui/badge'

import tailwindConfig from '../../tailwind.config'

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({
    extend: {
      theme: {},
      classGroups: {
        'font-size': Object.keys(tailwindConfig.theme?.fontSize ?? {}),
      },
    },
  })

  return twMerge(clsx(inputs))
}

export function determineBadgeColor(tag: string): VariantProps<typeof badgeVariants>['color'] {
  switch (tag) {
    case 'Design':
      return 'brand'
    case 'Food and Beverages':
      return 'error'
    case 'Payroll':
      return 'warning'
    case 'Software Development':
      return 'success'
    case 'Accounting System':
      return 'gray-blue'
    case 'Product':
      return 'blue-light'
    // blue
    case 'Research':
      return 'indigo'
    // purple
    case 'Presentation':
    case 'Saas':
    case 'Tools':
      return 'pink'
    // orange
    default:
      return 'gray'
  }
}

export function slugify(text: string) {
  return text
    .toString() // Convert to string
    .toLowerCase() // Change to lowercase
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-') // Replace multiple - with single -
}

export function replaceSpacesWithPlus(text: string) {
  return text.replace(/ /g, '+')
}
