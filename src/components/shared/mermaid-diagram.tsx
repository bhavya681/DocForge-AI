"use client";

import { useEffect, useRef } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    async function renderDiagram() {
      if (!containerRef.current) return;

      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#0066ff",
          primaryTextColor: "#fafafa",
          primaryBorderColor: "#3385ff",
          lineColor: "#71717a",
          secondaryColor: "#111111",
          tertiaryColor: "#0a0a0a",
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      try {
        const { svg } = await mermaid.render(id, chart);
        if (mounted && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch {
        if (mounted && containerRef.current) {
          containerRef.current.innerHTML =
            '<p class="text-sm text-muted p-4">Unable to render diagram</p>';
        }
      }
    }

    renderDiagram();
    return () => {
      mounted = false;
    };
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label="Architecture diagram"
    />
  );
}
