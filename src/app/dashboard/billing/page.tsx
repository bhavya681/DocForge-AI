import { Check, CreditCard, Zap } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data";

export default function BillingPage() {
  const currentPlan = pricingPlans[1];

  return (
    <>
      <DashboardHeader
        title="Billing"
        description="Manage your subscription and usage"
        action={false}
      />

      <div className="p-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <GlassCard>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="info">Current Plan</Badge>
                  <h2 className="mt-2 text-2xl font-bold">{currentPlan.name}</h2>
                  <p className="mt-1 text-muted">{currentPlan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${currentPlan.price}</div>
                  <div className="text-sm text-muted">/month</div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="secondary">Change Plan</Button>
                <Button variant="ghost">Cancel Subscription</Button>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg font-semibold">Usage This Month</h2>
              <div className="mt-6 space-y-6">
                {[
                  { label: "Repositories", used: 7, limit: 10 },
                  { label: "AI Queries", used: 89, limit: 500 },
                  { label: "Generations", used: 41, limit: 100 },
                  { label: "Team Members", used: 4, limit: 10 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="text-muted">
                        {item.used} / {item.limit}
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-electric transition-all"
                        style={{
                          width: `${Math.min((item.used / item.limit) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg font-semibold">Billing History</h2>
              <div className="mt-4 space-y-3">
                {[
                  { date: "May 1, 2026", amount: "$29.00", status: "Paid" },
                  { date: "Apr 1, 2026", amount: "$29.00", status: "Paid" },
                  { date: "Mar 1, 2026", amount: "$29.00", status: "Paid" },
                ].map((invoice) => (
                  <div
                    key={invoice.date}
                    className="flex items-center justify-between rounded-lg border border-white/5 px-4 py-3"
                  >
                    <div>
                      <div className="font-medium">{invoice.date}</div>
                      <div className="text-sm text-muted">Pro Plan — Monthly</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{invoice.amount}</span>
                      <Badge variant="success">{invoice.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-electric-light" />
                <h3 className="font-semibold">Payment Method</h3>
              </div>
              <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="font-medium">Visa ending in 4242</div>
                <div className="text-sm text-muted">Expires 12/2027</div>
              </div>
              <Button variant="secondary" size="sm" className="mt-4 w-full">
                Update Payment Method
              </Button>
            </GlassCard>

            <div className="rounded-xl border border-electric/30 bg-electric/5 p-6">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-electric-light" />
                <h3 className="font-semibold">Upgrade to Team</h3>
              </div>
              <p className="mt-2 text-sm text-muted">
                Get unlimited repositories, version tracking, and SSO for your
                organization.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {pricingPlans[2].features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-electric" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full">Upgrade — $79/mo</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
