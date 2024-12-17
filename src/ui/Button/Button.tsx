import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonClasses } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { cn } from "../utils";
import { Icon } from "../Icon";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "lg", asChild = false, loading = false, children, icon, prefixIcon, suffixIcon, ...props },
    ref,
  ) => {
    const iconSize = size === 'lg' || size === 'lg-circle' ? 24 : 16

    const Comp = asChild ? Slot : "button";
    const Child = loading ? <Icon size={iconSize} variant="loading" /> : children;

    const PreIcon = (icon || prefixIcon) ? <Icon size={iconSize} variant={icon || prefixIcon} /> : null;
    const SufIcon = suffixIcon ? <Icon size={iconSize} variant={suffixIcon} /> : null;
    const withIcons = !loading && (!!icon || !!prefixIcon || !!suffixIcon);

    return (
      <Comp
        role="button"
        className={cn(ButtonClasses({ variant, size, loading, withIcons, ...props }), className)}
        ref={ref}
        {...props}
      >
        {!loading && PreIcon}
        {Child}
        {!loading && SufIcon}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, ButtonClasses };
