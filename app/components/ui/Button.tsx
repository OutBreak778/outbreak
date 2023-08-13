import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import { LuLoader2 } from "react-icons/lu";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-small font-medium transition-color fous:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 daek:focus:ring-slate-400 disabled:pointer-event-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-900 dark:border-slate-700",
        ghost:
          "bg-transparent rounded hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state-open]:bg-transparent ",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4  mr-3",
        sm: "h-9 px-2 rounded-md mr-3",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, children, isLoading, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;