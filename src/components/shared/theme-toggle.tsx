"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, setTheme, toggleTheme } = useTheme();

  if (compact) {
    const Icon = theme === "dark" ? Moon : Sun;
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className={cn(
          "rounded-md p-2 text-muted transition-colors duration-200 hover:bg-subtle hover:text-foreground",
          className
        )}
      >
        <Icon className="h-4 w-4" />
      </button>
    );
  }

  const options = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
  ];

  return (
    <div
      className={cn(
        "relative flex items-center rounded-md border border-border bg-subtle p-0.5",
        className
      )}
      role="radiogroup"
      aria-label="Theme"
    >
      {options.map(({ value, icon: Icon, label }) => {
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
              "relative z-10 flex items-center gap-1.5 rounded-[5px] px-2.5 py-1.5 text-[12px] transition-colors duration-200",
              active ? "text-foreground" : "text-muted hover:text-foreground"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
      <motion.span
        layoutId="theme-pill"
        className="absolute inset-y-0.5 rounded-[5px] border border-border bg-surface-elevated"
        style={{
          width: "calc(50% - 2px)",
          left: theme === "light" ? "2px" : "calc(50%)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </div>
  );
}
