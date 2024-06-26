import * as React from 'preact/compat'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as AltAlertDialogPrimitive from "../../lib/components/alert-dialog.d.ts"

import { cn } from '../../lib/utils.ts'
import { buttonVariants } from './button.tsx'

import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"


const AlertDialog = AlertDialogPrimitive.Root


const AlertDialogTrigger = AlertDialogPrimitive.Trigger


const AlertDialogPortal = ({ className, children, ...props }: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">{children}</div>
  </AlertDialogPrimitive.Portal>
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName


const AlertDialogOverlay = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in',
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName


const AlertDialogContent = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName


const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'


const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'


const AlertDialogTitle = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName


const AlertDialogDescription = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName


const AlertDialogAction = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName


const AlertDialogCancel = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName


export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
