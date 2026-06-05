"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { pricingPlans } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Start free. Upgrade when your team grows."
          align="center"
        />

        <motion.div
          className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={cn(
                "interactive-lift relative rounded-lg border p-6 sm:p-8",
                plan.popular
                  ? "border-electric bg-electric/[0.04]"
                  : "border-border bg-surface-elevated"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 left-6 rounded-md border border-electric/30 bg-background px-2 py-0.5 text-[11px] font-medium text-electric-light">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-[13px] text-muted">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-[13px] text-muted">/{plan.period}</span>
                )}
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px]"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "primary" : "secondary"}
                href="/dashboard"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
