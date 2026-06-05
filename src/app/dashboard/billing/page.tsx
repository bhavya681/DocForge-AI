import { Check, CreditCard } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data";

export default function BillingPage() {
  const currentPlan = pricingPlans[1];

  return (
    <>
      <DashboardHeader
        title="Billing"
        breadcrumb="Workspace"
        description="Subscription and usage"
        action={false}
      />

      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8 md:py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Panel className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="info">Current plan</Badge>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {currentPlan.name}
                  </h2>
                  <p className="mt-1 text-[13px] text-muted">
                    {currentPlan.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">
                    ${currentPlan.price}
                  </div>
                  <div className="text-[12px] text-muted">/month</div>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="secondary" size="sm">
                  Change plan
                </Button>
                <Button variant="ghost" size="sm">
                  Cancel
                </Button>
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-[13px] font-medium">Usage this month</h2>
              <div className="mt-5 space-y-5">
                {[
                  { label: "Repositories", used: 7, limit: 10 },
                  { label: "AI Queries", used: 89, limit: 500 },
                  { label: "Generations", used: 41, limit: 100 },
                  { label: "Team Members", used: 4, limit: 10 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[13px]">
                      <span>{item.label}</span>
                      <span className="text-muted">
                        {item.used} / {item.limit}
                      </span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-subtle">
                      <div
                        className="h-full rounded-full bg-electric transition-all duration-200"
                        style={{
                          width: `${Math.min((item.used / item.limit) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-[13px] font-medium">Billing history</h2>
              <div className="mt-4 divide-y divide-border">
                {[
                  { date: "May 1, 2026", amount: "$29.00", status: "Paid" },
                  { date: "Apr 1, 2026", amount: "$29.00", status: "Paid" },
                  { date: "Mar 1, 2026", amount: "$29.00", status: "Paid" },
                ].map((invoice) => (
                  <div
                    key={invoice.date}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <div className="text-[13px] font-medium">
                        {invoice.date}
                      </div>
                      <div className="text-[12px] text-muted">
                        Pro Plan — Monthly
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[13px] font-medium">
                        {invoice.amount}
                      </span>
                      <Badge variant="success">{invoice.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="space-y-6">
            <Panel className="p-5">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-electric-light" />
                <h3 className="text-[13px] font-medium">Payment method</h3>
              </div>
              <div className="mt-4 rounded-md border border-border p-4">
                <div className="text-[13px] font-medium">
                  Visa ending in 4242
                </div>
                <div className="text-[12px] text-muted">Expires 12/2027</div>
              </div>
              <Button variant="secondary" size="sm" className="mt-4 w-full">
                Update payment
              </Button>
            </Panel>

            <Panel className="border-electric/30 bg-electric/[0.04] p-5">
              <h3 className="text-[13px] font-medium">Upgrade to Team</h3>
              <p className="mt-2 text-[12px] text-muted">
                Unlimited repos, version tracking, and SSO.
              </p>
              <ul className="mt-4 space-y-2 text-[13px]">
                {pricingPlans[2].features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-electric" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full" size="sm">
                Upgrade — $79/mo
              </Button>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}
