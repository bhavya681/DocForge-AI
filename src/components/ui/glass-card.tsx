import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6",
        hover && "transition-all duration-300 hover:border-white/12 hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}
