"use client";

import { useState } from "react";
import {
  Database,
  Download,
  GitBranch,
  Layers,
  Share2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MermaidDiagram } from "@/components/shared/mermaid-diagram";
import { sampleMermaid } from "@/lib/data";

const diagramTypes = [
  { id: "system", label: "System Architecture", icon: Layers },
  { id: "dataflow", label: "Data Flow", icon: GitBranch },
  { id: "components", label: "Components", icon: Database },
];

export default function ArchitecturePage() {
  const [activeType, setActiveType] = useState("system");

  return (
    <>
      <DashboardHeader
        title="Architecture Viewer"
        breadcrumb="Workspace"
        description="System diagrams generated from your codebase"
        action={false}
      />

      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8 md:py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {diagramTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={activeType === type.id ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setActiveType(type.id)}
                >
                  <Icon className="h-4 w-4" />
                  {type.label}
                </Button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="h-4 w-4" />
              Export SVG
            </Button>
            <Button size="sm">Regenerate</Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Panel className="min-h-[400px] overflow-auto p-6 md:min-h-[500px] md:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="info">acme-api</Badge>
                <span className="text-sm text-muted">System Architecture</span>
              </div>
              <MermaidDiagram
                chart={sampleMermaid}
                className="flex justify-center [&_svg]:max-w-full"
              />
            </Panel>
          </div>

          <div className="space-y-4">
            <Panel className="p-5">
              <h3 className="font-semibold">Diagram Details</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted">Repository</dt>
                  <dd className="font-medium">acme-api</dd>
                </div>
                <div>
                  <dt className="text-muted">Generated</dt>
                  <dd className="font-medium">2 hours ago</dd>
                </div>
                <div>
                  <dt className="text-muted">Services Detected</dt>
                  <dd className="font-medium">4</dd>
                </div>
                <div>
                  <dt className="text-muted">Data Stores</dt>
                  <dd className="font-medium">2</dd>
                </div>
              </dl>
            </Panel>

            <Panel className="p-5">
              <h3 className="text-[13px] font-medium">Detected components</h3>
              <div className="mt-4 space-y-2">
                {[
                  "Auth Service",
                  "User Service",
                  "Billing Service",
                  "API Gateway",
                  "PostgreSQL",
                  "Redis Cache",
                ].map((component) => (
                  <div
                    key={component}
                    className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-[13px]"
                  >
                    {component}
                    <Badge variant="success">Detected</Badge>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="p-5">
              <h3 className="text-[13px] font-medium">Export</h3>
              <div className="mt-4 space-y-2">
                <Button variant="secondary" size="sm" className="w-full">
                  Export as SVG
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Export as PNG
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Copy Mermaid Code
                </Button>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}
