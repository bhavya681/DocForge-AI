import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variants = {
  primary:
    "bg-electric text-white hover:bg-electric-light active:bg-electric-dark",
  secondary:
    "bg-subtle text-foreground border border-border hover:bg-subtle-hover hover:border-border-hover",
  ghost: "text-muted hover:text-foreground hover:bg-subtle",
  outline:
    "border border-electric/40 text-electric-light hover:bg-electric/10 hover:border-electric/60",
};

const sizes = {
  sm: "px-3 py-1.5 text-[13px]",
  md: "px-4 py-2 text-[13px]",
  lg: "px-5 py-2.5 text-sm",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium transition-all duration-200",
    "hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
    "disabled:opacity-50 disabled:pointer-events-none disabled:transform-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
