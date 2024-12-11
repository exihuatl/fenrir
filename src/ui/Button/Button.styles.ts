import { cva } from "class-variance-authority";

const ButtonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "alternative",
] as const;

type ButtonVariantsType = (typeof ButtonVariants)[number];

const ButtonClasses = cva(["rounded", "transition-shadow", "relative"], {
  variants: {
    variant: {
      primary: ["bg-brand-primary", "text-white", "hover:shadow-overlay-light-40", "hover:active:shadow-none"],
      secondary: ["bg-white", "text-brand-primary", "shadow-border-2", "hover:shadow-border-3", "hover:active:shadow-border-4"],
      alternative: ["bg-brand-alternative", "text-white", "hover:shadow-overlay-light-40", "hover:active:shadow-none"],
      tertiary: ["text-brand-primary", "after:content-''", "after:absolute", "after:bottom-1", "after:left-0", "after:right-0", "after:h-[2px]", "after:m-auto", "after:w-[calc(100%-4rem)]", "after:bg-brand-primary", "after:transition-all", "after:duration-150", "hover:after:h-[3px]", "hover:active:after:h-[4px]"],
    },
    size: {
      sm: ["py-2", "px-6", "paragraph-p3-bold"],
      lg: ["py-3", "px-8", "paragraph-p2-bold"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

export { ButtonClasses, type ButtonVariantsType, ButtonVariants };
