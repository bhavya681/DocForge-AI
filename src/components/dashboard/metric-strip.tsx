import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string | number;
  detail?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

interface MetricStripProps {
  metrics: Metric[];
}

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <div className="flex flex-wrap gap-8 border-b border-border pb-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label} className="flex items-start gap-3">
            <Icon className="mt-0.5 h-4 w-4 text-muted" />
            <div>
              <p className="text-[11px] text-muted">{metric.label}</p>
              <p className="text-xl font-semibold tracking-tight">
                {metric.value}
              </p>
              {metric.detail && (
                <p
                  className={cn(
                    "text-[11px]",
                    metric.trend === "up" && "text-emerald-400",
                    metric.trend === "down" && "text-red-400",
                    (!metric.trend || metric.trend === "neutral") && "text-muted"
                  )}
                >
                  {metric.detail}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
