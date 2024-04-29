import * as React from 'preact/compat'
import * as LabelPrimitive from '../../deps/@radix-ui/react-label.ts'
import * as AltLabelPrimitive from "../../lib/components/label.d.ts"
import { VariantProps, cva } from '../../deps/class-variance-authority.ts'

import { cn } from '../../lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const Label = React.forwardRef<
  ElementRef<typeof AltLabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltLabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
