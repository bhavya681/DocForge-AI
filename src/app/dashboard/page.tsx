import {
  BookOpen,
  FileText,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockGenerations, mockRepositories } from "@/lib/data";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Dashboard"
        description="Overview of your documentation workspace"
      />

      <div className="p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Repositories"
            value={4}
            change="+1 this month"
            icon={GitBranch}
            trend="up"
          />
          <StatsCard
            title="Documents Generated"
            value={41}
            change="+12 this week"
            icon={FileText}
            trend="up"
          />
          <StatsCard
            title="API Endpoints Documented"
            value={156}
            change="Across all repos"
            icon={BookOpen}
            trend="neutral"
          />
          <StatsCard
            title="AI Queries"
            value={89}
            change="+23 this week"
            icon={Sparkles}
            trend="up"
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Generations</h2>
              <Link
                href="/dashboard/repositories"
                className="text-sm text-electric-light hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {mockGenerations.map((gen) => (
                <div
                  key={gen.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <div>
                    <div className="font-medium">{gen.type}</div>
                    <div className="text-sm text-muted">
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
          </GlassCard>

          <GlassCard>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Repositories</h2>
              <Button size="sm" variant="secondary">
                Connect New
              </Button>
            </div>
            <div className="space-y-3">
              {mockRepositories.slice(0, 4).map((repo) => (
                <div
                  key={repo.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-medium">
                      {repo.language.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium">{repo.name}</div>
                      <div className="text-sm text-muted">
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
          </GlassCard>
        </div>

        <GlassCard className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold">AI Codebase Chat</h2>
              <p className="mt-1 text-sm text-muted">
                Ask questions about your repositories using natural language.
              </p>
            </div>
            <Button href="/dashboard/studio">Open Chat</Button>
          </div>
          <div className="mt-4 rounded-lg border border-white/5 bg-black/50 p-4">
            <p className="text-sm text-muted">
              <span className="text-electric-light">You:</span> Where is
              authentication implemented in acme-api?
            </p>
            <p className="mt-2 text-sm">
              <span className="text-emerald-400">DocForge:</span> Authentication
              is implemented in{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-electric-light">
                src/auth/
              </code>
              . The main JWT middleware is in{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-electric-light">
                src/auth/middleware.ts
              </code>
              , and login/register endpoints are in{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-electric-light">
                src/routes/auth.ts
              </code>
              .
            </p>
          </div>
        </GlassCard>
      </div>
    </>
  );
}
