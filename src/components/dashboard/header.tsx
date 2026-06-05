"use client";

import { Bell, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  action?: boolean;
  actionLabel?: string;
}

export function DashboardHeader({
  title,
  description,
  breadcrumb,
  action = true,
  actionLabel = "Connect repo",
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex flex-col gap-4 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-5">
      <div className="min-w-0">
        {breadcrumb && (
          <p className="mb-1 text-[11px] text-muted">{breadcrumb}</p>
        )}
        <h1 className="truncate text-lg font-medium tracking-tight sm:text-xl">
          {title}
        </h1>
        {description && (
          <p className="mt-0.5 text-[13px] text-muted">{description}</p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <div className="relative hidden lg:block">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="h-8 w-56 rounded-md border border-border bg-subtle pl-8 pr-3 text-[13px] placeholder:text-muted transition-colors duration-200 focus:border-electric/40 focus:outline-none"
          />
        </div>
        <ThemeToggle compact className="md:hidden" />
        <button
          type="button"
          className="relative cursor-pointer rounded-md p-2 text-muted transition-colors duration-200 hover:bg-subtle hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-electric" />
        </button>
        {action && (
          <Button size="sm">
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{actionLabel}</span>
            <span className="sm:hidden">Add</span>
          </Button>
        )}
      </div>
    </header>
  );
}
