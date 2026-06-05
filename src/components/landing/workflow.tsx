"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { outputTypes, workflowSteps } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Workflow() {
  return (
    <section id="workflow" className="border-y border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pipeline"
          title="Repository in. Documentation out."
          description="DocForge processes your codebase through a structured pipeline — no manual templates required."
          align="center"
        />

        <motion.div
          className="mt-12 flex flex-col gap-0 md:mt-16 md:flex-row md:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className="relative flex flex-1 flex-col"
            >
              <div className="interactive-lift flex items-start gap-4 rounded-lg border border-border bg-surface-elevated p-4 md:flex-col md:items-center md:border-0 md:bg-transparent md:p-0 md:text-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated font-mono text-[13px] text-electric-light">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="md:mt-4">
                  <p className="font-medium">{step.label}</p>
                  <p className="mt-1 text-[13px] text-muted">{step.detail}</p>
                </div>
              </div>

              {index < workflowSteps.length - 1 && (
                <>
                  <div className="my-3 ml-5 h-6 w-px bg-border md:hidden" />
                  <div className="absolute right-0 top-5 hidden h-px w-full translate-x-1/2 border-t border-dashed border-border md:block" />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-16 sm:gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
        >
          {outputTypes.map((type) => (
            <span
              key={type}
              className="rounded-md border border-border px-3 py-1.5 font-mono text-[12px] text-muted transition-colors duration-200 hover:border-electric/30 hover:text-electric-light"
            >
              {type}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
