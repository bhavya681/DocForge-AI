"use client";

import { Bell, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  action?: boolean;
}

export function DashboardHeader({
  title,
  description,
  action = true,
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-white/5 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-64 rounded-lg border border-white/10 bg-white/5 pl-9 pr-4 text-sm placeholder:text-muted focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/50"
          />
        </div>
        <button className="relative rounded-lg p-2 text-muted hover:bg-white/5 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-electric" />
        </button>
        {action && (
          <Button size="sm">
            <Plus className="h-4 w-4" />
            Connect Repo
          </Button>
        )}
      </div>
    </header>
  );
}
