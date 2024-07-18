'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Section = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'
    return <Component className={cn('py-16', className)} ref={ref} {...props} />
  },
)
Section.displayName = 'Section'

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, ...props }, ref) => (
  <div className={cn('container', className)} ref={ref} {...props} />
))
Container.displayName = 'Container'

export { Container, Section }
