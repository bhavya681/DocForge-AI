"use client";

import { useState } from "react";
import {
  Download,
  Eye,
  Sparkles,
  Wand2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleMarkdown } from "@/lib/data";

export default function StudioPage() {
  const [content, setContent] = useState(sampleMarkdown);
  const [showPreview, setShowPreview] = useState(true);

  const suggestions = [
    "Add a troubleshooting section",
    "Include rate limiting documentation",
    "Add webhook endpoint examples",
    "Document error response codes",
  ];

  return (
    <>
      <DashboardHeader
        title="Documentation Studio"
        description="Edit, preview, and enhance your generated documentation"
        action={false}
      />

      <div className="flex h-[calc(100vh-89px)]">
        <div className="flex flex-1 flex-col border-r border-white/5">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <Badge variant="info">acme-api</Badge>
              <span className="text-sm text-muted">README.md</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                <Eye className="h-4 w-4" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <Button variant="secondary" size="sm">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button size="sm">Publish</Button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className={`flex flex-col ${showPreview ? "w-1/2" : "w-full"}`}>
              <div className="border-b border-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted">
                Editor
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 resize-none bg-transparent p-4 font-mono text-sm leading-relaxed focus:outline-none"
                spellCheck={false}
              />
            </div>

            {showPreview && (
              <div className="flex w-1/2 flex-col border-l border-white/5">
                <div className="border-b border-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted">
                  Live Preview
                </div>
                <div className="flex-1 overflow-auto p-6 prose prose-invert prose-sm max-w-none">
                  <PreviewContent content={content} />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="w-72 shrink-0 overflow-auto bg-surface p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-electric-light" />
            AI Suggestions
          </div>
          <div className="mt-4 space-y-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-sm transition-colors hover:border-electric/30 hover:bg-electric/5"
              >
                <Wand2 className="mb-2 h-4 w-4 text-electric-light" />
                {suggestion}
              </button>
            ))}
          </div>

          <GlassCard className="mt-6">
            <h3 className="text-sm font-medium">Quick Actions</h3>
            <div className="mt-3 space-y-2">
              <Button variant="secondary" size="sm" className="w-full justify-start">
                Regenerate Section
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start">
                Add API Endpoints
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start">
                Improve Clarity
              </Button>
            </div>
          </GlassCard>
        </aside>
      </div>
    </>
  );
}

function PreviewContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${i}`}
            className="overflow-x-auto rounded-lg bg-white/5 p-4 text-sm"
          >
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("|")) {
      const cells = line.split("|").filter(Boolean).map((c) => c.trim());
      if (cells.every((c) => c.match(/^[-:]+$/))) continue;
      tableRows.push(cells);
      inTable = true;
      if (i + 1 >= lines.length || !lines[i + 1]?.startsWith("|")) {
        elements.push(
          <table key={`table-${i}`} className="w-full text-sm">
            <thead>
              <tr>
                {tableRows[0]?.map((cell, j) => (
                  <th key={j} className="border border-white/10 px-3 py-2 text-left">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-white/10 px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-2xl font-bold">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-6 text-xl font-semibold">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-4 text-lg font-medium">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-2 border-electric pl-4 text-muted italic"
        >
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("`") && line.endsWith("`") && !line.includes(" ")) {
      elements.push(
        <code key={i} className="rounded bg-white/5 px-1.5 py-0.5 text-electric-light">
          {line.slice(1, -1)}
        </code>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-sm leading-relaxed text-white/80">
          {line}
        </p>
      );
    }
  }

  return <>{elements}</>;
}
