import React from "react";
import { type VariantProps } from "class-variance-authority";
import { ButtonClasses } from "./Button.styles";
import { UIBaseType } from "../utils";
import { IconVariants } from "../Icon";

type ButtonWithIcon =
| { icon?: IconVariants; prefixIcon?: never; suffixIcon?: never }
| { icon?: never; prefixIcon?: IconVariants; suffixIcon?: IconVariants };

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> &
  VariantProps<typeof ButtonClasses> &
  UIBaseType & ButtonWithIcon
