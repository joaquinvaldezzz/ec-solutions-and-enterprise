import { type VariantProps } from 'class-variance-authority'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { type badgeVariants } from '@/components/ui/badge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function determineBadgeColor(tag: string): VariantProps<typeof badgeVariants>['color'] {
  switch (tag) {
    case 'Design':
      return 'brand'
    // error
    // warning
    case 'Software Development':
      return 'success'
    // gray-blue
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
