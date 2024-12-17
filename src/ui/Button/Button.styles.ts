import { cva } from "class-variance-authority";

const ButtonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "alternative",
] as const;

type ButtonVariantsType = (typeof ButtonVariants)[number];

const ButtonClasses = cva(["rounded", "transition-shadow", "relative", 'min-w-32', 'inline-flex', 'justify-center', 'items-center'], {
  variants: {
    variant: {
      primary: ["bg-brand-primary"],
      secondary: ["bg-white", "text-brand-primary"],
      alternative: ["bg-brand-alternative"],
      tertiary: ["after:bg-brand-primary", "after:content-''",  "after:absolute", "after:bottom-1", "after:left-0", "after:right-0", "after:h-[2px]", "after:m-auto", "after:transition-all", "after:duration-150", "hover:after:h-[3px]", "hover:active:after:h-[4px]"],
    },
    size: {
      sm: ["py-2", "px-6", "paragraph-p3-bold"],
      lg: ["py-3", "px-8", "paragraph-p2-bold"],

      /** The interaction between circles and variants works great, but having the prop here feels weird. */
      'lg-circle': ["rounded-full", "min-w-0", "w-10", "h-10", "px-0", "py-0", "inline-block", "text-[0px]"],
      'sm-circle': ["rounded-full", "min-w-0", "w-8", "h-8", "px-0", "py-0", "inline-block", "text-[0px]"],
    },
    withIcons: {
      true: ["gap-2"],
    },
    disabled: {
      false: null,
      true: ["pointer-events-none", 'hover:shadow-none', 'hover:active:shadow-none'],
    },
    loading: {
      true: ["pointer-events-none"],
    },
  },
  compoundVariants: [
    {
      variant: 'tertiary',
      size: ['lg-circle', 'sm-circle'],
      class: ["shadow-border-2", "hover:shadow-border-3", "hover:active:shadow-border-4"]
    },
    {
      variant: ['primary', 'alternative'],
      disabled: false,
      class: ['text-white', 'hover:shadow-overlay-light-40', 'hover:active:shadow-none'],
    },
    {
      variant: 'secondary',
      disabled: false,
      class: ["shadow-border-2", "hover:shadow-border-3", "hover:active:shadow-border-4"],
    },
    {
      variant: 'secondary',
      disabled: true,
      class: ['shadow-border-2-disabled'],
    },
    {
      variant: ['secondary', 'tertiary'],
      disabled: true,
      class: ['text-global-disabled', 'after:bg-brand-disabled']
    },
    {
      variant: ['primary', 'alternative'],
      disabled: true,
      class: ['bg-brand-disabled', 'text-global-disabled',],
    },
    {
      variant: 'tertiary',
      class: ["after:w-[calc(100%-4rem)]"] // This line breaks the extension's regexp for some reason so it's moved at the end of the file.
    }
  ],
  defaultVariants: {
    variant: "primary",
    disabled: false,
    size: "lg",
  },
});

export { ButtonClasses, type ButtonVariantsType, ButtonVariants };
