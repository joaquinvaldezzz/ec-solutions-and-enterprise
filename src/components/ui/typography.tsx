'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    size: {
      title:
        'font-display text-display-sm font-semibold uppercase md:text-display-md lg:text-display-xl xl:max-w-2xl',
      heading: 'text-display-sm font-semibold capitalize lg:text-display-md lg:tracking-tight',
      eyebrow: 'text-sm font-semibold capitalize text-brand-700 lg:text-md',
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
