import { HTMLAttributes, forwardRef } from "react";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const headingVariants = cva(
  "text-black dark:text-white lg:text-left font-extrabold leading-light tracking-lighter",
  {
    variants: {
      size: {
        default: "text-3xl md:text-4xl lg:text-4xl",
        lg: "text-3xl md:text-4xl lg:text-4xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargrHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, LargrHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return <h1 ref={ref} {...props} className={cn(headingVariants({size, className}))}>{children} </h1>
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
