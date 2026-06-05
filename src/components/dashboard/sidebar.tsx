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
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/repositories", label: "Repositories", icon: BookOpen },
  { href: "/dashboard/studio", label: "Docs Studio", icon: PenTool },
  { href: "/dashboard/architecture", label: "Architecture", icon: Network },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] flex-col border-r border-border bg-background md:flex">
        <div className="flex h-14 items-center border-b border-border px-4">
          <Logo size="sm" showWordmark={theme === "light"} />
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
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
                  "relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
                  isActive
                    ? "bg-subtle text-foreground"
                    : "text-muted hover:bg-subtle hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r bg-electric" />
                )}
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[11px] text-muted">Theme</span>
            <ThemeToggle compact />
          </div>
          <Link
            href="#"
            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-muted transition-colors duration-200 hover:bg-subtle hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <div className="mt-3 rounded-md border border-border px-3 py-3">
            <div className="text-[11px] text-muted">Pro Plan</div>
            <div className="mt-1 text-[13px] font-medium">7 / 10 repos</div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-subtle">
              <div className="h-full w-[70%] rounded-full bg-electric transition-all duration-300" />
            </div>
          </div>
        </div>
      </aside>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-border bg-background px-2 py-2 md:hidden"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        {navItems.slice(0, 5).map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-[44px] flex-col items-center gap-0.5 rounded-md px-2 py-1.5 transition-colors duration-200",
                isActive ? "text-electric-light" : "text-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[10px]">{item.label.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
