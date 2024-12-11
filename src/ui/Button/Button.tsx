import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonClasses } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { cn } from "../utils";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "lg", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        role="button"
        className={cn(ButtonClasses({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, ButtonClasses };
