import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariant = cva(cn("transition-all duration-300 ease-in-out"), {
  variants: {
    variant: {
      primary: cn("bg-primary text-white hover:bg-primary/90"),
      base: cn()
    },
    size: {
      small: cn("text-sm px-2 py-1"),
      medium: cn(),
      large: cn()
    }
  }
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariant({ variant, size }))}>
        <slot />
      </button>
    );
  }
);

Button.displayName = "@/components/ui/Button";

export { buttonVariant };
export default Button;
