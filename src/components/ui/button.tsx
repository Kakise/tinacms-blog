import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-main border-2 border-slate-200 shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-slate-800",
        clicked: "text-main-foreground bg-main border-2 border-slate-200 translate-x-boxShadowX translate-y-boxShadowY shadow-none dark:border-slate-800",
        noShadow: "text-main-foreground bg-main border-2 border-slate-200 dark:border-slate-800",
        neutral:
          "bg-secondary-background text-slate-950 border-2 border-slate-200 shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:text-slate-50 dark:border-slate-800",
        reverse:
          "text-main-foreground bg-main border-2 border-slate-200 hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow dark:border-slate-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
