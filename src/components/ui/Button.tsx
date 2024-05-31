import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariant = cva(cn(""), {
  variants: {
    variant: {
      primary: cn(),
      base: cn()
    },
    size: {
      small: cn(),
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
