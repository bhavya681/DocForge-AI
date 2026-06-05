import {
  ExternalLink,
  MoreHorizontal,
  RefreshCw,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockRepositories } from "@/lib/data";

export default function RepositoriesPage() {
  return (
    <>
      <DashboardHeader
        title="Repositories"
        breadcrumb="Workspace"
        description="Connected Git repositories"
      />

      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8 md:py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {["All", "GitHub", "GitLab", "Bitbucket"].map((filter, i) => (
            <Button
              key={filter}
              variant={i === 0 ? "secondary" : "ghost"}
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>

        <Panel>
          <div className="hidden grid-cols-[1fr_auto_auto_auto_auto] gap-4 border-b border-border px-5 py-3 text-[11px] font-medium uppercase tracking-wider text-muted md:grid">
            <span>Repository</span>
            <span>Provider</span>
            <span>Docs</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="divide-y divide-border">
            {mockRepositories.map((repo) => (
              <div
                key={repo.id}
                className="flex flex-col gap-3 px-5 py-4 transition-colors duration-200 hover:bg-subtle md:grid md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center md:gap-4"
              >
                <div>
                  <p className="text-[13px] font-medium">{repo.name}</p>
                  <p className="text-[12px] text-muted">
                    {repo.language} · Updated {repo.lastGenerated}
                  </p>
                </div>
                <span className="text-[13px] text-muted md:text-foreground">
                  {repo.provider}
                </span>
                <span className="text-[13px]">{repo.docsCount}</span>
                <Badge
                  variant={repo.status === "synced" ? "success" : "warning"}
                >
                  {repo.status}
                </Badge>
                <div className="flex items-center gap-1 md:justify-end">
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
