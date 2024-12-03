'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    size: {
      title:
        'font-display text-display-sm md:text-display-md lg:text-display-xl font-semibold uppercase xl:max-w-2xl',
      heading: 'text-display-sm lg:text-display-md font-semibold capitalize lg:tracking-tight',
      eyebrow: 'text-brand-700 lg:text-md text-sm font-semibold capitalize',
      'supporting-text': 'text-lg text-gray-600 lg:text-xl',
    },
    font: {
      display: 'font-display',
    },
  },
})

interface TypographyProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, size, font, ...props }, ref) => {
    return (
      <Slot className={cn(typographyVariants({ size, font }), className)} ref={ref} {...props} />
    )
  },
)

Typography.displayName = 'Typography'
