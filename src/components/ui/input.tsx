import { forwardRef, type InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const inputVariants = cva(
  'flex w-full rounded-lg border border-gray-300 bg-white text-gray-900 shadow-xs placeholder:text-gray-500 focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-500/25 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-50 aria-invalid:border-error-300 aria-invalid:ring-error-500/25 aria-invalid:placeholder:text-error-500',
  {
    variants: {
      padding: {
        sm: 'h-10 px-3 py-2',
        md: 'h-11 px-3.5 py-2.5',
      },
    },
    defaultVariants: {},
  },
)

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, padding, ...props }, ref) => {
  return <input className={cn(inputVariants({ padding }), className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }
