"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ docforge connect github.com/acme/api", delay: 0 },
  { text: "✓ Repository connected", delay: 800, color: "text-emerald-400" },
  { text: "$ docforge analyze --deep", delay: 1400 },
  { text: "  Analyzing folder structure...", delay: 2000, color: "text-muted" },
  { text: "  Scanning 847 files...", delay: 2600, color: "text-muted" },
  { text: "  Detecting API endpoints (24 found)", delay: 3200, color: "text-muted" },
  { text: "  Mapping database schema...", delay: 3800, color: "text-muted" },
  { text: "✓ Analysis complete", delay: 4400, color: "text-emerald-400" },
  { text: "$ docforge generate --all", delay: 5000 },
  { text: "  ✓ README.md", delay: 5600, color: "text-electric-light" },
  { text: "  ✓ API Reference", delay: 6000, color: "text-electric-light" },
  { text: "  ✓ Architecture Diagram", delay: 6400, color: "text-electric-light" },
  { text: "  ✓ Deployment Guide", delay: 6800, color: "text-electric-light" },
  { text: "✓ Documentation generated in 47s", delay: 7400, color: "text-emerald-400" },
];

export function TerminalPreview() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers = lines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay)
    );

    const loopTimer = setTimeout(() => {
      setVisibleLines(0);
    }, 9000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
    };
  }, [visibleLines === 0]);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const timer = setTimeout(() => setVisibleLines(0), 2000);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted">docforge — zsh</span>
      </div>
      <div className="space-y-1 p-4 font-mono text-sm leading-relaxed">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={line.color || "text-white/90"}>
            {line.text}
          </div>
        ))}
        {showCursor && visibleLines < lines.length && (
          <div className="text-white/90 cursor-blink">&nbsp;</div>
        )}
      </div>
    </div>
  );
}
