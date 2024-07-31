'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  asDiv?: boolean
}

const Section = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asDiv = false, asChild = false, ...props }, ref) => {
    const Component = asDiv ? 'div' : asChild ? Slot : 'section'
    return (
      <Component
        className={cn('scroll-mt-header-height py-16 lg:py-24', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Section.displayName = 'Section'

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, ...props }, ref) => (
  <div className={cn('container', className)} ref={ref} {...props} />
))
Container.displayName = 'Container'

export { Container, Section }
