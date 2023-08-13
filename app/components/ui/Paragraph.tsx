import { FC, HTMLAttributes, forwardRef } from "react";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const paragraphVaraints = cva(
  "max-w-rose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVaraints> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVaraints({ size, className }))}
      >
        {children}
      </p>
    );
  }
);
Paragraph.displayName = "Paragraph";

export default Paragraph;
// to display the forwardRef() function we have to pass the displayName as a debugging props so it can idetnify the exporting components
// forwardRef mostly used in class based components because it require the render function before completing the code
