import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ampButtonVariants, type AmpButtonVariantProps } from "./tokens";

export interface AmpButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    AmpButtonVariantProps {
  asChild?: boolean;
}

/** Brand CTA button with fixed heights so CTAs never look irregular across pages. */
export const AmpButton = React.forwardRef<HTMLButtonElement, AmpButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(ampButtonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  },
);
AmpButton.displayName = "AmpButton";
