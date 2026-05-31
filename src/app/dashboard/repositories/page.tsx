import {
  ExternalLink,
  GitBranch,
  MoreHorizontal,
  RefreshCw,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockRepositories } from "@/lib/data";

export default function RepositoriesPage() {
  return (
    <>
      <DashboardHeader
        title="Repositories"
        description="Manage connected Git repositories"
      />

      <div className="p-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="sm">
            All Providers
          </Button>
          <Button variant="ghost" size="sm">
            GitHub
          </Button>
          <Button variant="ghost" size="sm">
            GitLab
          </Button>
          <Button variant="ghost" size="sm">
            Bitbucket
          </Button>
        </div>

        <div className="grid gap-4">
          {mockRepositories.map((repo) => (
            <GlassCard key={repo.id} hover className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10">
                  <GitBranch className="h-6 w-6 text-electric-light" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{repo.name}</h3>
                    <Badge>{repo.language}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {repo.provider} · Last generated {repo.lastGenerated} ·{" "}
                    {repo.docsCount} documents
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={repo.status === "synced" ? "success" : "warning"}>
                  {repo.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </>
  );
}
