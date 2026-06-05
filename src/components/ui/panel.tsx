import { cn } from "@/lib/utils";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Panel({ children, className, hover = false }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface-elevated",
        hover &&
          "interactive-lift transition-colors duration-200 hover:border-border-hover hover:bg-subtle",
        className
      )}
    >
      {children}
    </div>
  );
}
