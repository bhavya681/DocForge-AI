interface CodePreviewProps {
  title: string;
  lines: { text: string; color?: string }[];
  className?: string;
}

const colorMap: Record<string, string> = {
  "text-white": "text-foreground",
  "text-white/80": "text-foreground/80",
  "text-white/70": "text-foreground/70",
  "text-white/90": "text-foreground/90",
};

export function CodePreview({ title, lines, className }: CodePreviewProps) {
  return (
    <div
      className={`interactive-lift overflow-hidden rounded-lg border border-border bg-code ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <span className="ml-1 font-mono text-[11px] text-muted">{title}</span>
      </div>
      <div className="space-y-0.5 p-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={colorMap[line.color ?? ""] ?? line.color ?? "text-foreground/80"}
          >
            {line.text || "\u00A0"}
          </div>
        ))}
      </div>
    </div>
  );
}
