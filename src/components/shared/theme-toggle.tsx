"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

const options = [
  {
    value: "light" as const,
    icon: Sun,
    label: "Light",
    activeIcon: "text-amber-600 dark:text-amber-400",
    activeText: "text-amber-700 dark:text-amber-300",
  },
  {
    value: "dark" as const,
    icon: Moon,
    label: "Dark",
    activeIcon: "text-electric dark:text-electric-light",
    activeText: "text-electric-dark dark:text-electric-light",
  },
];

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-lg border border-border bg-surface-elevated p-0.5 shadow-sm",
        className
      )}
      role="radiogroup"
      aria-label="Theme"
    >
      {options.map(({ value, icon: Icon, label, activeIcon, activeText }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} mode`}
            onClick={() => setTheme(value)}
            className={cn(
              "relative z-10 flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors duration-200",
              active
                ? "font-medium"
                : "text-muted hover:text-foreground"
            )}
          >
            <Icon
              className={cn(
                "h-3.5 w-3.5 shrink-0",
                active ? activeIcon : "text-current"
              )}
              strokeWidth={2}
            />
            <span
              className={cn(
                "text-[11px] font-medium leading-none",
                active ? activeText : "text-current"
              )}
            >
              {label}
            </span>
          </button>
        );
      })}
      <motion.span
        layoutId="theme-toggle-pill"
        className="absolute bottom-0.5 top-0.5 rounded-md bg-subtle ring-1 ring-border"
        style={{
          width: "calc(50% - 2px)",
          left: theme === "light" ? 2 : "calc(50%)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />
    </div>
  );
}
