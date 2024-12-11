import React from "react";
import { type VariantProps } from "class-variance-authority";
import { ButtonClasses } from "./Button.styles";
import { UIBaseType } from "../utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonClasses> &
  UIBaseType;
