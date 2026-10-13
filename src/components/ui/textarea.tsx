import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "block min-h-36 w-full min-w-0 border border-input bg-background px-3.5 py-3 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground hover:border-foreground focus-visible:border-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
