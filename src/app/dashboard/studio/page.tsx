"use client";

import { useState } from "react";
import {
  Download,
  Eye,
  Sparkles,
  Wand2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Panel } from "@/components/ui/panel";
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
        title="Docs Studio"
        breadcrumb="Workspace"
        description="Edit, preview, and enhance generated documentation"
        action={false}
      />

      <div className="flex min-h-[calc(100dvh-8rem)] flex-col lg:h-[calc(100dvh-5.5rem)] lg:flex-row">
        <div className="flex min-h-[420px] flex-1 flex-col border-b border-border lg:min-h-0 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
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

          <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
            <div className={`flex min-h-[200px] flex-col lg:min-h-0 ${showPreview ? "lg:w-1/2" : "w-full"}`}>
              <div className="border-b border-border px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-muted">
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
              <div className="flex min-h-[200px] flex-col border-t border-border lg:min-h-0 lg:w-1/2 lg:border-l lg:border-t-0">
                <div className="border-b border-border px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-muted">
                  Preview
                </div>
                <div className="flex-1 overflow-auto p-4 prose prose-sm max-w-none sm:p-6 dark:prose-invert">
                  <PreviewContent content={content} />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="hidden w-64 shrink-0 overflow-auto border-l border-border bg-background p-4 lg:block">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <Sparkles className="h-4 w-4 text-electric-light" />
            AI Suggestions
          </div>
          <div className="mt-4 space-y-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="w-full cursor-pointer rounded-md border border-border p-3 text-left text-[13px] transition-colors duration-200 hover:border-electric/30 hover:bg-electric/5"
              >
                <Wand2 className="mb-2 h-4 w-4 text-electric-light" />
                {suggestion}
              </button>
            ))}
          </div>

          <Panel className="mt-6 p-4">
            <h3 className="text-[13px] font-medium">Quick actions</h3>
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
          </Panel>
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
            className="overflow-x-auto rounded-lg bg-subtle p-4 text-sm"
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
                  <th key={j} className="border border-border px-3 py-2 text-left">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-3 py-2">
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
        <code key={i} className="rounded bg-subtle px-1.5 py-0.5 text-electric-light">
          {line.slice(1, -1)}
        </code>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-sm leading-relaxed text-foreground/80">
          {line}
        </p>
      );
    }
  }

  return <>{elements}</>;
}
