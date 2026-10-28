import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "gold" | "green" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  gold: [
    "bg-[var(--color-gold)] text-white border border-[var(--color-gold)]",
    "hover:bg-[var(--color-gold-dark)] hover:border-[var(--color-gold-dark)]",
    "active:scale-[0.98]",
  ].join(" "),
  green: [
    "bg-[var(--color-green)] text-white border border-[var(--color-green)]",
    "hover:bg-[var(--color-green-dark)] hover:border-[var(--color-green-dark)]",
    "active:scale-[0.98]",
  ].join(" "),
  outline: [
    "bg-transparent text-white border border-white/60",
    "hover:bg-white/10 hover:border-white",
    "active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-espresso)] border border-transparent",
    "hover:bg-[var(--color-cream-dark)]",
    "active:scale-[0.98]",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-none transition-all duration-200 ease-out cursor-pointer select-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "gold",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
