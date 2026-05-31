import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "neutral",
}: StatsCardProps) {
  return (
    <GlassCard>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted">{title}</p>
          <p className="mt-2 text-3xl font-bold">{value}</p>
          {change && (
            <p
              className={cn(
                "mt-1 text-xs",
                trend === "up" && "text-emerald-400",
                trend === "down" && "text-red-400",
                trend === "neutral" && "text-muted"
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10">
          <Icon className="h-5 w-5 text-electric-light" />
        </div>
      </div>
    </GlassCard>
  );
}
