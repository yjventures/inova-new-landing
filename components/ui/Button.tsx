'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-links font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accentGradient text-white hover:shadow-lg hover:shadow-accentPurple/30 hover:scale-105",
        gradient: "bg-accentGradient text-white hover:shadow-lg hover:shadow-accentPurple/30 hover:scale-105",
        "purple-border": "border-2 border-accentPurple text-accentPurple hover:bg-accentPurple hover:text-white",
        ghost: "hover:bg-surfaceCard hover:text-textPrimary",
        link: "text-accentPurple underline-offset-4 hover:underline",
        "blue-border": "border-2 border-[#15A9D8] text-[#15A9D8] hover:bg-[#15A9D8] hover:text-white transition-colors duration-200",

      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

