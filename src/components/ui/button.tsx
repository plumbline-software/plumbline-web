import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

// Plumbline buttons: square, 48px, ink on paper. Hover changes fill only, no movement.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-3 border text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-ink-2",
        outline: "border-foreground bg-background text-foreground hover:bg-accent",
        paper: "border-background bg-background text-foreground hover:bg-accent",
        link: "border-transparent px-0 font-semibold underline decoration-input underline-offset-[0.22em] hover:decoration-foreground",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-11 px-3 sm:h-10 sm:px-5",
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
