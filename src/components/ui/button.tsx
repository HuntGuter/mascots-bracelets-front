import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 bg-clip-padding text-sm font-semibold whitespace-nowrap uppercase tracking-wide transition-all outline-none select-none [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35 active:not-aria-[haspopup]:translate-x-1 active:not-aria-[haspopup]:translate-y-1 active:not-aria-[haspopup]:shadow-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-foreground bg-primary text-primary-foreground shadow-[6px_6px_0_0_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[8px_8px_0_0_var(--foreground)] [a]:hover:bg-primary/90",
        outline:
          "border-foreground bg-background text-foreground shadow-[6px_6px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/15 hover:shadow-[8px_8px_0_0_var(--primary)] aria-expanded:bg-primary/15 aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "border-foreground bg-background text-foreground shadow-[6px_6px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/15 hover:shadow-[8px_8px_0_0_var(--primary)] aria-expanded:bg-primary/15 aria-expanded:text-foreground",
        ghost:
          "border-transparent bg-transparent normal-case tracking-normal shadow-none [clip-path:none] hover:bg-primary/18 hover:text-foreground aria-expanded:bg-primary/18 aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "border-destructive bg-destructive/10 text-destructive shadow-[6px_6px_0_0_var(--destructive)] hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "border-transparent bg-transparent normal-case tracking-normal text-foreground shadow-none [clip-path:none] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-13 gap-2 px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
