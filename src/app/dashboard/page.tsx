import {
  BookOpen,
  FileText,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { MetricStrip } from "@/components/dashboard/metric-strip";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockGenerations, mockRepositories } from "@/lib/data";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Overview"
        breadcrumb="Workspace"
        description="Documentation activity across your repositories"
      />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:px-8 md:py-8">
        <MetricStrip
          metrics={[
            {
              label: "Repositories",
              value: 4,
              detail: "+1 this month",
              icon: GitBranch,
              trend: "up",
            },
            {
              label: "Documents",
              value: 41,
              detail: "+12 this week",
              icon: FileText,
              trend: "up",
            },
            {
              label: "API Endpoints",
              value: 156,
              detail: "Across all repos",
              icon: BookOpen,
              trend: "neutral",
            },
            {
              label: "AI Queries",
              value: 89,
              detail: "+23 this week",
              icon: Sparkles,
              trend: "up",
            },
          ]}
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Panel className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[13px] font-medium">Recent generations</h2>
              <Link
                href="/dashboard/repositories"
                className="text-[12px] text-electric-light transition-colors hover:text-foreground"
              >
                View all
              </Link>
            </div>
            <div className="divide-y divide-border">
              {mockGenerations.map((gen) => (
                <div
                  key={gen.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <div className="text-[13px] font-medium">{gen.type}</div>
                    <div className="text-[12px] text-muted">
                      {gen.repo} · {gen.time}
                    </div>
                  </div>
                  <Badge
                    variant={
                      gen.status === "completed" ? "success" : "warning"
                    }
                  >
                    {gen.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[13px] font-medium">Repositories</h2>
              <Button size="sm" variant="secondary">
                Connect
              </Button>
            </div>
            <div className="divide-y divide-border">
              {mockRepositories.slice(0, 4).map((repo) => (
                <div
                  key={repo.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border font-mono text-[10px]">
                      {repo.language.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium">{repo.name}</div>
                      <div className="text-[12px] text-muted">
                        {repo.provider} · {repo.docsCount} docs
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={repo.status === "synced" ? "success" : "warning"}
                  >
                    {repo.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel className="mt-6 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[13px] font-medium">AI Codebase Chat</h2>
              <p className="mt-0.5 text-[12px] text-muted">
                Ask questions about your repositories in natural language.
              </p>
            </div>
            <Button href="/dashboard/studio" size="sm" variant="secondary">
              Open chat
            </Button>
          </div>
          <div className="mt-4 rounded-md border border-border bg-code p-4 font-mono text-[12px] leading-relaxed">
            <p className="text-muted">
              <span className="text-electric-light">you</span> → Where is
              authentication implemented in acme-api?
            </p>
            <p className="mt-2">
              <span className="text-emerald-400">docforge</span> → Auth lives in{" "}
              <code className="text-electric-light">src/auth/</code>. JWT
              middleware:{" "}
              <code className="text-electric-light">src/auth/middleware.ts</code>
              . Routes:{" "}
              <code className="text-electric-light">src/routes/auth.ts</code>.
            </p>
          </div>
        </Panel>
      </div>
    </>
  );
}
