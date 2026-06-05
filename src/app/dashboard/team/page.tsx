import {
  Mail,
  MoreHorizontal,
  Shield,
  UserPlus,
  Users,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { MetricStrip } from "@/components/dashboard/metric-strip";
import { Panel } from "@/components/ui/panel";
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
        breadcrumb="Workspace"
        description="Members, roles, and permissions"
      />

      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8 md:py-8">
        <MetricStrip
          metrics={[
            { label: "Members", value: 4, icon: Users },
            { label: "Repos shared", value: 4, icon: Users },
            { label: "Pending invites", value: 1, icon: Users },
          ]}
        />

        <Panel className="mt-8">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-[13px] font-medium">Members</h2>
            <Button size="sm">
              <UserPlus className="h-3.5 w-3.5" />
              Invite
            </Button>
          </div>

          <div className="hidden grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-5 py-2 text-[11px] font-medium uppercase tracking-wider text-muted md:grid">
            <span>Member</span>
            <span>Role</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="divide-y divide-border">
            {mockTeamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col gap-3 px-5 py-4 md:grid md:grid-cols-[1fr_auto_auto] md:items-center md:gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-[11px] font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium">{member.name}</div>
                    <div className="flex items-center gap-1 text-[12px] text-muted">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </div>
                  </div>
                </div>
                <Badge variant={roleColors[member.role] || "default"}>
                  <Shield className="mr-1 h-3 w-3" />
                  {member.role}
                </Badge>
                <div className="md:text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="mt-6 p-5">
          <h2 className="text-[13px] font-medium">Permissions</h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Role-based access across your workspace.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left font-medium text-muted">
                    Permission
                  </th>
                  {["Owner", "Admin", "Editor", "Viewer"].map((role) => (
                    <th
                      key={role}
                      className="pb-3 text-center font-medium text-muted"
                    >
                      {role}
                    </th>
                  ))}
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
                  <tr
                    key={permission.name}
                    className="border-b border-border"
                  >
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
        </Panel>
      </div>
    </>
  );
}
