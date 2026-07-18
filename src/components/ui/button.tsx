import * as React from "react";
import { cn } from "../../lib";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "icon";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button ref={ref} className={cn("button", `button--${variant}`, `button--${size}`, className)} {...props} />
  )
);
Button.displayName = "Button";
