"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ docforge connect github.com/acme/api", delay: 0 },
  { text: "✓ Repository connected", delay: 800, color: "text-emerald-500 dark:text-emerald-400" },
  { text: "$ docforge analyze --deep", delay: 1400 },
  { text: "  Analyzing folder structure...", delay: 2000, color: "text-muted" },
  { text: "  Scanning 847 files...", delay: 2600, color: "text-muted" },
  { text: "  Detecting API endpoints (24 found)", delay: 3200, color: "text-muted" },
  { text: "  Mapping database schema...", delay: 3800, color: "text-muted" },
  { text: "✓ Analysis complete", delay: 4400, color: "text-emerald-500 dark:text-emerald-400" },
  { text: "$ docforge generate --all", delay: 5000 },
  { text: "  ✓ README.md", delay: 5600, color: "text-electric-light" },
  { text: "  ✓ API Reference", delay: 6000, color: "text-electric-light" },
  { text: "  ✓ Architecture Diagram", delay: 6400, color: "text-electric-light" },
  { text: "  ✓ Deployment Guide", delay: 6800, color: "text-electric-light" },
  { text: "✓ Documentation generated in 47s", delay: 7400, color: "text-emerald-500 dark:text-emerald-400" },
];

export function TerminalPreview() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(lines.length);
      return;
    }
    const timers = lines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion, visibleLines === 0]);

  useEffect(() => {
    if (reducedMotion || visibleLines < lines.length) return;
    const timer = setTimeout(() => setVisibleLines(0), 2000);
    return () => clearTimeout(timer);
  }, [visibleLines, reducedMotion]);

  return (
    <div className="interactive-lift overflow-hidden rounded-lg border border-border bg-terminal shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <div className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <span className="ml-1 font-mono text-[11px] text-muted">docforge — zsh</span>
      </div>
      <div className="min-h-[260px] space-y-0.5 p-4 font-mono text-[13px] leading-relaxed sm:min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={line.color || "text-foreground/80"}>
            {line.text}
          </div>
        ))}
        {!reducedMotion && visibleLines < lines.length && (
          <div className="text-foreground/80 cursor-blink">&nbsp;</div>
        )}
      </div>
    </div>
  );
}
