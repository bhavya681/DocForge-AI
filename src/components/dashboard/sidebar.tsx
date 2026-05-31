"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CreditCard,
  LayoutDashboard,
  Network,
  PenTool,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/repositories", label: "Repositories", icon: BookOpen },
  { href: "/dashboard/studio", label: "Documentation Studio", icon: PenTool },
  { href: "/dashboard/architecture", label: "Architecture Center", icon: Network },
  { href: "/dashboard/team", label: "Team Workspace", icon: Users },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/5 bg-surface">
      <div className="flex h-16 items-center gap-2 border-b border-white/5 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold">
            DocForge<span className="text-electric"> AI</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-electric/10 text-electric-light"
                  : "text-muted hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/5 p-4">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/5 hover:text-white"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-3">
          <div className="text-xs text-muted">Pro Plan</div>
          <div className="mt-1 text-sm font-medium">7 / 10 repos used</div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[70%] rounded-full bg-electric" />
          </div>
        </div>
      </div>
    </aside>
  );
}
