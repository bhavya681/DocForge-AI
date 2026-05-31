import {
  Mail,
  MoreHorizontal,
  Shield,
  UserPlus,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockTeamMembers } from "@/lib/data";

const roleColors: Record<string, "default" | "success" | "warning" | "info"> = {
  Owner: "info",
  Admin: "success",
  Editor: "warning",
  Viewer: "default",
};

export default function TeamPage() {
  return (
    <>
      <DashboardHeader
        title="Team Workspace"
        description="Manage members, roles, and permissions"
      />

      <div className="p-8">
        <div className="mb-8 grid gap-6 sm:grid-cols-3">
          <GlassCard>
            <div className="text-sm text-muted">Team Members</div>
            <div className="mt-2 text-3xl font-bold">4</div>
          </GlassCard>
          <GlassCard>
            <div className="text-sm text-muted">Repositories Shared</div>
            <div className="mt-2 text-3xl font-bold">4</div>
          </GlassCard>
          <GlassCard>
            <div className="text-sm text-muted">Pending Invites</div>
            <div className="mt-2 text-3xl font-bold">1</div>
          </GlassCard>
        </div>

        <GlassCard>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Members</h2>
            <Button size="sm">
              <UserPlus className="h-4 w-4" />
              Invite Member
            </Button>
          </div>

          <div className="space-y-2">
            {mockTeamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/20 text-sm font-medium text-electric-light">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={roleColors[member.role] || "default"}>
                    <Shield className="mr-1 h-3 w-3" />
                    {member.role}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mt-8">
          <h2 className="text-lg font-semibold">Permissions</h2>
          <p className="mt-1 text-sm text-muted">
            Configure what each role can access in your workspace.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-3 text-left font-medium text-muted">
                    Permission
                  </th>
                  <th className="pb-3 text-center font-medium text-muted">
                    Owner
                  </th>
                  <th className="pb-3 text-center font-medium text-muted">
                    Admin
                  </th>
                  <th className="pb-3 text-center font-medium text-muted">
                    Editor
                  </th>
                  <th className="pb-3 text-center font-medium text-muted">
                    Viewer
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "View documentation", access: [true, true, true, true] },
                  { name: "Edit documentation", access: [true, true, true, false] },
                  { name: "Generate docs", access: [true, true, true, false] },
                  { name: "Manage repositories", access: [true, true, false, false] },
                  { name: "Invite members", access: [true, true, false, false] },
                  { name: "Billing access", access: [true, false, false, false] },
                ].map((permission) => (
                  <tr key={permission.name} className="border-b border-white/5">
                    <td className="py-3">{permission.name}</td>
                    {permission.access.map((hasAccess, i) => (
                      <td key={i} className="py-3 text-center">
                        {hasAccess ? (
                          <span className="text-emerald-400">✓</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </>
  );
}
