"use client";

import { motion } from "framer-motion";
import { integrations, testimonials, trustMetrics } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Trust() {
  const featured = testimonials[1];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-background p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="section-eyebrow">Performance</p>
            <div className="mt-6 space-y-6">
              {trustMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[13px] text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-background p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="section-eyebrow">Integrations</p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2.5 transition-colors duration-200 hover:border-border-hover hover:bg-subtle"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-electric" />
                  <span className="text-[13px] text-foreground/70">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-background p-6 sm:col-span-2 sm:p-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="section-eyebrow">From engineering teams</p>
            <blockquote className="mt-6 text-[15px] leading-relaxed">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-[13px] font-medium">{featured.author}</p>
              <p className="text-[13px] text-muted">
                {featured.role}, {featured.company}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
