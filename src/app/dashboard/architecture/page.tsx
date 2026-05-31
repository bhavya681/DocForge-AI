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
import { GlassCard } from "@/components/ui/glass-card";
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
        title="Architecture Center"
        description="Visualize and export system architecture diagrams"
        action={false}
      />

      <div className="p-8">
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
            <GlassCard className="min-h-[500px] overflow-auto p-8">
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="info">acme-api</Badge>
                <span className="text-sm text-muted">System Architecture</span>
              </div>
              <MermaidDiagram
                chart={sampleMermaid}
                className="flex justify-center [&_svg]:max-w-full"
              />
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard>
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
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold">Detected Components</h3>
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
                    className="flex items-center justify-between rounded-lg border border-white/5 px-3 py-2 text-sm"
                  >
                    {component}
                    <Badge variant="success">Detected</Badge>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold">Export Options</h3>
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
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
}
